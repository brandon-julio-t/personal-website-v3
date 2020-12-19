import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function JavaScriptAlgorithmsAndDataStructures(props) {
  const data = useStaticQuery(graphql`
    query {
      file(
        relativePath: { eq: "JavaScript Algorithms and Data Structures.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} {...props} />;
}
