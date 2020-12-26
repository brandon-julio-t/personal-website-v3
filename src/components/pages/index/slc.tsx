import * as React from 'react';

import ExternalLink from '../../external-link';
import Angkatan from '../../images/angkatan';

export default function SLC() {
  return (
    <section>
      <h2 className="text-5xl text-center">
        <ExternalLink href="https://www.instagram.com/slcbinusuniv/" className="hover:underline">
          Software Laboratory Center
        </ExternalLink>
      </h2>

      <figure
        className="max-w-screen-md mx-auto my-8 transform-gpu transition duration-300 ease-in-out hover:scale-105"
        title="20-2 Assistants"
      >
        <ExternalLink href="https://www.instagram.com/slcbinusuniv">
          <Angkatan alt="20-2 assistants at Software Laboratory Center" className="rounded-3xl" />
        </ExternalLink>

        <figcaption className="text-xl text-center italic text-gray-500 my-8">
          — “In Honesty and Hardwork, We Strive for Excellence” —
        </figcaption>
      </figure>
    </section>
  );
}
