import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useRootStore from 'base/store/useRootStore';
import NoData from 'components/UI/NoData';
import withConnection from 'hocs/withConnection';
import withNetwork from 'hocs/withNetwork';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

import HistoryTable from './components/HistoryTable';

interface IProps {}

const HistoryScreen: React.FC<IProps> = observer(() => {
  const { historyStore } = useRootStore();
  const { address } = useAccount();

  const showHistory = !historyStore.loading && historyStore.claimHistory && historyStore.claimHistory.length > 0;
  const showEmpty = !historyStore.loading && (!historyStore.claimHistory || historyStore.claimHistory.length === 0);

  // Effects
  useEffect(() => {
    if (address) {
      historyStore.getClaimHistory(address);
    }
  }, [address]);

  // Renders
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h2" component="h1" sx={{ mb: 3 }}>
            Claim history
          </Typography>

          {showHistory && <HistoryTable data={historyStore.claimHistory} />}
          {showEmpty && <NoData />}

          {historyStore.loading && <CircularProgress size={30} />}
        </Box>
      </Container>
    </Box>
  );
});

export default withConnection(withNetwork(HistoryScreen));
