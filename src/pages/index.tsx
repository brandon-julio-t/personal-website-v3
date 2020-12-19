import * as React from "react";
import { useState } from "react";
import { useInterval } from "rooks";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Angkatan from "../components/images/angkatan";
import APIsAndMicroservices from "../components/images/apis-and-microservices";
import FrontEndLibraries from "../components/images/front-end-libraries";
import JavaBasic from "../components/images/java-basic";
import JavaScriptAlgorithmsAndDataStructures from "../components/images/javascript-algorithms-and-data-structures";
import JavaScriptBasic from "../components/images/javascript-basic";
import ReactBasic from "../components/images/react-basic";
import ResponsiveWebDesign from "../components/images/responsive-web-design";
import RestAPI from "../components/images/rest-api";
import TokopediaSTARTSummit from "../components/images/tokopedia-start-summit";
import TypingSpeed from "../components/images/typing-speed";
import Contacts from "../components/contacts";

export default function Index() {
  const certificates = [
    { component: <APIsAndMicroservices />, url: "https://bit.ly/301Cvx8" },
    { component: <FrontEndLibraries />, url: "https://bit.ly/2YTCNpg" },
    { component: <JavaBasic />, url: "https://bit.ly/2YjFn5V" },
    {
      component: <JavaScriptAlgorithmsAndDataStructures />,
      url: "https://bit.ly/3dA7eFe",
    },
    { component: <JavaScriptBasic />, url: "https://bit.ly/2UpwkQ0" },
    { component: <ReactBasic />, url: "https://bit.ly/2MK8kmd" },
    { component: <ResponsiveWebDesign />, url: "https://bit.ly/35OoTpT" },
    { component: <RestAPI />, url: "https://bit.ly/2Oh4RMV" },
    { component: <TokopediaSTARTSummit />, url: "https://bit.ly/2xPxg83" },
    { component: <TypingSpeed />, url: "https://bit.ly/2WH3M4U" },
  ];

  const certificateSliderInterval = 3500;
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  const [currentCertificate, setCurrentCertificate] = useState(
    certificates[currentCertificateIndex]
  );

  const nextCertificateImage = () => {
    setCurrentCertificate(
      certificates[currentCertificateIndex % certificates.length]
    );

    setCurrentCertificateIndex((prevIndex) => prevIndex + 1);
  };

  useInterval(() => nextCertificateImage(), certificateSliderInterval)["0"](); // call start function

  return (
    <>
      <header className="h-screen flex flex-col space-y-8 justify-center items-center text-center">
        <h1 className="text-6xl">
          Brandon Julio Thenaro
          <br />
          <small>A.K.A.</small>
          <br />
          BR20-2
        </h1>

        <h2 className="text-2xl">
          Lifelong learner | Web Developer <br /> Since 2019
        </h2>

        <section className="w-full max-w-screen-sm flex justify-around">
          <Contacts />
        </section>
      </header>

      <main>
        <section className="max-w-screen-lg mx-auto">
          <h2 className="text-5xl text-center">Technology Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="text-left">
              <h3 className="text-4xl">Front-end</h3>
              <ul>
                <li>Bootstrap</li>
                <li>Gatsby</li>
                <li>Nuxt</li>
                <li>Tailwind CSS</li>
                <li>Vue</li>
                <li>Vuetify</li>
              </ul>
            </section>

            <section className="text-right">
              <h3 className="text-4xl">Back-end</h3>
              <ul>
                <li>Express</li>
                <li>Laravel</li>
              </ul>
            </section>

            <section className="text-left">
              <h3 className="text-4xl">Programming</h3>
              <ul>
                <li>C/C++</li>
                <li>C#</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Go</li>
              </ul>
            </section>

            <section className="text-right">
              <h3 className="text-4xl">Database</h3>

              <section>
                <h4 className="text-3xl">NoSQL</h4>
                <ul>
                  <li>FaunaDB</li>
                  <li>MongoDB</li>
                </ul>
              </section>

              <section>
                <h4 className="text-3xl">SQL</h4>
                <ul>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>SQL Server</li>
                  <li>SQLite</li>
                </ul>
              </section>
            </section>

            <section className="text-left">
              <h3 className="text-4xl">Cloud</h3>
              <ul>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </section>

            <section className="text-right">
              <h3 className="text-4xl">Tools</h3>
              <ul>
                <li>Jetbrains IDEs</li>
                <li>Visual Studio Code</li>
              </ul>
            </section>

            <section className="text-left">
              <h3 className="text-4xl">Other</h3>
              <ul>
                <li>HTML/CSS/JS</li>
                <li>Markdown</li>
                <li>GraphQL</li>
              </ul>
            </section>
          </div>
        </section>
        <section>
          <h2 className="text-5xl text-center">20-2</h2>

          <figure className="max-w-screen-md mx-auto my-8">
            <OutboundLink href="https://www.instagram.com/slcbinusuniv">
              <Angkatan
                alt="20-2 assistants at Software Laboratory Center"
                className="rounded-3xl hover:scale-105"
              />
            </OutboundLink>

            <figcaption className="text-xl text-center italic text-gray-500 my-8">
              — “In Honesty and Hardwork, We Strive for Excellence” —
            </figcaption>
          </figure>
        </section>
        <h2 className="text-5xl text-center">Certificates</h2>

        <div className="max-w-screen-sm mx-auto my-8" style={{ height: 500 }}>
          <OutboundLink
            href={currentCertificate.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentCertificate.component}
          </OutboundLink>
        </div>
      </main>
    </>
  );
}
