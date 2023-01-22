import { TABNEWS_API } from '@services/api_services';
import { transformParamsIntoUrl } from '@utilis/transformParamsIntoUrl';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

interface IRequiredParams {
  page?: number;
  strategy?: 'new' | 'old' | 'relevant';
  per_page?: number;
}

interface IResponse {
  id: string;
  owner_id: string;
  parent_id?: any;
  slug: string;
  title: string;
  status: string;
  source_url?: any;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  deleted_at?: any;
  tabcoins: number;
  owner_username: string;
  children_deep_count: number;
}

const getTabNewListPosts = async ({
  page = 1,
  per_page = 20,
  strategy = 'relevant',
}: IRequiredParams) => {
  const url = transformParamsIntoUrl({ page, per_page, strategy });
  try {
    const response = await TABNEWS_API.get(`/contents?${url}`);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError)
      throw new Error(`An error has ocurried! - ${err.response?.data}`);
    throw new Error('Internal server error');
  }
};

export const useTabListPosts = (params: IRequiredParams) => {
  return useQuery<IResponse[]>(
    ['GET_tabnewsList', params],
    async () => await getTabNewListPosts(params)
  );
};
