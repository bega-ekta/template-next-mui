import LocalStorage from 'base/localstorage/LocalStorage';
import { LocalStorageKeys } from 'base/localstorage/LocalStorageService';
import Notification from 'base/notification/Notification';
import { rootStore } from 'base/store/RootStore';
import { DateTimeHelper } from 'helpers/DateTimeHelper';
import { makeAutoObservable } from 'mobx';

import { CommonDialogs } from '../common/types/CommonTypes';
import AuthService from './AuthService';
import SuccessAuth from './models/SuccessAuth';

export default class AuthStore {
  loading = false;

  isUserExist = false;
  isConnected = false;
  authService: AuthService;

  checkRefreshToken() {
    const data = LocalStorage.get(LocalStorageKeys.User);
    if (!data) {
      return;
    }

    const { expiredRefresh, expiredAccess, token, time } = data;
    const timeNow = new Date().getTime();

    if (!expiredRefresh) return;

    const timestampRefresh = DateTimeHelper.combineTimestamps(time, expiredAccess);

    return timestampRefresh > timeNow ? { token, expired: false } : { token, expired: true };
  }

  constructor() {
    makeAutoObservable(this);
    this.authService = new AuthService();
  }

  refreshToken = async (refreshToken: string | null, wallet: string) => {
    if (!refreshToken) {
      return;
    }

    try {
      const data = await this.authService.refreshToken(refreshToken);
      this.saveTokenData(data, wallet);
    } catch (error) {}
  };

  connectWallet = async (wallet: string | undefined, signature: string) => {
    if (!wallet) {
      Notification.showError('Wallet address not found!');
      return;
    }

    if (this.isUserExist) {
      await this.signIn(wallet, signature);
    } else {
      await this.signup(wallet, signature);
    }
  };

  signup = async (wallet: string, signature: string) => {
    this.setLoading(true);

    try {
      await this.authService.signup(wallet, signature);
      await this.signIn(wallet, signature);
    } catch (error: any) {
      if (error?.response?.status === 400) {
        await this.signIn(wallet, signature);
      }
    } finally {
      this.setLoading(false);
    }
  };

  signIn = async (wallet: string, signature: string) => {
    this.setLoading(true);

    try {
      const tokenData = await this.authService.signIn(wallet, signature);

      if (tokenData) {
        this.saveTokenData(tokenData, wallet);
        await rootStore.userStore.getUserInfo();
        rootStore.commonStore.setDialogs(CommonDialogs.Sign, false);
        this.setIsConnected(true);
      }
    } catch (error: any) {
      rootStore.commonStore.setDialogs(CommonDialogs.Sign, false);
      this.logout();
    } finally {
      this.setLoading(false);
    }
  };

  checkAuth = async (wallet: string | undefined) => {
    if (!wallet) {
      return;
    }

    this.setLoading(true);

    try {
      const found = await this.authService.checkAuth(wallet);
      this.setIsUserExist(found);
    } catch (error: any) {
      if (error?.response?.status === 404) {
        this.setIsUserExist(error.response.data.found);
      }
    } finally {
      this.setLoading(false);
    }
  };

  logout = () => {
    LocalStorage.remove(LocalStorageKeys.User);
    LocalStorage.remove(LocalStorageKeys.WalletAddress);
    LocalStorage.remove(LocalStorageKeys.Signature);
    this.setIsConnected(false);
    this.authService.removeTokenFromHeader();
  };

  saveTokenData = (data: SuccessAuth, address: string) => {
    const { refreshToken, expiredRefresh, expiredAccess, accessToken } = data;
    const timeNow = new Date().getTime();
    const tokenData = { token: refreshToken, expiredRefresh, expiredAccess, address, time: timeNow };
    LocalStorage.set(LocalStorageKeys.User, tokenData);

    if (accessToken) {
      this.authService.setTokenToHeader(accessToken);
    }
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setIsConnected = (value: boolean) => {
    this.isConnected = value;
  };

  setIsUserExist = (exist: boolean) => {
    this.isUserExist = exist;
  };
}
