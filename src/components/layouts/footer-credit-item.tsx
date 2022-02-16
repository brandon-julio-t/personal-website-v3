import * as React from "react";

export default function FooterCreditItem(props) {
  return (
    <div className="m-auto w-32 transform-gpu transition duration-75 ease-in-out hover:scale-125">
      {props.children}
    </div>
  );
}
