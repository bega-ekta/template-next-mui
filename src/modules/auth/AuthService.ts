import AuthApi from './AuthApi';
import AuthFactory from './AuthFactory';
import SuccessAuth from './models/SuccessAuth';

export default class AuthService {
  authApi: AuthApi;
  authFactory: AuthFactory;

  constructor() {
    this.authApi = new AuthApi();
    this.authFactory = new AuthFactory();
  }

  refreshToken = async (refreshToken: string) => {
    const { data } = await this.authApi.refreshToken(refreshToken);
    return this.authFactory.create<SuccessAuth>(SuccessAuth, data);
  };

  signup = async (wallet: string, signature: string) => {
    return this.authApi.signup(wallet, signature);
  };

  signIn = async (wallet: string, signature: string) => {
    const response = await this.authApi.signIn(wallet, signature);
    if (response?.data) {
      return this.authFactory.create<SuccessAuth>(SuccessAuth, response.data);
    }
  };

  checkAuth = async (wallet: string) => {
    const { data } = await this.authApi.checkAuth(wallet);
    return (data as any)?.found;
  };

  setTokenToHeader = (token: string) => {
    this.authApi.setTokenToHeader(token);
  };

  removeTokenFromHeader = () => {
    this.authApi.removeTokenFromHeader();
  };
}
