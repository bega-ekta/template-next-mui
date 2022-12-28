import useRootStore from 'base/store/useRootStore';
import { tokenSymbols } from 'data/tokens';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useNetwork, useSigner } from 'wagmi';

import InitContractInfo from './InitContractInfo';

interface IProps {}

const InitContracts: React.FC<IProps> = observer(() => {
  const { authStore, userStore, historyStore, commonStore } = useRootStore();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();

  const haveConnectedSigner = !!signer && authStore.isConnected;
  const chainIds = commonStore.chains?.map(chain => chain.id);
  const isRightChain = !!chain?.id && chainIds?.includes(chain.id);

  const airdropToken = commonStore.tokens?.find(token => token.symbol === tokenSymbols.airdrop);
  const portalToken = commonStore.tokens?.find(token => token.symbol === tokenSymbols.portal);

  // Effects
  useEffect(() => {
    if (haveConnectedSigner && isRightChain && airdropToken) {
      userStore.createAirdropContract(airdropToken, signer);
      historyStore.createAirdropContract(airdropToken, signer);
    }
  }, [signer, authStore.isConnected, chain]);

  return <>{haveConnectedSigner && isRightChain && airdropToken && <InitContractInfo token={airdropToken} />}</>;
});

export default InitContracts;
