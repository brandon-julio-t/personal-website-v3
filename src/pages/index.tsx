import * as React from "react";

import Certificate from "../components/pages/index/certificate";
import Hero from "../components/pages/index/hero";
import TechnologyStack from "../components/pages/index/technology-stack";
import CurriculumVitae from "../components/pages/index/curriculum-vitae";
import GithubProjects from "../components/pages/index/github-projects";

export default function Index() {
  return (
    <>
      <Hero />
      <main>
        <TechnologyStack />
        <GithubProjects />
        <Certificate />
        <CurriculumVitae />
      </main>
    </>
  );
}
