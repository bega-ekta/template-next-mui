import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import useRootStore from 'base/store/useRootStore';
import ChainsHelper from 'helpers/ChainsHelper';
import { observer } from 'mobx-react-lite';
import React, { FunctionComponent, useMemo } from 'react';
import { useNetwork } from 'wagmi';

const withNetwork = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  observer((props: T) => {
    const { chain } = useNetwork();
    const { palette } = useTheme();
    const { commonStore } = useRootStore();

    const chainNames = useMemo(() => commonStore.chains?.map(item => item.name), [chain]);
    const isRightChain = chain ? ChainsHelper.isSupportedChain(commonStore.chains, chain) : false;

    // Renders
    const renderChainNames = () => {
      return chainNames?.map((chainName, index) => (
        <strong key={index}>{chainNames.length < 2 || index === 0 ? chainName : ` | ${chainName}`}</strong>
      ));
    };

    if (!isRightChain) {
      return (
        <Box sx={{ width: '100%', flex: 1, pt: 5, alignSelf: 'flex-start' }}>
          <Container maxWidth="sm">
            <Alert
              severity="error"
              sx={{
                width: 'fit-content',
                mx: 'auto',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                px: 4,
              }}
              icon={<ErrorOutlineOutlinedIcon color="warning" />}
            >
              <Typography variant="h6" component="p" sx={{ color: palette.warning.main }}>
                Wrong chain !
              </Typography>
              <Typography variant="h6" component="p" sx={{ color: palette.warning.main }}>
                Switch to {renderChainNames()} to continue !
              </Typography>
            </Alert>
          </Container>
        </Box>
      );
    }

    return <Component {...props} />;
  });

export default withNetwork;
