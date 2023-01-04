import { API } from '@services/api_services';
import { AxiosError } from 'axios';

interface IRequiredParams {
  email: string;
  external: boolean;
  password?: string;
}

export const verifyCredentials = async (params: IRequiredParams) => {
  try {
    let { data, status } = await API.post('/users/loginUser', params);

    return { data, status };
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        data: err.response?.data!,
        status: err.response?.status!,
      };
    } else {
      throw new Error('Internal error server');
    }
  }
};
