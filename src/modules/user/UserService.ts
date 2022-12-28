import { Contract, ethers, Signer } from 'ethers';

import TokenModel from '../common/models/TokenModel';
import UserApi from './UserApi';
import UserFactory from './UserFactory';
import UserModel from './models/UserModel';
import UserTokens from './models/UserTokens';

export default class UserService {
  userApi: UserApi;
  userFactory: UserFactory;

  airdropContract: Contract | null = null;

  constructor() {
    this.userApi = new UserApi();
    this.userFactory = new UserFactory();
  }

  getUserInfo = async () => {
    const { data } = await this.userApi.getUserInfo();
    const roles = (data as any).roles;
    const userInfo = this.userFactory.create<UserModel>(UserModel, (data as any).user);
    return { roles, userInfo };
  };

  getUserTokens = async (accountId: number, address: string) => {
    if (!this.airdropContract) {
      return;
    }

    const data = await this.airdropContract.getUserTokenInfo(accountId, address);

    const formattedData = {
      amount: parseFloat(ethers.utils.formatEther(data[0])),
      claimed: parseFloat(ethers.utils.formatEther(data[1])),
      start: ethers.utils.formatEther(data[2]),
      end: ethers.utils.formatEther(data[3]),
    };

    return this.userFactory.create<UserTokens>(UserTokens, formattedData);
  };

  claim = async (accountId: number, wallet: string) => {
    if (!this.airdropContract) {
      console.log('Claim -> not found contract');
      return;
    }

    const gasPrice = await this.airdropContract.provider.getGasPrice();
    console.log('gasPrice -> ', ethers.utils.formatEther(gasPrice));
    return this.airdropContract.claim(accountId, { from: wallet, gasPrice });
  };

  requestWithdraw = async (accountId: number) => {
    if (!this.airdropContract) {
      return;
    }

    return this.airdropContract.withdrawRequest(accountId);
  };

  createAirdropContract = (token: TokenModel, signer: Signer) => {
    if (token.address && token.abi) {
      this.airdropContract = new Contract(token.address, token.abi, signer);
      return true;
    }

    return false;
  };

}
