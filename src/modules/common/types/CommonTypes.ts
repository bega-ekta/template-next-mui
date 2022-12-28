export enum AppRoutesNames {
  Home = 'Home',
  History = 'History',
  Accounts = 'Accounts',
}

export enum AppRoutesPaths {
  Home = '/',
  History = '/history',
}

export enum CommonDialogs {
  Wallets = 'wallets',
  Chains = 'chains',
  Sign = 'sign',
  Terms = 'terms',
}

export interface ICsvUploadData {
  data: any[];
  errors: any[];
  meta: any[];
}

export interface INativeCurrency {
  decimals: string;
  name: string;
  symbol: string;
}

export interface IRpsUrls {
  default: string;
  wss: string;
}

export interface IBlockExplorers {
  default: { url: string; name: string };
}
