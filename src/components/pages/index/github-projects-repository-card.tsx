import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import IRepository from "../../../interfaces/repository";
import Card from "../../common/card";
import ExternalLink from "../../common/external-link";
import GithubProjectsLanguagePill from "./github-projects-language-pill";

const GithubProjectsRepositoryCard: React.FunctionComponent<
  React.ComponentProps<"div"> & { repository: IRepository }
> = ({ repository, ...rest }) => {
  const toTitleCase = (text: string): string =>
    text.split("-").length === 1
      ? text[0].toUpperCase() + text.substring(1)
      : text
          .split("-")
          .map(
            (word) => word[0].toUpperCase() + word.substring(1).toLowerCase()
          )
          .join(" ");

  const toReadableDate = (dateString: string): string =>
    new Intl.DateTimeFormat([], {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(dateString));

  return (
    <div {...rest}>
      <Card>
        <h3 className="text-lg font-bold">{toTitleCase(repository.name)}</h3>
        <small>{toReadableDate(repository.createdAt)}</small>

        <div className="my-2 flex flex-wrap space-x-1">
          {repository.languages.nodes.map((language, idx) => (
            <GithubProjectsLanguagePill key={idx} language={language} />
          ))}
        </div>

        <ExternalLink
          href={repository.url}
          className="flex items-center hover:underline"
        >
          <FontAwesomeIcon className="mr-1 h-5" icon={faGithub} /> View on
          GitHub
        </ExternalLink>

        <div className="my-2" />

        {repository.homepageUrl && (
          <ExternalLink
            href={repository.homepageUrl}
            className="flex items-center hover:underline"
          >
            <FontAwesomeIcon className="mr-1 h-5" icon={faGlobe} /> View Live
          </ExternalLink>
        )}

        <p className="my-2 text-base italic">{repository.description}</p>
      </Card>
    </div>
  );
};

export default GithubProjectsRepositoryCard;
