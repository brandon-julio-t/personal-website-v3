import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

export default async function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  const url = 'https://api.github.com/graphql';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.GITHUB_GRAPHQL_TOKEN}`,
  };

  try {
    res.json(
      await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ query: gql }),
      }).then(res => res.json())
    );
  } catch (error) {
    res.status(500).send(error);
  }
}

const gql = `
  query Github {
    viewer {
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            createdAt
            description
            homepageUrl
            name
            url
            languages(first: 3) {
              nodes {
                name
              }
            }
          }
        }
      }
      repositories(
        affiliations: OWNER
        first: 6
        orderBy: {field: CREATED_AT, direction: DESC}
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {
        edges {
          node {
            createdAt
            description
            homepageUrl
            name
            url
            languages(first: 3) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
