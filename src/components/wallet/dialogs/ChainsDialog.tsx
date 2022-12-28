import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import useRootStore from 'base/store/useRootStore';
import AppDialog from 'components/UI/AppDialog';
import { chainsIcons } from 'data/chains';
import { observer } from 'mobx-react-lite';
import ChainModel from 'modules/common/models/ChainModel';
import Image from 'next/image';
import React, { useState } from 'react';
import { useNetwork, useSwitchNetwork } from 'wagmi';

const StyledLi = styled('li')(({ theme }) => ({
  marginBottom: theme.spacing(1),
  position: 'relative',
  width: '100%',
  minWidth: 250,
  [theme.breakpoints.down('sm')]: {
    minWidth: 200,
  },
}));

const ActiveDotSpan = styled('span')(({ theme }) => ({
  width: theme.spacing(1),
  height: theme.spacing(1),
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  position: 'absolute',
  top: '50%',
  right: theme.spacing(2),
  transform: 'translateY(-50%)',
  boxShadow: theme.shadows[2],
}));

interface IChainsModalProps {
  open: boolean;
  onClose: () => void;
}

const ChainsDialog: React.FC<IChainsModalProps> = observer(props => {
  const { commonStore } = useRootStore();
  const { open, onClose } = props;
  const [futureChain, setFutureChain] = useState<ChainModel | null>(null);

  const { chain: currentChain } = useNetwork();
  const { switchNetworkAsync, isLoading } = useSwitchNetwork();

  // Handlers
  const handleClick = (newChain: ChainModel) => async () => {
    if (switchNetworkAsync && newChain?.id) {
      setFutureChain(newChain);

      try {
        await switchNetworkAsync(newChain.id);
        onClose();
      } catch (error) {}
    }
  };

  // Renders
  const renderChains = () => {
    return commonStore.chains?.map(chain => (
      <StyledLi key={chain.id}>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          fullWidth
          onClick={handleClick(chain)}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: 2, pr: 1.5 }}
          disabled={isLoading}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!!chain.name && !!chain.id && <Image alt={chain.name} src={chainsIcons[chain.id]} width={22} height={22} />}

            <Typography
              variant="body1"
              component="span"
              sx={{
                fontWeight: 'bold',
                ml: 1.2,
                maxWidth: { xs: '70%', sm: '100%' },
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
            >
              {chain.name}
            </Typography>
          </Box>

          {isLoading && futureChain && futureChain.id === chain.id && <CircularProgress size={20} />}
        </Button>

        {currentChain?.id === chain.id && !isLoading && <ActiveDotSpan />}
      </StyledLi>
    ));
  };

  return (
    <AppDialog onClose={onClose} open={open} title="Chains">
      <Box component="ul" sx={{ width: '100%', pt: 2, pb: 1, minWidth: 200 }}>
        {renderChains()}
      </Box>
    </AppDialog>
  );
});

export default ChainsDialog;
