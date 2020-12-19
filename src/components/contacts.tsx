import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFreeCodeCamp,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export default function Contacts() {
  return (
    <>
      <a href="mailto:brandon.julio.t@icloud.com">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <OutboundLink
        href="https://www.facebook.com/profile.php?id=100008724798107"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </OutboundLink>
      <OutboundLink
        href="https://www.freecodecamp.org/brandon-julio-thenaro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" />
      </OutboundLink>
      <OutboundLink
        href="https://github.com/brandon-julio-t"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </OutboundLink>
      <OutboundLink
        href="https://www.instagram.com/brandon.julio.t"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </OutboundLink>
      <OutboundLink
        href="https://www.linkedin.com/in/brandonjuliothenaro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </OutboundLink>
      <OutboundLink
        href="https://twitter.com/brandon_julio_t"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </OutboundLink>
    </>
  );
}
