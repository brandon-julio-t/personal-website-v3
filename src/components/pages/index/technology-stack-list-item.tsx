import { motion } from 'framer-motion';
import * as React from 'react';
import { useState } from 'react';

const TechnologyStackListItem: React.FunctionComponent<React.HTMLAttributes<HTMLLIElement>> = ({
  children,
  ...rest
}) => {
  const [hover, setHover] = useState(false);
  return (
    <li {...rest}>
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group flex transform-gpu items-center justify-center space-x-1 text-lg transition duration-75 ease-in-out hover:scale-150"
      >
        <span
          className={`transform-gpu opacity-0 transition-all duration-150 ease-in-out group-hover:opacity-50 ${
            hover ? `translate-x-0` : `-translate-x-4`
          }`}
        >
          &gt;
        </span>
        {children}
        <span
          className={`transform-gpu opacity-0 transition-all duration-150 ease-in-out group-hover:opacity-50 ${
            hover ? `translate-x-0` : `translate-x-4`
          }`}
        >
          &lt;
        </span>
      </motion.div>
    </li>
  );
};

export default TechnologyStackListItem;
