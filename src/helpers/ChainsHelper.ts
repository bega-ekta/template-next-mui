import ChainModel from 'modules/common/models/ChainModel';
import { Chain } from 'wagmi';

export default class ChainsHelper {
  static isSupportedChain = (chains: ChainModel[] | null, currentChain: Chain | undefined) => {
    let result = false;

    if (!chains) {
      return result;
    }

    chains.forEach(item => {
      if (currentChain && item.id === currentChain.id) {
        result = true;
      }
    });

    return result;
  };
}
