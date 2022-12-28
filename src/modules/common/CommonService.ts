import CommonApi from './CommonApi';
import CommonFactory from './CommonFactory';
import ChainModel from './models/ChainModel';
import TokenModel from './models/TokenModel';

export default class CommonService {
  commonApi: CommonApi;
  commonFactory: CommonFactory;

  constructor() {
    this.commonApi = new CommonApi();
    this.commonFactory = new CommonFactory();
  }

  getChains = async () => {
    const { data } = await this.commonApi.getChains();
    return this.commonFactory.createList<ChainModel>(ChainModel, data);
  };

  getTokens = async () => {
    const { data } = await this.commonApi.getTokens();

    const tokens: TokenModel[] = [];

    for (let i = 0; i < data.length; i++) {
      const { data: abi } = await this.commonApi.getTokenAbi(data[i].id);
      const token = this.commonFactory.create<TokenModel>(TokenModel, { ...data[i], abi });
      tokens.push(token);
    }

    return tokens;
  };
}
