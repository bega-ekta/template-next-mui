import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import StringHelper from 'helpers/StringHelper';
import useMediaQueries from 'hooks/useMediaQueries';
import UserClaimHistory from 'modules/history/models/UserClaimHistory';
import Image from 'next/image';
import { useNetwork } from 'wagmi';

interface IProps {
  data: UserClaimHistory[] | null;
}

const HistoryTable: React.FC<IProps> = props => {
  const { data } = props;
  const { chain } = useNetwork();
  const { palette } = useTheme();
  const { isSM } = useMediaQueries();

  // Handlers
  const renderRows = () => {
    return data?.map((item, index) => (
      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="center" component="th" scope="row">
          {item?.amount ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mr: 0.5 }}>
                {item.amount}
              </Typography>
              <Typography variant="h6" sx={{ mr: 1 }}>
                EKTA
              </Typography>
              <Image src="/icons/ekta-coin.svg" alt="ekta-coin" width={20} height={20} className="coin-img" />
            </Box>
          ) : (
            ''
          )}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {item.transactionHash ? (
            <Box
              component="a"
              target="_blank"
              rel="noreferrer noopener"
              href={`${chain?.blockExplorers?.default.url}/tx/${item.transactionHash}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: palette.primary.main,
                '&:hover': { color: palette.primary.light },
              }}
            >
              <Typography variant="body2" sx={{ mr: 1 }}>
                {StringHelper.shortStringOnCenter(item.transactionHash, isSM ? 5 : 10)}
              </Typography>
              <OpenInNewIcon fontSize="small" color="inherit" />
            </Box>
          ) : (
            ''
          )}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          <Typography variant="body1">{item.time}</Typography>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 370 }} aria-label="history table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Transaction</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{renderRows()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
