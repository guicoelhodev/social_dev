import axios from 'axios';

export const GITHUB_API = axios.create({
  baseURL: 'https://api.github.com',
});

export const API = axios.create({
  baseURL: process.env.URL_API,
});

export const TABNEWS_API = axios.create({
  baseURL: 'https://www.tabnews.com.br/api/v1',
});
