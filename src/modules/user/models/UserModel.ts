import AbstractModel from 'base/AbstractModel';

export default class UserModel extends AbstractModel {
  id: number | null = null;
  wallet: string | null = null;
  signature: string | null = null;
  avatar: string | null = null;
  username: string | null = null;
  email: string | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
