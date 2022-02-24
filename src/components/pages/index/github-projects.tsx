import * as React from 'react';
import useSWR, { Fetcher } from 'swr';
import IRepository from '../../../interfaces/repository';
import Card from '../../common/card';
import GithubProjectsCardsContainer from './github-projects-cards-container';

interface IData {
  viewer: {
    pinnedItems: {
      nodes: IRepository[];
    };
    repositories: {
      edges: {
        node: IRepository;
      }[];
    };
  };
}

const GithubProjects: React.FunctionComponent = () => {
  const fetcher: Fetcher<{ data?: IData }, string> = args =>
    fetch(args).then(async res => {
      if (res.ok) return res.json();
      throw res.statusText;
    });
  const { data, error } = useSWR('/api/repositories', fetcher);

  const isLoading = !data && !error;
  const pinnedRepositories = data?.data?.viewer?.pinnedItems?.nodes ?? [];
  const latestRepositories = data?.data?.viewer?.repositories?.edges?.map(edge => edge.node) ?? [];

  return (
    <section className="mb-8">
      <h2 className="text-center text-5xl">GitHub Projects</h2>

      {error ? (
        <Card className="mx-auto my-8 max-w-screen-md">
          <h3 className="mb-2 text-center text-3xl">Error</h3>
          <p className="mb-4 text-center font-bold">Please contact the developer with the following detail</p>
          <p className="text-center">{error}</p>
        </Card>
      ) : (
        <>
          <GithubProjectsCardsContainer
            title="Pinned Repositories"
            repositories={pinnedRepositories}
            isLoading={isLoading}
          />
          <GithubProjectsCardsContainer
            title="Latest Repositories"
            repositories={latestRepositories}
            isLoading={isLoading}
          />
        </>
      )}
    </section>
  );
};

export default GithubProjects;
