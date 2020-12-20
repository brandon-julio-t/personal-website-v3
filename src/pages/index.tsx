import * as React from "react";
import loadable from '@loadable/component'

import Certificate from "../components/pages/index/certificate";
import Hero from "../components/pages/index/hero";
import TechnologyStack from "../components/pages/index/technology-stack";
import GithubProjects from "../components/pages/index/github-projects";

const CurriculumVitae = loadable(() => import('../components/pages/index/curriculum-vitae'))

export default function Index() {
    return (
        <>
            <Hero />
            <main>
                <GithubProjects />
                <TechnologyStack />
                <Certificate />
                <CurriculumVitae />
            </main>
        </>
    );
}
