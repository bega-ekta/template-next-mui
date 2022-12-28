export enum LocalStorageKeys {
  WalletAddress = 'walletAddress',
  Signature = 'signature',
  User = 'user',
  AppTheme = 'appTheme',
}

export default class LocalStorageService {
  get = (name: LocalStorageKeys): any | null => {
    const data = localStorage.getItem(name);
    return data ? JSON.parse(data) : null;
  };

  set = (name: LocalStorageKeys, data: any): void => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  remove = (name: LocalStorageKeys): void => {
    localStorage.removeItem(name);
  };
}
