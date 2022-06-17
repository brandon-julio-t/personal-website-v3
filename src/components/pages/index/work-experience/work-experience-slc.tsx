import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import ExternalLink from '../../../common/external-link';
import Card from '../../../common/card';

export default function WorkExperienceSLC() {
  return (
    <section className='my-8 mx-auto flex max-w-screen-md flex-col justify-center space-y-8'>
      <h3 className='text-center text-4xl'>
        Software Laboratory Center
        <br />
        <small className='text-base italic'>2020 - present</small>
      </h3>

      <Card>
        <h4 className='text-2xl font-medium'>Research and Development Team (RnD/RDT)</h4>
        <small className='italic'>2021 - now</small>
        <p>
          After a year of being a teaching assistant, I was promoted to the RnD
          team. My tasks in the RnD team are maintaining existing application
          and developing new application for stakeholders.
        </p>
      </Card>

      <Card>
        <h4 className='text-2xl font-medium'>Teaching Assistant</h4>
        <small className='italic'>2020 - 2021</small>
        <p>
          While being a teaching assistant, I am tasked to handle practicum
          operational activities such as teaching practicum subjects,
          participating in teaching qualification and trainings, and grading
          student answers.
        </p>
      </Card>

      <section>
        <figure
          className='mx-auto my-8 max-w-screen-md transform-gpu transition duration-150 ease-in-out hover:scale-105'
          title='20-2 Assistants'
        >
          <ExternalLink href='https://www.instagram.com/slcbinusuniv'>
            <StaticImage
              src='../../../images/Angkatan.jpg'
              alt='20-2 assistants at Software Laboratory Center'
              className='rounded-3xl'
            />
          </ExternalLink>

          <figcaption className='my-8 text-center text-xl italic text-gray-500'>
            — “In Honesty and Hardwork, We Strive for Excellence” —
            <br />— 20-2 —
          </figcaption>
        </figure>
      </section>
    </section>
  );
}
