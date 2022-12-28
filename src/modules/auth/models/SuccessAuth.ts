import AbstractModel from 'base/AbstractModel';

export default class SuccessAuth extends AbstractModel {
  accessToken: string | null = null;
  refreshToken: string | null = null;
  expiredAccess: number | null = null;
  expiredRefresh: number | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
