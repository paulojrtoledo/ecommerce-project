import axios from 'axios';

export const TOKEN_STORAGE_KEY = 'nature-tech-token';
export const USER_STORAGE_KEY = 'nature-tech-user';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
