import { Signer } from 'ethers';
import { makeAutoObservable } from 'mobx';

import TokenModel from '../common/models/TokenModel';
import HistoryService from './HistoryService';
import UserClaimHistory from './models/UserClaimHistory';

export default class HistoryStore {
  loading = false;
  isContractCreated = false;

  historyService: HistoryService;

  claimHistory: UserClaimHistory[] | null = null;

  constructor() {
    makeAutoObservable(this);
    this.historyService = new HistoryService();
  }

  getClaimHistory = async (address: string | null | undefined) => {
    if (!address) {
      return;
    }

    this.setLoading(true);

    try {
      const history = await this.historyService.getClaimHistory(address);
      if (history) {
        this.setClaimHistory(history);
      }
    } catch (err) {
    } finally {
      this.setLoading(false);
    }
  };

  createAirdropContract = (token: TokenModel, signer: Signer) => {
    const success = this.historyService.createAirdropContract(token, signer);
    this.setIsContractCreated(success);
  };

  setIsContractCreated = (value: boolean) => {
    this.isContractCreated = value;
  };

  setClaimHistory = (claimHistory: UserClaimHistory[] | null) => {
    this.claimHistory = claimHistory;
  };

  clearHistory = () => {
    this.setClaimHistory(null);
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };
}
