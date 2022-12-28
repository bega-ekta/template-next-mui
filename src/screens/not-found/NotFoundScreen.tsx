import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import useMediaQueries from 'hooks/useMediaQueries';

interface IProps {}

const NotFoundScreen: React.FC<IProps> = () => {
  const { isSM } = useMediaQueries();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box textAlign="center" sx={{ position: 'relative', width: '100%' }}>
        <Image src="/icons/404.svg" alt="not-found" width={isSM ? 300 : 500} height={isSM ? 220 : 380} />
      </Box>
      <Typography variant={isSM ? 'h6' : 'h3'} component="h1" sx={{ textAlign: 'center', maxWidth: { xs: '80%', sm: '100%' } }}>
        The page you were looking for doesn&apos;t exist
      </Typography>
    </Box>
  );
};

export default NotFoundScreen;
