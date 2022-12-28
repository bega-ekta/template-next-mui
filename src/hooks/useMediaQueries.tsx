import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

const useMediaQueries = () => {
  const theme = useTheme();

  return {
    isXS: useMediaQuery(theme.breakpoints.down('xs')),
    isSM: useMediaQuery(theme.breakpoints.down('sm')),
    isMD: useMediaQuery(theme.breakpoints.down('md')),
    isLG: useMediaQuery(theme.breakpoints.down('lg')),
    isXL: useMediaQuery(theme.breakpoints.down('xl')),
  };
};

export default useMediaQueries;
