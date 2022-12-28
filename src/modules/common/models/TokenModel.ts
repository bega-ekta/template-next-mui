import AbstractModel from 'base/AbstractModel';

import ChainModel from './ChainModel';

export default class TokenModel extends AbstractModel {
  abi: any = null;
  address: string | null = null;
  chain: ChainModel | null = null;
  coinMarketCapId: number | null = null;
  decimals: number | null = null;
  icon: string | null = null;
  id: number | null = null;
  keyCode: string | null = null;
  purpose: string | null = null;
  symbol: string | null = null;
  type: string | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
