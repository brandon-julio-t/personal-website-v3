import * as React from "react";
import TechnologyStackListItem from "./technology-stack-list-item";

export default function TechnologyStackCloud() {
  return (
    <section className="text-center">
      <h3 className="text-4xl">Cloud</h3>
      <ul className="my-1">
        <TechnologyStackListItem>
          <i className="devicon-heroku-original colored" />
          <span>Heroku</span>
        </TechnologyStackListItem>
        <TechnologyStackListItem>
          <img
            className="h-5"
            src="https://www.netlify.com/img/press/logos/logomark.svg"
            alt="Netlify Logo"
          />
          <span>Netlify</span>
        </TechnologyStackListItem>
      </ul>
    </section>
  );
}
