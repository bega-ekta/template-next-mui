import useRootStore from 'base/store/useRootStore';
import { observer } from 'mobx-react-lite';
import React, { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const withConnection = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  observer((props: T) => {
    const { authStore } = useRootStore();
    const { palette } = useTheme();

    // Renders
    if (!authStore.isConnected) {
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
              icon={<ErrorOutlineOutlinedIcon color="error" />}
            >
              <Typography variant="h5" component="p" sx={{ color: palette.error.main }}>
                Connect your wallet to continue!
              </Typography>
            </Alert>
          </Container>
        </Box>
      );
    }

    return <Component {...props} />;
  });

export default withConnection;
