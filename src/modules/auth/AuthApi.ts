import AbstractApi from 'base/api/AbstractApi';
import { clearAccessToken, setAccessToken } from 'base/api/ApiAdapter';

export default class AuthApi extends AbstractApi {
  refreshToken = (refreshToken: string) => {
    return this.post({ url: 'api/auth/refreshtoken', data: { refreshToken } });
  };

  signup = (wallet: string, signature: string) => {
    return this.post({ url: 'api/auth/signup', data: { wallet, signature } });
  };

  signIn = (wallet: string, signature: string) => {
    return this.post({ url: 'api/auth/signin', data: { wallet, signature } });
  };

  checkAuth = (wallet: string) => {
    return this.get({ url: `api/auth/check/${wallet}` });
  };

  setTokenToHeader = (token: string) => {
    setAccessToken(token);
  };

  removeTokenFromHeader = () => {
    clearAccessToken();
  };
}
