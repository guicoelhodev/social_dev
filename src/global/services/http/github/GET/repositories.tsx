import { GITHUB_API } from '@services/api_services';
import { getSession } from 'next-auth/react';
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
export const useGetRepositories = (username: string) => {
  // let user = localStorage.getItem('@USER_CREDENTIALS');

  // let username = user ? JSON.parse(user).github_username : '';

  const { data, isLoading, isError } = useQuery<IGithubRepo[]>(
    'repositories',
    async () => {
      const { data } = await GITHUB_API.get(`/users/${username}/repos`);
      return data;
    }
  );

  return { data, isLoading, isError };
};
