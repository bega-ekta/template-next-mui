import AbstractModel from 'base/AbstractModel';

export default class UserClaimHistory extends AbstractModel {
  time: string | null = null;
  amount: number | null = null;
  poolId: number | null = null;
  transactionHash: string | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
