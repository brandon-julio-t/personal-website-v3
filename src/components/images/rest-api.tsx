import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function RestAPI(props) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Rest API.png" }) {
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
