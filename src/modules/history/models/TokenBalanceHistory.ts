import AbstractModel from 'base/AbstractModel';
import { BigNumber, Event } from 'ethers';
import { Block } from '@ethersproject/abstract-provider';

export default class TokenBalanceHistory extends AbstractModel {
  event: Event | null = null;
  block: Block | null = null;
  args: { balance: BigNumber; poolId: string; user: string } | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
