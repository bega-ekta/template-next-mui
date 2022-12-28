import AbstractApi from 'base/api/AbstractApi';

export default class UserApi extends AbstractApi {
  getUserInfo = () => {
    return this.get({ url: `api/user/info` });
  };
}
