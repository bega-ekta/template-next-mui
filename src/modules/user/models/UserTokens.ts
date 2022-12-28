import AbstractModel from 'base/AbstractModel';

export default class UserTokens extends AbstractModel {
  amount: number | null = null;
  claimed: string | null = null;
  start: number | null = null;
  end: number | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
