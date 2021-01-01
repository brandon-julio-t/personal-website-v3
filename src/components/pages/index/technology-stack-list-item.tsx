import * as React from "react";
import { useState } from "react";

export default function TechnologyStackListItem(props) {
  const [hover, setHover] = useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex items-center justify-center space-x-1 transform-gpu hover:scale-150 transition duration-75 ease-in-out text-lg group"
      {...props}
    >
      <span
        className={`transition-all duration-150 ease-in-out opacity-0 group-hover:opacity-50 transform-gpu ${
          hover ? `translate-x-0` : `-translate-x-4`
        }`}
      >
        &gt;
      </span>
      {props.children}
      <span
        className={`transition-all duration-150 ease-in-out opacity-0 group-hover:opacity-50 transform-gpu ${
          hover ? `translate-x-0` : `translate-x-4`
        }`}
      >
        &lt;
      </span>
    </li>
  );
}
