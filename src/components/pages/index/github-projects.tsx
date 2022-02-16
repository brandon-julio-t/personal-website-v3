import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
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
      <h2 className="text-center text-5xl">GitHub Projects</h2>

      <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {repositories.map((repository, idx) => (
          <GithubProjectsRepositoryCard key={idx} repository={repository} />
        ))}
      </div>
    </section>
  );
}
