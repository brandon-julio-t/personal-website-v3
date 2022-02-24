import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faFreeCodeCamp,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import ExternalLink from './external-link';

export default function Contacts() {
  return (
    <section className='mx-auto my-8 grid max-w-screen-sm grid-cols-4 gap-8 md:grid-cols-8'>
      <ExternalLink
        className='origin-center transform-gpu transition duration-75 ease-in-out hover:scale-150'
        href='https://www.facebook.com/profile.php?id=100008724798107'
        aria-label='Facebook'
        title='Facebook'
      >
        <FontAwesomeIcon className='h-6' icon={faFacebook} size='2x' />
      </ExternalLink>
      <ExternalLink
        className='origin-center transform-gpu transition duration-75 ease-in-out hover:scale-150'
        href='https://www.instagram.com/brandon.julio.t'
        aria-label='Instagram'
        title='Instagram'
      >
        <FontAwesomeIcon className='h-6' icon={faInstagram} size='2x' />
      </ExternalLink>
      <ExternalLink
        className='origin-center transform-gpu transition duration-75 ease-in-out hover:scale-150'
        href='https://twitter.com/brandon_julio_t'
        aria-label='Twitter'
        title='Twitter'
      >
        <FontAwesomeIcon className='h-6' icon={faTwitter} size='2x' />
      </ExternalLink>
      <ExternalLink
        className='origin-center transform-gpu transition duration-75 ease-in-out hover:scale-150'
        href='https://github.com/brandon-julio-t'
        aria-label='GitHub'
        title='GitHub'
      >
        <FontAwesomeIcon className='h-6' icon={faGithub} size='2x' />
      </ExternalLink>
      <a
        className='origin-center transform-gpu transition duration-75 ease-in-out hover:scale-150'
        href='mailto:brandon.julio.t@icloud.com'
        aria-label='Email'
        title='Email'
      >
        <FontAwesomeIcon className='h-6' icon={faEnvelope} size='2x' />
      </a>
      <ExternalLink
        className='origin-center transform-gpu transition duration-75 ease-in-out hover:scale-150'
        href='https://www.linkedin.com/in/brandonjuliothenaro'
        aria-label='LinkedIn'
        title='LinkedIn'
      >
        <FontAwesomeIcon className='h-6' icon={faLinkedin} size='2x' />
      </ExternalLink>
      <ExternalLink
        className='origin-center transform-gpu transition duration-75 ease-in-out hover:scale-150'
        href='https://s.id/cv-bjt'
        aria-label='Curriculum Vitae'
        title='Curriculum Vitae'
      >
        <FontAwesomeIcon className='h-6' icon={faFileAlt} size='2x' />
      </ExternalLink>
      <ExternalLink
        className='origin-center transform-gpu transition duration-75 ease-in-out hover:scale-150'
        href='https://www.freecodecamp.org/brandon-julio-thenaro'
        aria-label='freeCodeCamp'
        title='freeCodeCamp'
      >
        <FontAwesomeIcon className='h-6' icon={faFreeCodeCamp} size='2x' />
      </ExternalLink>
    </section>
  );
}
