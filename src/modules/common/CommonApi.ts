import AbstractApi from 'base/api/AbstractApi';

export default class CommonApi extends AbstractApi {
  getChains = () => {
    return this.get({ url: `/api/v2/chains` });
  };

  getTokens = () => {
    return this.get({ url: `/api/v2/tokens` });
  };

  getTokenAbi = (id: number) => {
    return this.get({ url: `/api/abi/${id}` });
  };
}
