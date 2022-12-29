import { GITHUB_API } from 'src/global/services/github_api';
import { useQuery } from 'react-query';

type IGithubRepo = {
  name: string;
  id: number;
  full_name: string;
  url: string;
  html_url: string;
  visibility: string;
  description: string;
  language: string;
  topics: string[];
};
export const useGetRepositories = (userName: string) => {
  const { data, isLoading, isError } = useQuery<IGithubRepo[]>(
    'repositories',
    async () => {
      const { data } = await GITHUB_API.get(`/users/${userName}/repos`);
      return data;
    }
  );

  return { data, isLoading, isError };
};
