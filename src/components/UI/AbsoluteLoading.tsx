import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import useTheme from '@mui/material/styles/useTheme';

interface IProps {}

const AbsoluteLoading: React.FC<IProps> = () => {
  const { palette } = useTheme();

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: palette.secondary.main,
          opacity: 0.1,
        }}
      />
      <CircularProgress size={30} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    </>
  );
};

export default AbsoluteLoading;
