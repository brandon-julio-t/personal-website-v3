import * as React from "react";

import Certificate from "../components/pages/index/certificate";
import Hero from "../components/pages/index/hero";
import TechnologyStack from "../components/pages/index/technology-stack";
import CurriculumVitae from "../components/pages/index/curriculum-vitae";

export default function Index() {
  return (
    <>
      <Hero />
      <main>
        <TechnologyStack />
        <Certificate />
        <CurriculumVitae />
      </main>
    </>
  );
}
