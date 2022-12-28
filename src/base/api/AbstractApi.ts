import { api } from './ApiAdapter';
import { IConfig } from './ApiTypes';

export default abstract class AbstractApi {
  get = <T extends Record<string, unknown>>(config: IConfig) => {
    return api.get<any>(config.url);
  };

  post = <T extends Record<string, unknown>>(config: IConfig) => {
    return api.post<any>(config.url, config.data, config?.config);
  };

  put = <T extends Record<string, unknown>>(config: IConfig) => {
    return api.put<any>(config.url, config.data, config.config);
  };

  delete = <T extends Record<string, unknown>>(config: IConfig) => {
    return api.delete<any>(config.url);
  };
}
