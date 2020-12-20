import * as React from "react";
import { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import ExternalLink from "../../external-link"

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
    }`)

    const repositories = data.githubData.rawResult.data.viewer.pinnedItems.nodes

    const toTitleCase = (text: string) =>
        text.split("-")
            .map((word, idx) => `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`)
            .join(" ")


    return (
        <section>
            <h2 className="text-5xl text-center">GitHub Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
                {repositories.map((repository, idx) => (
                    <div key={idx} className="rounded-3xl border border-gray-400 border-opacity-40 px-8 py-4 hover:border-opacity-60 hover:shadow hover:bg-blur transition-all duration-300">
                        <h3 className="text-lg font-bold">
                            {toTitleCase(repository.name)}
                        </h3>

                        <small>{new Intl.DateTimeFormat([], { day: "2-digit", month: "long", year: "numeric" }).format(new Date(repository.createdAt))}</small>

                        <div className="flex flex-wrap my-2">
                            {repository.languages.nodes.map((language, idx) => (
                                <div key={idx} className="rounded-full bg-gray-300 bg-opacity-40 text-center px-2 py-1">{language.name}</div>
                            ))}
                        </div>

                        <ExternalLink href={repository.url} className="hover:underline">
                            <FontAwesomeIcon icon={faGithub} /> View on GitHub
                        </ExternalLink>

                        <br />

                        <ExternalLink href={repository.homepageUrl} className="hover:underline">
                            <FontAwesomeIcon icon={faGlobe} /> View Live
                        </ExternalLink>

                        <p className="text-base italic my-2">{repository.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}