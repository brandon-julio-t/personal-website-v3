import * as React from "react";
import { TechnologyStackWeb } from "./technology-stack-web";
import TechnologyStackProgramming from "./technology-stack-programming";
import TechnologyStackDatabase from "./technology-stack-database";
import TechnologyStackCloud from "./technology-stack-cloud";
import TechnologyStackOthers from "./technology-stack-others";

export default function TechnologyStack() {
  return (
    <section className="max-w-screen-lg mx-auto">
      <h2 className="text-5xl text-center">Technology Stack</h2>

      <div className="flex flex-col space-y-4 my-8">
        <TechnologyStackWeb />
        <TechnologyStackProgramming />
        <TechnologyStackDatabase />
        <TechnologyStackCloud />
        <TechnologyStackOthers />
      </div>
    </section>
  );
}
