import * as React from "react";
import { TechnologyStackBackEnd } from "./technology-stack-back-end";
import TechnologyStackProgramming from "./technology-stack-programming";
import TechnologyStackDatabase from "./technology-stack-database";
import TechnologyStackCloud from "./technology-stack-cloud";
import TechnologyStackOthers from "./technology-stack-others";
import { TechnologyStackFrontEnd } from "./technology-stack-front-end";

export default function TechnologyStack() {
  return (
    <section className="max-w-screen-lg mx-auto">
      <h2 className="text-5xl text-center">Technology Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
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
