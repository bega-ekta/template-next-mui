import useRootStore from 'base/store/useRootStore';
import { observer } from 'mobx-react-lite';
import TokenModel from 'modules/common/models/TokenModel';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

interface IProps {
  token: TokenModel;
}

const InitContractInfo: React.FC<IProps> = observer(props => {
  const { token } = props;
  const { historyStore, userStore } = useRootStore();
  const { address } = useAccount();

  // Effects
  useEffect(() => {
    if (historyStore.isContractCreated && address) {
      // getData();
    }
  }, [historyStore.isContractCreated, address]);

  useEffect(() => {
    if (address && userStore.contractCreated) {
      // getUserRoles(address);
    }
  }, [address, userStore.contractCreated]);

  return <></>;
});

export default InitContractInfo;
