import Notification from 'base/notification/Notification';
import { SUPER_ADMIN_ROLE } from 'data/accountData';
import { Signer } from 'ethers';
import { makeAutoObservable, set } from 'mobx';

import ClaimAccount from '../accounts/models/ClaimAccount';
import TokenModel from '../common/models/TokenModel';
import UserService from './UserService';
import UserModel from './models/UserModel';
import UserTokens from './models/UserTokens';
import { AccountRoles, AppRoles, IUserRoles, UserLoadings } from './types/UserTypes';

const initialUserRoles: IUserRoles = {
  [AppRoles.User]: true,
  [AppRoles.SuperAdmin]: false,
  [AppRoles.AccountAdmin]: [],
  [AppRoles.AccountManager]: [],
};

export default class UserStore {
  loadings = {
    [UserLoadings.GetUserInfo]: false,
    [UserLoadings.GetTokens]: false,
    [UserLoadings.CheckRole]: false,
    [UserLoadings.Claim]: false,
    [UserLoadings.ClaimProcess]: false,
  };

  userInfo: UserModel | null = null;
  userService: UserService;
  currentAccountId: number | null = null;
  contractCreated = false;

  accountRoles: { [key in AccountRoles]: string } = {
    [AccountRoles.Admin]: '',
    [AccountRoles.Manager]: '',
  };

  userTokens: UserTokens | null = null;
  userRoles: IUserRoles = initialUserRoles;
  adminRoles: string[] | null = null;

  constructor() {
    makeAutoObservable(this);
    this.userService = new UserService();
  }

  getUserInfo = async () => {
    this.setLoadings(UserLoadings.GetUserInfo, true);

    try {
      const { userInfo } = await this.userService.getUserInfo();
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoadings(UserLoadings.GetUserInfo, false);
    }
  };

  claim = async (accountId: number) => {
    if (!this.userInfo?.wallet) {
      return;
    }

    this.setLoadings(UserLoadings.Claim, true);

    try {
      const transaction = await this.userService.claim(accountId, this.userInfo.wallet);
      this.setLoadings(UserLoadings.ClaimProcess, true);
      await transaction.wait();
      this.setLoadings(UserLoadings.ClaimProcess, false);
      Notification.showSuccess('Claim success !');
    } catch (err) {
      console.log(err);
    } finally {
      this.setLoadings(UserLoadings.Claim, false);
    }
  };

  createAirdropContract = (token: TokenModel, signer: Signer) => {
      const success = this.userService.createAirdropContract(token, signer)
      success && this.setContractCreated(success)
  }

  setLoadings = (key: UserLoadings, value: boolean) => {
    set(this.loadings, key, value);
  };

  clearUserData = () => {
    this.setUserTokens(null);
    this.userRoles = initialUserRoles;
    this.setAdminRoles(null);
  };

  setUserTokens = (tokens: UserTokens | null) => {
    this.userTokens = tokens;
  };

  setContractCreated = (value: boolean) => {
    this.contractCreated = value;
  };

  setAdminRoles = (roles: string[] | null) => {
    this.adminRoles = roles;
  };
}
