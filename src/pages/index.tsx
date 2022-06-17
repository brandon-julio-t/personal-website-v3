import loadable from '@loadable/component';
import * as React from 'react';
import Hero from '../components/pages/index/hero';

const GithubProjects = loadable(
  () => import('../components/pages/index/github-projects/github-projects')
);
const Certificate = loadable(
  () => import('../components/pages/index/certificate')
);
const TechnologyStack = loadable(
  () => import('../components/pages/index/technology-stack/technology-stack')
);
const WorkExperience = loadable(
  () => import('../components/pages/index/work-experience/work-experience')
);

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
