import AuthStore from 'modules/auth/AuthStore';
import CommonStore from 'modules/common/CommonStore';
import HistoryStore from 'modules/history/HistoryStore';
import UserStore from 'modules/user/UserStore';
import React from 'react';

class RootStore {
  authStore: AuthStore;
  userStore: UserStore;
  commonStore: CommonStore;

  historyStore: HistoryStore;

  constructor() {
    this.authStore = new AuthStore();
    this.userStore = new UserStore();
    this.commonStore = new CommonStore();
    this.historyStore = new HistoryStore();

  }
}

export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
