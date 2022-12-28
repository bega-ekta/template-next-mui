import AbstractModel from 'base/AbstractModel';

import { IBlockExplorers, INativeCurrency, IRpsUrls } from '../types/CommonTypes';

export default class ChainModel extends AbstractModel {
  id: number | null = null;
  name: string | null = null;
  network: string | null = null;
  nativeCurrency?: INativeCurrency | null = null;
  rpcUrls: IRpsUrls | null = null;
  blockExplorers?: IBlockExplorers | null = null;
  testnet?: boolean | null = null;
  icon: string | null = null;
  keyCode: string | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
