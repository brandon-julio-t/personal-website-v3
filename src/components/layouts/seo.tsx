import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: object[] | any[];
  title?: string;
}

export default function SEO(props: SEOProps) {
  const { description, lang, meta, title } = props;
  const { site, favicon } = useStaticQuery(query);

  const faviconURL = `${site.siteMetadata.siteUrl}${favicon.childImageSharp.gatsbyImageData.srcWebp}`;
  const metaDescription = description ?? site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: lang ?? "en-US",
      }}
      title={title ?? "Brandon Julio Thenaro"}
      meta={metas({
        faviconURL,
        meta,
        metaDescription,
        site,
        title: title ?? "Brandon Julio Thenaro",
      })}
    >
      <script type="application/ld+json">
        {jsonld({
          faviconURL,
          site,
        })}
      </script>
    </Helmet>
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
    favicon: file(relativePath: { eq: "icon.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

function metas(args: any) {
  const { faviconURL, meta, metaDescription, site, title } = args;

  return [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:image`,
      content: faviconURL,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta ?? []);
}

function jsonld(args: any) {
  const { faviconURL, site } = args;

  return JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Brandon Julio Thenaro",
    url: site.siteMetadata.siteUrl,
    image: faviconURL,
    sameAs: [
      "https://www.facebook.com/profile.php?id=100008724798107",
      "https://twitter.com/brandon_julio_t",
      "https://www.instagram.com/brandon.julio.t",
      "https://www.linkedin.com/in/brandonjuliothenaro",
      "https://github.com/brandon-julio-t",
      "https://www.brandonjuliothenaro.my.id/",
    ],
    jobTitle: "Student",
    worksFor: {
      "@type": "Organization",
      name: "BINUS University",
    },
  });
}
