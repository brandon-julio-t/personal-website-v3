import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import React, { FunctionComponent, useEffect } from 'react';
import IRepository from '../../../interfaces/repository';
import Skeleton from '../../common/skeleton';
import GithubProjectsRepositoryCard from './github-projects-repository-card';

const GithubProjectsCardsContainer: FunctionComponent<{
  title: string;
  repositories: IRepository[];
  isLoading: boolean;
}> = ({ title, repositories, isLoading }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);
  return (
    <>
      <h3 className='mt-8 mb-4 text-center text-3xl'>{title}</h3>
      <motion.div
        ref={ref}
        variants={container}
        initial='hidden'
        animate={controls}
        className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <motion.div key={idx} variants={item}>
                <Skeleton className='mx-auto h-32 w-full' />
              </motion.div>
            ))
          : repositories.map((repository, idx) => (
              <motion.div key={idx} variants={item}>
                <GithubProjectsRepositoryCard repository={repository} />
              </motion.div>
            ))}
      </motion.div>
    </>
  );
};

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default GithubProjectsCardsContainer;
