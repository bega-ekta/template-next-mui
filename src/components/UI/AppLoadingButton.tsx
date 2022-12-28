import CircularProgress from '@mui/material/CircularProgress';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';

interface IProps extends LoadingButtonProps {}

const AppLoadingButton: React.FC<IProps> = props => {
  return <LoadingButton {...props} loadingIndicator={<CircularProgress size={18} color="primary" />} />;
};

export default AppLoadingButton;
