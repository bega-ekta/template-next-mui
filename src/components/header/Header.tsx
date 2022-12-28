import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useRootStore from 'base/store/useRootStore';
import ChainsHelper from 'helpers/ChainsHelper';
import { observer } from 'mobx-react-lite';
import { AppRoles } from 'modules/user/types/UserTypes';
import { useNetwork } from 'wagmi';

import AppLogo from '../UI/AppLogo';
import ConnectWallet from '../wallet/ConnectWallet';
import AppMenu from './components/AppMenu';
import ThemeSwitch from './components/ThemeSwitch';

interface IProps {}

const Header: React.FC<IProps> = observer(() => {
  const { authStore, userStore, commonStore } = useRootStore();
  const { chain } = useNetwork();
  const showAccountsMenu = userStore.userRoles[AppRoles.SuperAdmin] || (userStore.adminRoles && userStore.adminRoles.length > 0);

  const isSupportedChain = ChainsHelper.isSupportedChain(commonStore.chains, chain);

  return (
    <Box component="header" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', py: { xs: 1.5, sm: 2 }, zIndex: 99 }}>
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: { xs: 0.6, sm: 1.5 }, display: 'flex', alignItems: 'center' }}>
              <AppLogo />
            </Box>

            {authStore.isConnected && isSupportedChain && <AppMenu showAccounts={showAccountsMenu} />}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 1 }}>
              <ConnectWallet />
            </Box>

            <ThemeSwitch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

export default Header;
