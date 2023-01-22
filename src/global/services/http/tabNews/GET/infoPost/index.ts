import { TABNEWS_API } from '@services/api_services';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

interface IRequiredParams {
  user: string;
  slug: string;
}

interface IResponse {
  id: string;
  owner_id: string;
  parent_id?: any;
  slug: string;
  title: string;
  body: string;
  status: string;
  source_url?: any;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  deleted_at?: any;
  owner_username: string;
  tabcoins: number;
  children_deep_count: number;
}

const getInfoPostTabNews = async ({ user, slug }: IRequiredParams) => {
  try {
    const response = await TABNEWS_API.get(`/contents/${user}/${slug}`);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError)
      throw new Error(`An error has ocurried! - ${err.response?.data}`);
    throw new Error('Internal server error');
  }
};

export const useTabNewsPost = (params: IRequiredParams) => {
  return useQuery<IResponse>(
    ['GET_tabNewsPost', params],
    async () => await getInfoPostTabNews(params)
  );
};
