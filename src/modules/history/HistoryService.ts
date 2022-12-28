import { Contract, ethers, Signer } from 'ethers';
import { DateTimeHelper } from 'helpers/DateTimeHelper';

import TokenModel from '../common/models/TokenModel';
import HistoryFactory from './HistoryFactory';
import TokenBalanceHistory from './models/TokenBalanceHistory';
import UserClaimHistory from './models/UserClaimHistory';

export default class HistoryService {
  historyFactory: HistoryFactory;
  airdropContract: Contract | null = null;

  constructor() {
    this.historyFactory = new HistoryFactory();
  }

  createAirdropContract = (token: TokenModel, signer: Signer) => {
    if (token.address && token.abi) {
      this.airdropContract = new Contract(token.address, token.abi, signer);
      return true;
    }

    return false;
  };

  getClaimHistory = async (address: string) => {
    if (!this.airdropContract) {
      return;
    }

    const eventFilters = this.airdropContract.filters.TokenClaimed(null, address, null);
    const events = await this.airdropContract.queryFilter(eventFilters);

    const formattedEvents = [];

    for (let i = 0; i < events.length; i++) {
      const block = await events[i].getBlock();
      const amount = Number(ethers.utils.formatEther(events[i].args?.amount)).toFixed(4);

      const result = {
        amount: parseFloat(amount),
        poolId: parseInt(ethers.utils.formatEther(events[i].args?.poolId)),
        time: DateTimeHelper.timestampToDate(block.timestamp),
        transactionHash: events[i].transactionHash,
      };

      formattedEvents.push(result);
    }

    return this.historyFactory.createList<UserClaimHistory>(UserClaimHistory, formattedEvents);
  };
}
