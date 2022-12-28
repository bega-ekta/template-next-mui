import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme';
import AppDialog from 'components/UI/AppDialog';
import Image from 'next/image';
import React from 'react';
import { ThemeName } from 'styles/themeTypes';
import { Connector } from 'wagmi';

const StyledLi = styled('li')(({ theme }) => ({
  marginBottom: theme.spacing(1),
  position: 'relative',
}));

const StyledLabel = styled('span')(({ theme }) => ({
  alignSelf: 'flex-end',
  padding: '1px 10px',
  borderRadius: 5,
  color: theme.palette.common.white,
  fontSize: 10,
  textTransform: 'lowercase',
  position: 'absolute',
  right: 10,
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.common.black,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  fontWeight: 'bold',
  textTransform: 'initial',
  padding: theme.spacing(1.5, 2),
  color: theme.palette.common.black,
}));

interface IWalletsModalProps {
  open: boolean;
  onClose: () => void;
  onConnect: (connector: Connector) => void;
  connectors: Connector[];
  isLoading: boolean;
  pendingConnector: Connector | undefined;
}

const WalletsDialog: React.FC<IWalletsModalProps> = props => {
  const { open, onClose, connectors, onConnect, isLoading, pendingConnector } = props;
  const { palette } = useTheme();
  const buttonColor = palette.mode === ThemeName.Light ? 'secondary' : 'inherit';

  // Renders
  return (
    <AppDialog onClose={onClose} open={open} title="Connect wallet" maxWidth="xs">
      <Box sx={{ maxWidth: 300 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Connect with one of our available wallet providers
        </Typography>

        <Box component="ul">
          {connectors.map(
            connector =>
              connector.ready && (
                <StyledLi key={connector.id}>
                  <StyledButton variant="outlined" color={buttonColor} onClick={() => onConnect(connector)} disabled={isLoading}>
                    <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                      <Image alt={connector.name} src={`/icons/${connector.name?.toLowerCase()}.svg`} width={22} height={22} />
                    </Box>

                    {isLoading && connector.id === pendingConnector?.id && (
                      <CircularProgress size={20} sx={{ position: 'absolute', right: 10 }} />
                    )}

                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {connector.name}
                    </Typography>

                    {connector.id === 'metaMask' && !isLoading && <StyledLabel>Popular</StyledLabel>}
                  </StyledButton>
                </StyledLi>
              ),
          )}
        </Box>
      </Box>
    </AppDialog>
  );
};

export default WalletsDialog;
