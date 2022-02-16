import * as React from 'react';
import useSWR, { Fetcher } from 'swr';
import IRepository from '../../../interfaces/repository';
import Card from '../../common/card';
import Skeleton from '../../common/skeleton';
import GithubProjectsRepositoryCard from './github-projects-repository-card';

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

export default function GithubProjects() {
  const fetcher: Fetcher<{ data?: IData }, string> = args => fetch(args).then(res => res.json());
  const { data, error } = useSWR('/api/repositories', fetcher);
  const isLoading = !data && !error;

  console.log({ error });

  const pinnedRepositories = data?.data.viewer.pinnedItems.nodes ?? [];
  const latestRepositories = data?.data.viewer.repositories.edges.map(edge => edge.node) ?? [];

  return (
    <>
      <section>
        <h2 className="text-center text-5xl">GitHub Projects</h2>

        {error ? (
          <Card className="mx-auto my-8 max-w-screen-md">
            <h3 className="mb-2 text-center text-3xl">Error</h3>
            <p className="mb-4 text-center font-bold">Please contact the developer with the following detail</p>
            <p className="text-center">{JSON.stringify(error)}</p>
          </Card>
        ) : (
          <>
            <h3 className="mt-8 mb-4 text-center text-3xl">Pinned Repositories</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {isLoading
                ? Array.from({ length: 6 }).map((_, idx) => <Skeleton className="mx-auto h-32 w-full" key={idx} />)
                : pinnedRepositories.map((repository, idx) => (
                    <GithubProjectsRepositoryCard key={idx} repository={repository} />
                  ))}
            </div>

            <h3 className="mt-8 mb-4 text-center text-3xl">Latest Repositories</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {isLoading
                ? Array.from({ length: 6 }).map((_, idx) => <Skeleton className="mx-auto h-32 w-full" key={idx} />)
                : latestRepositories.map((repository, idx) => (
                    <GithubProjectsRepositoryCard key={idx} repository={repository} />
                  ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
