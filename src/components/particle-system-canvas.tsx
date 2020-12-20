import * as React from "react";
import { useEffect, useRef } from "react";
import ParticleSystem from "../particle-system/particle-system";

export default function ParticleSystemCanvas() {
  const particleCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const system = new ParticleSystem(particleCanvas.current);

    return () => system.cleanUp();
  }, []);

  return (
    <canvas
      ref={particleCanvas}
      className="w-screen h-screen fixed z-none opacity-30"
    />
  );
}
