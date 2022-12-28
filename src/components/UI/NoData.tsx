import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IProps {}

const NoData: React.FC<IProps> = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3 }}>
      <InboxOutlinedIcon sx={{ fontSize: 60 }} />
      <Typography variant="subtitle2">No data</Typography>
    </Box>
  );
};

export default NoData;
