import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import ExternalLink from "../../external-link";
import GithubProjectsRepositoryCard from "./github-projects-repository-card";

export default function GithubProjects() {
  const data = useStaticQuery(graphql`
    query githubProjects {
      githubData {
        rawResult {
          data {
            viewer {
              pinnedItems {
                nodes {
                  url
                  name
                  homepageUrl
                  description
                  createdAt
                  languages {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const repositories = data.githubData.rawResult.data.viewer.pinnedItems.nodes;

  return (
    <section>
      <h2 className="text-5xl text-center">GitHub Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {repositories.map((repository, idx) => (
          <GithubProjectsRepositoryCard key={idx} repository={repository} />
        ))}
      </div>
    </section>
  );
}
