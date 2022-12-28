import StringHelper from 'helpers/StringHelper';
import React from 'react';
import { Chain } from 'wagmi';
import Button from '@mui/material/Button';
import useMediaQueries from 'hooks/useMediaQueries';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { chainsIcons } from 'data/chains';
import Typography from '@mui/material/Typography';
import ReportIcon from '@mui/icons-material/Report';

interface IChainsComponentProps {
  chain: Chain | undefined;
  onClick: () => void;
  isSupportedChain: boolean | undefined;
}

const ChainsComponent: React.FC<IChainsComponentProps> = props => {
  const { chain, onClick, isSupportedChain } = props;
  const { isXS, isSM } = useMediaQueries();

  return (
    <Button variant="outlined" type="button" color="inherit" onClick={onClick} size={isSM ? 'small' : 'medium'} sx={{ mr: 1.5 }}>
      {chain && isSupportedChain ? (
        <>
          {isXS ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image alt={chain.network} src={chainsIcons[chain.id]} width={20} height={20} />
              {!isSM && (
                <Typography variant="body1" sx={{ ml: 0.7, fontWeight: 'bold' }}>
                  {StringHelper.shortString(chain.name, 8)}
                </Typography>
              )}
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image alt={chain.network} src={chainsIcons[chain.id]} width={20} height={20} />
              {!isSM && (
                <Typography variant="body1" sx={{ ml: 0.7, fontWeight: 'bold' }}>
                  {chain.name}
                </Typography>
              )}
            </Box>
          )}
        </>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ReportIcon color="warning" sx={{ mr: { xs: 0, sm: 0.5 } }} fontSize="small" />
          {!isSM && (
            <Typography variant="body1" fontWeight="bold">
              Wrong chain
            </Typography>
          )}
        </Box>
      )}
    </Button>
  );
};

export default ChainsComponent;
