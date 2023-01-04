import axios from 'axios';

export const GITHUB_API = axios.create({
  baseURL: 'https://api.github.com',
});

export const API = axios.create({
  baseURL: 'https://apisocialdev-production.up.railway.app',
});
