import * as React from 'react';
import { useEffect, useState } from 'react';
import { useOnWindowScroll, useTimeout } from 'rooks';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeroScrollDownIndicator() {
  const showScrollDownIndicatorTimeout = 3500;
  const [showScrollDownIndicator, setShowScrollDownIndicator] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { start, clear } = useTimeout(() => {
    setShowScrollDownIndicator(true);
  }, showScrollDownIndicatorTimeout);

  useEffect(() => {
    start();
    return () => clear();
  }, []);

  if (typeof window !== 'undefined') {
    useOnWindowScroll(() => {
      setHasScrolled(true);
      setShowScrollDownIndicator(false);
      clear();
    }, !hasScrolled);
  }

  return (
    <FontAwesomeIcon
      icon={faChevronDown}
      className={`absolute bottom-0 mx-auto block h-5 transform-gpu transition-all duration-300 ${
        showScrollDownIndicator ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
      }`}
      size="2x"
    />
  );
}
