import * as React from "react";

import ParticleSystemCanvas from "../particle-system-canvas";
import Footer from "./footer";
import SEO from "./seo";
import { ThemeProvider } from "../../context/theme";

export default function Layout(props) {
  return (
    <ThemeProvider value="light">
      <SEO />
      <ParticleSystemCanvas />
      <div className="container mx-auto px-2 md:px-4">
        {props.children}
        <hr className="my-8" />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
