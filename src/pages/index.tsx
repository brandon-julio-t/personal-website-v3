import * as React from "react";

import Certificate from "../components/pages/index/certificate";
import Hero from "../components/pages/index/hero";
import TechnologyStack from "../components/pages/index/technology-stack";
import GithubProjects from "../components/pages/index/github-projects";
import WorkExperience from "../components/pages/index/work-experience";

export default function Index() {
  return (
    <main>
      <Hero />
      <GithubProjects />
      <WorkExperience />
      <TechnologyStack />
      <Certificate />
    </main>
  );
}
