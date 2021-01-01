import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import ExternalLink from "../../external-link";
import GithubProjectsLanguagePill from "./github-projects-language-pill";

export default function GithubProjectsRepositoryCard(props) {
  const { repository } = props;

  const toTitleCase = (text: string): string =>
    text
      .split("-")
      .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
      .join(" ");

  const toReadableDate = (dateString: string): string =>
    new Intl.DateTimeFormat([], {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(dateString));

  return (
    <div className="rounded-xl border border-gray-400 border-opacity-40 px-8 py-4 hover:border-opacity-60 hover:shadow hover:bg-blur transition duration-300 transform-gpu hover:scale-105 transition duration-75 ease-in-out">
      <h3 className="text-lg font-bold">{toTitleCase(repository.name)}</h3>
      <small>{toReadableDate(repository.createdAt)}</small>

      <div className="flex flex-wrap my-2">
        {repository.languages.nodes.map((language, idx) => (
          <GithubProjectsLanguagePill key={idx} language={language} />
        ))}
      </div>

      <ExternalLink href={repository.url} className="hover:underline">
        <FontAwesomeIcon icon={faGithub} role="img" /> View on GitHub
      </ExternalLink>

      <div className="my-2" />

      <ExternalLink href={repository.homepageUrl} className="hover:underline">
        <FontAwesomeIcon icon={faGlobe} role="img" /> View Live
      </ExternalLink>

      <p className="text-base italic my-2">{repository.description}</p>
    </div>
  );
}
