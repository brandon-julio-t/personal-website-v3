import * as React from "react";

import ExternalLink from "../../external-link";
import Angkatan from "../../images/angkatan";

export default function WorkExperience() {
  return (
    <section>
      <h2 className="text-5xl text-center">Work Experience</h2>

      <section className="flex flex-col justify-center space-y-8 my-8 max-w-screen-md mx-auto">
        <h3 className="text-4xl text-center">
          Software Laboratory Center
          <br />
          <small className="text-base">2020 - present</small>
        </h3>

        <figure className="my-8">
          <ExternalLink href="https://www.instagram.com/slcbinusuniv">
            <Angkatan
              alt="20-2 assistants at Software Laboratory Center"
              className="rounded-3xl"
            />
          </ExternalLink>

          <figcaption className="text-xl text-center italic text-gray-500 my-8">
            — “In Honesty and Hardwork, We Strive for Excellence” —
            <br />— 20-2 —
          </figcaption>
        </figure>
      </section>
    </section>
  );
}
