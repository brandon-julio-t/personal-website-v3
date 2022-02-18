import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import ExternalLink from '../../common/external-link';

export default function Certificate() {
  return (
    <section>
      <h2 className="mb-4 text-center text-5xl">Certificates</h2>

      <div className="sm:columns-2 md:columns-3 columns-1 gap-4 space-y-4">
        {certificates.map(certificate => (
          <div key={certificate.url} className="overflow-hidden rounded-lg shadow transition hover:shadow-md">
            <ExternalLink href={certificate.url} aria-label={certificate.label}>
              {certificate.component}
            </ExternalLink>
          </div>
        ))}
      </div>
    </section>
  );
}

const certificates = [
  {
    label: 'Certificate APIs and Microservices',
    component: <StaticImage src="../../../images/APIs and Microservices.png" alt="APIs and Microservices" />,
    url: 'https://bit.ly/301Cvx8',
  },
  {
    label: 'Certificate Front End Libraries',
    component: <StaticImage src="../../../images/Front End Libraries.png" alt="Front End Libraries" />,
    url: 'https://bit.ly/2YTCNpg',
  },
  {
    label: 'Certificate Java Basic',
    component: <StaticImage src="../../../images/Java (Basic).png" alt="Java Basic" />,
    url: 'https://bit.ly/2YjFn5V',
  },
  {
    label: 'Certificate JavaScript Algorithms and Data Structures',
    component: (
      <StaticImage
        src="../../../images/JavaScript Algorithms and Data Structures.png"
        alt="JavaScript Algorithms and Data Structures"
      />
    ),
    url: 'https://bit.ly/3dA7eFe',
  },
  {
    label: 'Certificate JavaScript Basic',
    component: <StaticImage src="../../../images/JavaScript (Basic).png" alt="JavaScript Basic" />,
    url: 'https://bit.ly/2UpwkQ0',
  },
  {
    label: 'Certificate React Basic',
    component: <StaticImage src="../../../images/React (Basic).png" alt="React Basic" />,
    url: 'https://bit.ly/2MK8kmd',
  },
  {
    label: 'Certificate Responsive Web Design',
    component: <StaticImage src="../../../images/Responsive Web Design.png" alt="Responsive Web Design" />,
    url: 'https://bit.ly/35OoTpT',
  },
  {
    label: 'Certificate Rest API',
    component: <StaticImage src="../../../images/Rest API.png" alt="Rest API" />,
    url: 'https://bit.ly/2Oh4RMV',
  },
  {
    label: 'Certificate Tokopedia START Summit',
    component: <StaticImage src="../../../images/Tokopedia START Summit.png" alt="Tokopedia START Summit" />,
    url: 'https://bit.ly/2xPxg83',
  },
  {
    label: 'Certificate Typing Speed',
    component: <StaticImage src="../../../images/Typing Speed.jpg" alt="Typing Speed" />,
    url: 'https://bit.ly/2WH3M4U',
  },
  {
    label: 'Certificate Indomaret Common Knowledge Quiz',
    component: (
      <StaticImage src="../../../images/Indomaret Common Knowledge Quiz.png" alt="Indomaret Common Knowledge Quiz" />
    ),
    url: '',
  },
];
