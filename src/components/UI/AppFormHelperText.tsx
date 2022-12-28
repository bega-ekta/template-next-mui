import FormHelperText from '@mui/material/FormHelperText';
import { FieldError } from 'react-hook-form';

interface IProps {
  text: Partial<FieldError> | null | undefined;
}

const AppFormHelperText: React.FC<IProps> = props => {
  const { text } = props;

  return text ? <FormHelperText component="span">{text.message}</FormHelperText> : <></>;
};

export default AppFormHelperText;
