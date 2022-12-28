import { makeAutoObservable, set } from 'mobx';

import CommonService from './CommonService';
import ChainModel from './models/ChainModel';
import TokenModel from './models/TokenModel';
import { CommonDialogs } from './types/CommonTypes';

export default class CommonStore {
  loading = false;

  chains: ChainModel[] | null = null;
  tokens: TokenModel[] | null = null;

  dialogs: { [key in CommonDialogs]: boolean } = {
    [CommonDialogs.Wallets]: false,
    [CommonDialogs.Chains]: false,
    [CommonDialogs.Sign]: false,
    [CommonDialogs.Terms]: false,
  };

  commonService: CommonService;

  constructor() {
    this.commonService = new CommonService();
    makeAutoObservable(this);
  }

  getTokens = async () => {
    this.setLoading(true);

    try {
      const tokens = await this.commonService.getTokens();
      this.setTokens(tokens);
    } catch (err) {
      console.log(err);
    } finally {
      this.setLoading(false);
    }
  };

  getChains = async () => {
    this.setLoading(true);

    try {
      const chains = await this.commonService.getChains();
      this.setChains(chains);
    } catch (err) {
      console.log(err);
    } finally {
      this.setLoading(false);
    }
  };

  setTokens = (tokens: TokenModel[] | null) => {
    this.tokens = tokens;
  };

  setChains = (chains: ChainModel[] | null) => {
    this.chains = chains;
  };

  setDialogs = (key: CommonDialogs, value: boolean) => {
    set(this.dialogs, key, value);
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };
}
