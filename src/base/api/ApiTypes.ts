import { AxiosRequestConfig } from 'axios';

export interface IConfig {
  url: string;
  data?: any;
  config?: AxiosRequestConfig;
}

export interface IResponseCommon<T> {
  success: boolean;
  errors: {
    [key: string]: string[];
  } | null;
  message: string | null;
  data: T;
}
