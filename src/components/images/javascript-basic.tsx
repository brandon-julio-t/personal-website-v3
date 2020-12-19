import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function JavaScriptBasic(props) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "JavaScript (Basic).png" }) {
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
