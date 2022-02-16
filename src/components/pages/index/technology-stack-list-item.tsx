import * as React from "react";
import { useState } from "react";

export default function TechnologyStackListItem(props) {
  const [hover, setHover] = useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group flex transform-gpu items-center justify-center space-x-1 text-lg transition duration-75 ease-in-out hover:scale-150"
      {...props}
    >
      <span
        className={`transform-gpu opacity-0 transition-all duration-150 ease-in-out group-hover:opacity-50 ${
          hover ? `translate-x-0` : `-translate-x-4`
        }`}
      >
        &gt;
      </span>
      {props.children}
      <span
        className={`transform-gpu opacity-0 transition-all duration-150 ease-in-out group-hover:opacity-50 ${
          hover ? `translate-x-0` : `translate-x-4`
        }`}
      >
        &lt;
      </span>
    </li>
  );
}
