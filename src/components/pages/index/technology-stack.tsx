import * as React from "react";
import { TechnologyStackBackEnd } from "./technology-stack-back-end";
import TechnologyStackProgramming from "./technology-stack-programming";
import TechnologyStackDatabase from "./technology-stack-database";
import TechnologyStackCloud from "./technology-stack-cloud";
import TechnologyStackOthers from "./technology-stack-others";
import { TechnologyStackFrontEnd } from "./technology-stack-front-end";

export default function TechnologyStack() {
  return (
    <section className="mx-auto max-w-screen-lg">
      <h2 className="text-center text-5xl">Technology Stack</h2>

      <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <TechnologyStackFrontEnd />
        <TechnologyStackBackEnd />
        <TechnologyStackProgramming />
        <TechnologyStackDatabase />
        <TechnologyStackCloud />
        <TechnologyStackOthers />
      </div>
    </section>
  );
}
