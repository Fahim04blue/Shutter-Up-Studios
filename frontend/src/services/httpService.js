import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000,
});

instance.interceptors.request.use((config) => ({
  ...config,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}));

const responseBody = (response) => response.data.result;

const requests = {
  get: (url) => instance.get(url).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
  patch: (url, body) => instance.patch(url, body).then(responseBody),
  delete: (url) => instance.delete(url).then(responseBody),
};

export default requests;
