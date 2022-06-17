import loadable from '@loadable/component';
import { motion, useAnimation } from 'framer-motion';
import * as React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TechnologyStackBackEnd = loadable(
  () => import('./technology-stack-back-end')
);
const TechnologyStackCloud = loadable(() => import('./technology-stack-cloud'));
const TechnologyStackDatabase = loadable(
  () => import('./technology-stack-database')
);
const TechnologyStackFrontEnd = loadable(
  () => import('./technology-stack-front-end')
);
const TechnologyStackOthers = loadable(
  () => import('./technology-stack-others')
);
const TechnologyStackProgramming = loadable(
  () => import('./technology-stack-programming')
);

export default function TechnologyStack() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <section className='mx-auto max-w-screen-lg'>
      <h2 className='text-center text-5xl'>Technology Stack</h2>

      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        initial='hidden'
        animate={controls}
        className='my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
      >
        <TechnologyStackFrontEnd />
        <TechnologyStackBackEnd />
        <TechnologyStackProgramming />
        <TechnologyStackDatabase />
        <TechnologyStackCloud />
        <TechnologyStackOthers />
      </motion.div>
    </section>
  );
}
