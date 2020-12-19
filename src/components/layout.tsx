import * as React from "react";

export default function Layout(props) {
  return (
    <div className="container mx-auto">
      <header>
        <h1>Header</h1>
      </header>

      <main>{props.children}</main>

      <footer>footer</footer>
    </div>
  );
}
