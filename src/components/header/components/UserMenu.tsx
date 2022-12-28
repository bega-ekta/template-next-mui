import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import useRootStore from 'base/store/useRootStore';
import CopyToClipboard from 'components/UI/CopyToClipboard';
import { externalLinks } from 'data/externalLinks';
import { tokenSymbols } from 'data/tokens';
import ChainsHelper from 'helpers/ChainsHelper';
import StringHelper from 'helpers/StringHelper';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import React, { useState } from 'react';
import { useAccount, useBalance, useNetwork } from 'wagmi';

import ExternalLink from './ExternalLink';

interface IProps {
  onDisconnect: () => void;
}

const UserMenu: React.FC<IProps> = observer(props => {
  const { onDisconnect } = props;
  const { commonStore, userStore } = useRootStore();
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { data: balance } = useBalance({ address, watch: true });
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const airdropToken = commonStore.tokens?.find(token => token.symbol === tokenSymbols.airdrop);
  const contractLink = `${chain?.blockExplorers?.default.url}/address/${airdropToken?.address}`;
  const userIconColor = userStore.adminRoles && userStore.adminRoles.length > 0 ? 'primary' : 'inherit';

  // Handlers
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <PersonIcon color={userIconColor} />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2, pb: 1, px: 2 }}>
          <Box sx={{ mb: 1 }}>
            <Image src="/icons/ekta-logo.svg" width={40} height={40} alt="ekta-logo" />
          </Box>

          {address && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="body2" fontWeight="bold" color="grey">
                {StringHelper.shortStringOnCenter(address, 6)}
              </Typography>

              <CopyToClipboard copyValue={address} />
            </Box>
          )}

          {ChainsHelper.isSupportedChain(commonStore.chains, chain) && balance && (
            <Typography variant="body2" fontWeight="bold" sx={{ mb: 2 }}>
              {StringHelper.shortString(balance.formatted, 7, false)} {balance.symbol}
            </Typography>
          )}

          {address && <ExternalLink label="Ekta claim contract" link={contractLink} linkName={airdropToken?.address} />}
          <ExternalLink label="OpenSea OG Portal" link={externalLinks.ogOpenSea} />
          <ExternalLink label="OpenSea Ekta Portal" link={externalLinks.portalOpenSea} />

          <Button fullWidth color="inherit" onClick={onDisconnect} size="small">
            <LogoutIcon sx={{ display: 'flex', mr: 1, color: 'grey' }} fontSize="small" />
            <Typography variant="body1" color="grey">
              Disconnect
            </Typography>
          </Button>
        </Paper>
      </Popover>
    </Box>
  );
});

export default UserMenu;
