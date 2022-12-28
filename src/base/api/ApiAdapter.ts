import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import Notification from '../notification/Notification';

export const api = axios.create();

// statuses
const success = [200, 201];

export const ERRORS: { [key: number]: string } = {
  400: 'Data what you provided are wrong',
  401: 'Unauthorized',
  403: 'You not have access',
};

api.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_API_URL) {
  console.error('env.NEXT_PUBLIC_API_URL - api url is not found!');
}

api.interceptors.request.use(
  async config => {
    const newConfig: AxiosRequestConfig = {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
    };

    return newConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    if (!success.includes(response.status)) {
      Notification.showError(response.data?.message || 'Unknown error');

      return Promise.reject(response);
    }

    if (response?.data?.message?.trim()) {
      Notification.showSuccess(response?.data?.message);
    }

    return response;
  },
  error => {
    // global showing error messages
    if (Object.keys(ERRORS).includes(error.response.status.toString())) {
      if (error.response.data.message) {
        Notification.showError(error.response.data.message);
      } else {
        Notification.showError(ERRORS[error.response.status as number]);
      }
    }

    return Promise.reject(error);
  },
);

export const setAccessToken = (token: string) => {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const clearAccessToken = () => {
  api.defaults.headers['Authorization'] = '';
};
