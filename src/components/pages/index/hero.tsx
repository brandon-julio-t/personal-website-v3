import * as React from "react";

import Contacts from "../../contacts";

export default function Hero() {
    return (
        <header className="h-screen flex flex-col space-y-8 justify-center items-center text-center">
        <h1 className="text-6xl">
          Brandon Julio Thenaro
          <br />
          <small>A.K.A.</small>
          <br />
          <span title="T088">BR20-2</span>
        </h1>

        <h2 className="text-2xl">
          Lifelong learner | Web Developer <br /> Since 2019
        </h2>

        <section className="w-full max-w-screen-sm flex justify-around">
          <Contacts />
        </section>
      </header>
    );
}