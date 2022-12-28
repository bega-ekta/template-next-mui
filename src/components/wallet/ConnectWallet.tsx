import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import LocalStorage from 'base/localstorage/LocalStorage';
import { LocalStorageKeys } from 'base/localstorage/LocalStorageService';
import useRootStore from 'base/store/useRootStore';
import AuthHelper from 'helpers/AuthHelper';
import ChainsHelper from 'helpers/ChainsHelper';
import useMediaQueries from 'hooks/useMediaQueries';
import { observer } from 'mobx-react-lite';
import { CommonDialogs } from 'modules/common/types/CommonTypes';
import { UserLoadings } from 'modules/user/types/UserTypes';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { Connector, useAccount, useConnect, useDisconnect, useNetwork, useSignMessage } from 'wagmi';

const DynamicUserMenu = dynamic(() => import('../header/components/UserMenu'), { ssr: false });
const DynamicChainsComponent = dynamic(() => import('./ChainsComponent'), { ssr: false });
const DynamicWalletDialog = dynamic(() => import('./dialogs/WalletsDialog'), { ssr: false });
const DynamicChainsDialog = dynamic(() => import('./dialogs/ChainsDialog'), { ssr: false });
const DynamicSignMessageDialog = dynamic(() => import('./dialogs/SignMessageDialog'), { ssr: false });

interface IProps {}

const ConnectWallet: React.FC<IProps> = observer(() => {
  const { authStore, commonStore, userStore } = useRootStore();
  const { dialogs } = commonStore;
  const { connectors, isLoading, pendingConnector, connectAsync } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { signMessage, isLoading: signMessageLoading } = useSignMessage({
    onSuccess: async data => {
      signWithWallet(address, data);
    },
    onError: () => {
      commonStore.setDialogs(CommonDialogs.Sign, false);
      handleDisconnect();
    },
  });
  const { isSM } = useMediaQueries();

  const isConnecting = dialogs.sign || authStore.loading || userStore.loadings[UserLoadings.GetUserInfo];
  const showAccountInfo =
    authStore.isConnected && !dialogs.sign && !authStore.loading && !userStore.loadings[UserLoadings.GetUserInfo];

  const signWithWallet = async (address: string | undefined, signature: string) => {
    await authStore.checkAuth(address);
    await authStore.connectWallet(address, signature);
  };

  const trySignIn = async (wallet: string) => {
    await authStore.checkAuth(wallet);

    if (authStore.isUserExist) {
      handleLogIn();
    } else {
      commonStore.setDialogs(CommonDialogs.Sign, true);
      commonStore.setDialogs(CommonDialogs.Wallets, false);
    }
  };

  // Effects
  useEffect(() => {
    if (!isConnected) {
      handleDisconnect();
    }
  }, [isConnected]);

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;

    if (userStore.userInfo) {
      authStore.setIsConnected(true);

      const FOUR_MINUTE = 240 * 1000;
      const data = LocalStorage.get(LocalStorageKeys.User);

      if (data?.address && data?.token) {
        interval = setInterval(() => {
          authStore.refreshToken(data.token, data.address);
        }, FOUR_MINUTE);
      }
    } else {
      authStore.setIsConnected(false);
    }

    return () => {
      if (!!interval) {
        clearInterval(interval);
      }
    };
  }, [userStore.userInfo]);

  useEffect(() => {
    if (!address) {
      return;
    }

    const data = LocalStorage.get(LocalStorageKeys.User);

    if (!data) {
      return;
    }

    if (data.address === address) {
      trySignIn(address);
    } else {
      handleOpenModal(CommonDialogs.Sign)();
      userStore.clearUserData();
    }
  }, [address]);

  // Handlers
  const handleConnect = async (connector: Connector) => {
    try {
      const connectInfo = await connectAsync({ connector });
      await authStore.checkAuth(connectInfo.account);
      commonStore.setDialogs(CommonDialogs.Sign, true);
      commonStore.setDialogs(CommonDialogs.Wallets, false);
    } catch (error: any) {
      if (error?.message === 'Connector already connected') {
        commonStore.setDialogs(CommonDialogs.Sign, true);
        commonStore.setDialogs(CommonDialogs.Wallets, false);
      }
    }
  };

  const handleDisconnect = () => {
    if (!signMessageLoading) {
      disconnect();
      authStore.logout();
      authStore.setIsConnected(false);
      userStore.clearUserData();
    }
  };

  const handleClose = (key: CommonDialogs) => () => {
    commonStore.setDialogs(key, false);
  };

  const handleOpenModal = (key: CommonDialogs) => () => {
    commonStore.setDialogs(key, true);
  };

  const handleGetSignMessage = () => {
    if (address) {
      signMessage({ message: AuthHelper.createSignMessage(address) });
    }
  };

  const handleCancelSign = () => {
    handleDisconnect();
    handleClose(CommonDialogs.Sign)();
  };

  const handleLogIn = async () => {
    const data = authStore.checkRefreshToken();

    if (data?.token && address) {
      await authStore.refreshToken(data?.token, address);
      await userStore.getUserInfo();
    } else {
      handleDisconnect();
    }
  };

  return (
    <>
      {isConnecting && (
        <Box sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
          <Typography variant="caption" sx={{ mr: 0.5, textTransform: 'capitalize' }}>
            Connecting
          </Typography>
          <CircularProgress size={10} />
        </Box>
      )}

      {!authStore.isConnected && !authStore.loading && !userStore.loadings[UserLoadings.GetUserInfo] && !dialogs.sign && (
        <Button
          type="button"
          variant="outlined"
          color="inherit"
          aria-label="Connect wallet"
          onClick={handleOpenModal(CommonDialogs.Wallets)}
          size={isSM ? 'small' : 'medium'}
        >
          Connect Wallet
        </Button>
      )}

      {showAccountInfo && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {chain && (
            <DynamicChainsComponent
              chain={chain}
              isSupportedChain={ChainsHelper.isSupportedChain(commonStore.chains, chain)}
              onClick={handleOpenModal(CommonDialogs.Chains)}
            />
          )}
          {address && ChainsHelper.isSupportedChain(commonStore.chains, chain) && (
            <DynamicUserMenu onDisconnect={handleDisconnect} />
          )}
        </Box>
      )}

      <DynamicWalletDialog
        onClose={handleClose(CommonDialogs.Wallets)}
        open={dialogs.wallets}
        connectors={connectors}
        onConnect={handleConnect}
        isLoading={isLoading}
        pendingConnector={pendingConnector}
      />

      <DynamicChainsDialog open={dialogs.chains} onClose={handleClose(CommonDialogs.Chains)} />
      <DynamicSignMessageDialog
        open={dialogs.sign}
        onClose={handleCancelSign}
        onGetMessage={handleGetSignMessage}
        loading={signMessageLoading}
      />
    </>
  );
});

export default ConnectWallet;
