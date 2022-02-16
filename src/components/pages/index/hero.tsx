import * as React from "react";

import Contacts from "../../contacts";
import HeroScrollDownIndicator from "./hero-scroll-down-indicator";

export default function Hero() {
  return (
    <header className="relative flex h-screen flex-col items-center justify-center space-y-8 text-center">
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

      <Contacts />

      <HeroScrollDownIndicator />
    </header>
  );
}
