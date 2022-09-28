import { motion, useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ExternalLink from '../../common/external-link';

export default function Certificate() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  function certificatesSortFn(
    a: typeof certificates[0],
    b: typeof certificates[0]
  ) {
    return b.url.localeCompare(a.url);
  }

  return (
    <section>
      <h2 className='mb-4 text-center text-5xl'>Certificates</h2>

      <motion.div
        ref={ref}
        variants={container}
        initial='hidden'
        animate={controls}
        className='columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3'
      >
        {certificates.sort(certificatesSortFn).map((certificate) => (
          <motion.div
            key={certificate.url}
            variants={item}
            className='overflow-hidden rounded-lg shadow transition hover:shadow-md'
          >
            <ExternalLink href={certificate.url} aria-label={certificate.label}>
              {certificate.component}
            </ExternalLink>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

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

const certificates = [
  {
    label: 'Certificate APIs and Microservices',
    component: (
      <StaticImage
        src='../../../images/APIs and Microservices.png'
        alt='APIs and Microservices'
      />
    ),
    url: 'https://www.freecodecamp.org/certification/brandon-julio-thenaro/back-end-development-and-apis',
  },
  {
    label: 'Certificate Front End Libraries',
    component: (
      <StaticImage
        src='../../../images/Front End Libraries.png'
        alt='Front End Libraries'
      />
    ),
    url: 'https://www.freecodecamp.org/certification/brandon-julio-thenaro/front-end-development-libraries',
  },
  {
    label: 'Certificate Java Basic',
    component: (
      <StaticImage src='../../../images/Java (Basic).png' alt='Java Basic' />
    ),
    url: 'https://www.hackerrank.com/certificates/db0e67348aaf',
  },
  {
    label: 'Certificate JavaScript Algorithms and Data Structures',
    component: (
      <StaticImage
        src='../../../images/JavaScript Algorithms and Data Structures.png'
        alt='JavaScript Algorithms and Data Structures'
      />
    ),
    url: 'https://www.freecodecamp.org/certification/brandon-julio-thenaro/javascript-algorithms-and-data-structures',
  },
  {
    label: 'Certificate JavaScript Basic',
    component: (
      <StaticImage
        src='../../../images/JavaScript (Basic).png'
        alt='JavaScript Basic'
      />
    ),
    url: 'https://www.hackerrank.com/certificates/dbd7ce689a45',
  },
  {
    label: 'Certificate React Basic',
    component: (
      <StaticImage src='../../../images/React (Basic).png' alt='React Basic' />
    ),
    url: 'https://www.hackerrank.com/certificates/c962efa53fc2',
  },
  {
    label: 'Certificate Responsive Web Design',
    component: (
      <StaticImage
        src='../../../images/Responsive Web Design.png'
        alt='Responsive Web Design'
      />
    ),
    url: 'https://www.freecodecamp.org/certification/brandon-julio-thenaro/responsive-web-design',
  },
  {
    label: 'Certificate Rest API',
    component: (
      <StaticImage src='../../../images/Rest API.png' alt='Rest API' />
    ),
    url: 'https://www.hackerrank.com/certificates/c8d332eb3414',
  },
  {
    label: 'Certificate Tokopedia START Summit',
    component: (
      <StaticImage
        src='../../../images/Tokopedia START Summit.png'
        alt='Tokopedia START Summit'
      />
    ),
    url: 'https://bit.ly/2xPxg83',
  },
  {
    label: 'Certificate Typing Speed',
    component: (
      <StaticImage src='../../../images/Typing Speed.jpg' alt='Typing Speed' />
    ),
    url: 'https://bit.ly/2WH3M4U',
  },
  {
    label: 'Certificate Indomaret Common Knowledge Quiz',
    component: (
      <StaticImage
        src='../../../images/Indomaret Common Knowledge Quiz.png'
        alt='Indomaret Common Knowledge Quiz'
      />
    ),
    url: '',
  },
  {
    label: 'Information Security',
    component: (
      <StaticImage
        src='../../../images/Information Security.png'
        alt='Information Security'
      />
    ),
    url: 'https://www.freecodecamp.org/certification/brandon-julio-thenaro/information-security-v7',
  },
  {
    label: 'Quality Assurance',
    component: (
      <StaticImage
        src='../../../images/Quality Assurance.png'
        alt='Quality Assurance'
      />
    ),
    url: 'https://www.freecodecamp.org/certification/brandon-julio-thenaro/quality-assurance-v7',
  },
  {
    label: 'Data Visualization',
    component: (
      <StaticImage
        src='../../../images/Data Visualization.png'
        alt='Data Visualization'
      />
    ),
    url: 'https://www.freecodecamp.org/certification/brandon-julio-thenaro/data-visualization',
  },
  {
    label: 'Belajar Dasar-Dasar DevOps',
    component: (
      <StaticImage
        src='../../../images/Belajar Dasar-Dasar DevOps.png'
        alt='Belajar Dasar-Dasar DevOps'
      />
    ),
    url: 'https://www.dicoding.com/certificates/GRX5LLJO3P0M',
  },
  {
    label: 'Belajar Jaringan Komputer untuk Pemula',
    component: (
      <StaticImage
        src='../../../images/Belajar Jaringan Komputer untuk Pemula.png'
        alt='Belajar Jaringan Komputer untuk Pemula'
      />
    ),
    url: 'https://www.dicoding.com/certificates/N9ZO7478RZG5',
  },
  {
    label: 'CSS',
    component: <StaticImage src='../../../images/CSS.png' alt='CSS' />,
    url: 'https://www.hackerrank.com/certificates/2b870b85fff3',
  },
  {
    label: 'SQL (Basic)',
    component: (
      <StaticImage src='../../../images/SQL (Basic).png' alt='SQL (Basic)' />
    ),
    url: 'https://www.hackerrank.com/certificates/e950f9fb6fb2',
  },
  {
    label: 'Menjadi Linux System Administrator',
    component: (
      <StaticImage
        src='../../../images/Menjadi Linux System Administrator.png'
        alt='Menjadi Linux System Administrator'
      />
    ),
    url: 'https://www.dicoding.com/certificates/JMZVGKR2QZN9',
  },
  {
    label: 'Belajar Implementasi CI/CD',
    component: (
      <StaticImage
        src='../../../images/Belajar Implementasi CI-CD.png'
        alt='Belajar Implementasi CI/CD'
      />
    ),
    url: 'https://www.dicoding.com/certificates/6RPNDLD29Z2M',
  },
  {
    label: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    component: (
      <StaticImage
        src='../../../images/AWS Academy Graduate - AWS Academy Cloud Foundations.png'
        alt='AWS Academy Graduate - AWS Academy Cloud Foundations'
      />
    ),
    url: 'https://www.credly.com/badges/f8244e96-1f16-4c51-b1d5-10e941338303/linked_in_profile',
  },
  {
    label: 'AWS Certified Cloud Practitioner Foundational',
    component: (
      <StaticImage
        src='../../../images/AWS Certified Cloud Practitioner Foundational.png'
        alt='AWS Certified Cloud Practitioner Foundational'
      />
    ),
    url: 'https://www.credly.com/badges/3da6d8a4-1b45-4027-8fa3-bb5245f3dcfb/linked_in_profile',
  },
  {
    label: 'AWS Certified Cloud Practitioner',
    component: (
      <StaticImage
        src='../../../images/AWS Certified Cloud Practitioner.png'
        alt='AWS Certified Cloud Practitioner'
      />
    ),
    url: 'https://aw.certmetrics.com/amazon/public/verification.aspx',
  },
];
