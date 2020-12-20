import * as React from "react";
import { useState } from "react";
import { useInterval } from "rooks";

import ExternalLink from "../../external-link";
import APIsAndMicroservices from "../../images/apis-and-microservices";
import FrontEndLibraries from "../../images/front-end-libraries";
import JavaBasic from "../../images/java-basic";
import JavaScriptAlgorithmsAndDataStructures from "../../images/javascript-algorithms-and-data-structures";
import JavaScriptBasic from "../../images/javascript-basic";
import ReactBasic from "../../images/react-basic";
import ResponsiveWebDesign from "../../images/responsive-web-design";
import RestAPI from "../../images/rest-api";
import TokopediaSTARTSummit from "../../images/tokopedia-start-summit";
import TypingSpeed from "../../images/typing-speed";

export default function Certificate() {
  const certificates = [
    {
      label: "Certificate APIs and Microservices",
      component: <APIsAndMicroservices />,
      url: "https://bit.ly/301Cvx8",
    },
    {
      label: "Certificate Front End Libraries",
      component: <FrontEndLibraries />,
      url: "https://bit.ly/2YTCNpg",
    },
    {
      label: "Certificate Java Basic",
      component: <JavaBasic />,
      url: "https://bit.ly/2YjFn5V",
    },
    {
      label: "Certificate JavaScript Algorithms and Data Structures",
      component: <JavaScriptAlgorithmsAndDataStructures />,
      url: "https://bit.ly/3dA7eFe",
    },
    {
      label: "Certificate JavaScript Basic",
      component: <JavaScriptBasic />,
      url: "https://bit.ly/2UpwkQ0",
    },
    {
      label: "Certificate React Basic",
      component: <ReactBasic />,
      url: "https://bit.ly/2MK8kmd",
    },
    {
      label: "Certificate Responsive Web Design",
      component: <ResponsiveWebDesign />,
      url: "https://bit.ly/35OoTpT",
    },
    {
      label: "Certificate Rest API",
      component: <RestAPI />,
      url: "https://bit.ly/2Oh4RMV",
    },
    {
      label: "Certificate Tokopedia START Summit",
      component: <TokopediaSTARTSummit />,
      url: "https://bit.ly/2xPxg83",
    },
    {
      label: "Certificate Typing Speed",
      component: <TypingSpeed />,
      url: "https://bit.ly/2WH3M4U",
    },
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
    <section>
      <h2 className="text-5xl text-center">Certificates</h2>

      <div className="max-w-screen-sm mx-auto my-8" style={{ height: 500 }}>
        <ExternalLink
          href={currentCertificate.url}
          aria-label={currentCertificate.label}
        >
          {currentCertificate.component}
        </ExternalLink>
      </div>
    </section>
  );
}
