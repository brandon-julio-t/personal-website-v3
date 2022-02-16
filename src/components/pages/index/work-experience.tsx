import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import ExternalLink from "../../external-link";

export default function WorkExperience() {
  return (
    <section>
      <h2 className="text-center text-5xl">Work Experience</h2>

      <section className="my-8 mx-auto flex max-w-screen-md flex-col justify-center space-y-8">
        <h3 className="text-center text-4xl">
          Software Laboratory Center
          <br />
          <small className="text-base">2020 - present</small>
        </h3>

        <figure
          className="mx-auto my-8 max-w-screen-md transform-gpu transition duration-150 ease-in-out hover:scale-105"
          title="20-2 Assistants"
        >
          <ExternalLink href="https://www.instagram.com/slcbinusuniv">
            <StaticImage
              src="../../../images/Angkatan.jpg"
              alt="20-2 assistants at Software Laboratory Center"
              className="rounded-3xl"
            />
          </ExternalLink>

          <figcaption className="my-8 text-center text-xl italic text-gray-500">
            — “In Honesty and Hardwork, We Strive for Excellence” —
            <br />— 20-2 —
          </figcaption>
        </figure>
      </section>
    </section>
  );
}
