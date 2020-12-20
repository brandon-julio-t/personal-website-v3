import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFreeCodeCamp,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import ExternalLink from "./external-link";

export default function Contacts() {
  return (
    <section className="mx-auto max-w-screen-sm grid grid-cols-4 md:grid-cols-8 gap-8 my-8">
      <ExternalLink
        href="https://www.facebook.com/profile.php?id=100008724798107"
        aria-label="Facebook"
        title="Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </ExternalLink>
      <ExternalLink
        href="https://www.instagram.com/brandon.julio.t"
        aria-label="Instagram"
        title="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </ExternalLink>
      <ExternalLink
        href="https://twitter.com/brandon_julio_t"
        aria-label="Twitter"
        title="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </ExternalLink>
      <ExternalLink
        href="https://github.com/brandon-julio-t"
        aria-label="GitHub"
        title="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </ExternalLink>
      <a
        href="mailto:brandon.julio.t@icloud.com"
        aria-label="Email"
        title="Email"
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <ExternalLink
        href="https://www.linkedin.com/in/brandonjuliothenaro"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </ExternalLink>
      <ExternalLink
        href="https://s.id/cv-bjt"
        aria-label="Curriculum Vitae"
        title="Curriculum Vitae"
      >
        <FontAwesomeIcon icon={faFileAlt} size="2x" />
      </ExternalLink>
      <ExternalLink
        href="https://www.freecodecamp.org/brandon-julio-thenaro"
        aria-label="freeCodeCamp"
        title="freeCodeCamp"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" />
      </ExternalLink>
    </section>
  );
}
