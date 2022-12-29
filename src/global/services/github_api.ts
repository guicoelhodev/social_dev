import axios from 'axios';

export const GITHUB_API = axios.create({
  baseURL: 'https://api.github.com',
});
