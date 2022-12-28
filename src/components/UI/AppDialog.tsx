import React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

interface IProps extends DialogProps {
  title?: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AppDialog: React.FC<IProps> = props => {
  const { children, title } = props;

  const handleClose = (event: React.MouseEvent) => {
    if (props.onClose) {
      props.onClose(event, 'backdropClick');
    }
  };

  return (
    <Dialog {...props} TransitionComponent={Transition} PaperProps={{ elevation: 20 }}>
      <DialogTitle variant="h5" fontWeight="bold">
        {title}
      </DialogTitle>

      <DialogContent>{children}</DialogContent>

      <IconButton aria-label="close" onClick={handleClose} size="small" sx={{ position: 'absolute', right: 8, top: 8 }}>
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
};

export default AppDialog;
