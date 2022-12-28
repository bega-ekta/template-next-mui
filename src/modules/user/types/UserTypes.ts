export enum AppRoles {
  SuperAdmin = 'superAdmin',
  AccountAdmin = 'accountAdmin',
  AccountManager = 'accountManager',
  User = 'user',
}

export enum UserLoadings {
  GetUserInfo,
  GetTokens,
  CheckRole,
  Claim,
  ClaimProcess,
}

export enum AccountRoles {
  Admin = 'Admin',
  Manager = 'Manager',
}

export interface IUserRoles {
  [AppRoles.User]: boolean;
  [AppRoles.SuperAdmin]: boolean;
  [AppRoles.AccountAdmin]: number[];
  [AppRoles.AccountManager]: number[];
}
