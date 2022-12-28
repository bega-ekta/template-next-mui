import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import grey from '@mui/material/colors/grey';
import AppDialog from 'components/UI/AppDialog';
import React from 'react';

interface ISignMessageModalProps {
  open: boolean;
  onClose: () => void;
  onGetMessage: () => void;
  loading: boolean;
}

const SignMessageDialog: React.FC<ISignMessageModalProps> = props => {
  const { open, onClose, onGetMessage, loading } = props;

  return (
    <AppDialog open={open} onClose={onClose} title="Sign message" maxWidth="xs">
      <Box sx={{ maxWidth: 300, textAlign: 'center' }}>
        <GppMaybeIcon sx={{ fontSize: 60 }} color="primary" />

        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          Verify your account
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button
            variant="outlined"
            size="small"
            type="button"
            color="primary"
            onClick={onGetMessage}
            sx={{ mb: 1 }}
            disabled={loading}
          >
            Sign message
            {loading && <CircularProgress size={15} sx={{ ml: 1 }} />}
          </Button>
          <Button
            variant="text"
            size="small"
            type="button"
            color="inherit"
            onClick={onClose}
            sx={{ color: grey['500'] }}
            disabled={loading}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </AppDialog>
  );
};

export default SignMessageDialog;
