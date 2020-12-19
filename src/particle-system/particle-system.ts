import Particle from "./particle";
import { hexToRgb, randomHexColor, randomIntegerBetween } from "./utilities";
import Vector from "./vector";
import Coordinate from "./coordinate";

export default class ParticleSystem {
  public static readonly MIN_LINK_DISTANCE: number = 175;

  private readonly FPS: number = 60;
  private readonly PARTICLES_COUNT: number;
  private readonly MIN_PARTICLE_SIZE: number = 2;
  private readonly MAX_PARTICLE_SIZE: number = 4;
  private readonly PARTICLE_SPEED: number = 1;

  private readonly particles: Particle[];
  private readonly ctx: OffscreenCanvasRenderingContext2D;

  private mouseX: number;
  private mouseY: number;
  private previousFrameTime: number = Date.now();
  private animationFrameId: number = 0;

  public constructor(canvas: HTMLCanvasElement) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const { width, height } = canvas;

    this.ctx = canvas.transferControlToOffscreen().getContext("2d");
    this.PARTICLES_COUNT = (width / height) * (Math.max(width, height) / 50);
    this.particles = [];

    this.fillParticles();
    this.handleWindowResize();
    this.handleMouseMove();
    this.play();
  }

  public cleanUp(): void {
    while (this.particles.length) {
      this.particles.pop();
    }

    cancelAnimationFrame(this.animationFrameId);
  }

  private fillParticles(): void {
    for (let i = 0; i < this.PARTICLES_COUNT; i++) {
      const { width, height } = this.ctx.canvas;

      const x = randomIntegerBetween(0, width);
      const y = randomIntegerBetween(0, height);

      const position = new Coordinate(x, y);

      const size = randomIntegerBetween(
        this.MIN_PARTICLE_SIZE,
        this.MAX_PARTICLE_SIZE
      );

      const speed = new Vector(
        Math.round(
          Math.random() *
            (randomIntegerBetween(-this.PARTICLE_SPEED, this.PARTICLE_SPEED) -
              randomIntegerBetween(-this.PARTICLE_SPEED, this.PARTICLE_SPEED)) +
            randomIntegerBetween(-this.PARTICLE_SPEED, this.PARTICLE_SPEED)
        ),
        Math.round(
          Math.random() *
            (randomIntegerBetween(-this.PARTICLE_SPEED, this.PARTICLE_SPEED) -
              randomIntegerBetween(-this.PARTICLE_SPEED, this.PARTICLE_SPEED)) +
            randomIntegerBetween(-this.PARTICLE_SPEED, this.PARTICLE_SPEED)
        )
      ); // try hard to prevent 0 speed

      const color = hexToRgb(randomHexColor());

      this.particles.push(new Particle(position, size, speed, color, this.ctx));
    }
  }

  private handleWindowResize(): void {
    onresize = () => {
      this.ctx.canvas.width = innerWidth;
      this.ctx.canvas.height = innerHeight;
    };
  }

  private handleMouseMove(): void {
    onmousemove = (e: MouseEvent) => {
      const { x, y } = e;
      this.mouseX = x;
      this.mouseY = y;
    };
  }

  private play(): void {
    const interval = 1000 / this.FPS;
    const now = Date.now();
    const elapsed = now - this.previousFrameTime;

    if (elapsed <= interval) {
      requestAnimationFrame(() => this.play());
      return;
    }

    this.previousFrameTime = now - (elapsed % interval);

    const { width, height } = this.ctx.canvas;
    this.ctx.clearRect(0, 0, width, height);

    this.handleParticleSystem();

    requestAnimationFrame(() => this.play());
  }

  private handleParticleSystem(): void {
    this.particles.forEach((particle, idx) => {
      particle.move();
      particle.draw();
      particle.wrapCircle();

      const mouseCoordinate = new Coordinate(this.mouseX, this.mouseY);
      const distanceToMouse = particle.distanceToCoordinate(mouseCoordinate);
      if (distanceToMouse <= ParticleSystem.MIN_LINK_DISTANCE) {
        particle.linkToCoordinate(mouseCoordinate);
      }

      this.particles.forEach((another) => {
        if (particle === another) {
          return;
        }

        const distance = particle.distanceTo(another);
        if (distance <= ParticleSystem.MIN_LINK_DISTANCE) {
          particle.linkTo(another);
        }
      });
    });
  }
}
