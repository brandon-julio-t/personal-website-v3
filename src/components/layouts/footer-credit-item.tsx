import * as React from "react";

export default function FooterCreditItem(props) {
  return (
    <div className="w-32 m-auto transform-gpu hover:scale-125 transition duration-75 ease-in-out">
      {props.children}
    </div>
  );
}
