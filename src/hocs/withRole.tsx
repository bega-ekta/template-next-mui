import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import useRootStore from 'base/store/useRootStore';
import { observer } from 'mobx-react-lite';
import { AppRoles, UserLoadings } from 'modules/user/types/UserTypes';
import React, { FunctionComponent } from 'react';

const withRole = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  observer((props: T) => {
    const { userStore } = useRootStore();
    const { palette } = useTheme();

    const isRightRole = userStore.userRoles[AppRoles.SuperAdmin] || (userStore.adminRoles && userStore.adminRoles.length > 0);

    const loading =
      userStore.loadings[UserLoadings.GetUserInfo] ||
      userStore.loadings[UserLoadings.CheckRole]

    if (loading) {
      return (
        <Box sx={{ alignSelf: 'flex-start', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress size={30} />
        </Box>
      );
    }

    if (!isRightRole) {
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
                You don&apos;t have access !
              </Typography>
            </Alert>
          </Container>
        </Box>
      );
    }

    return <Component {...props} />;
  });

export default withRole;
