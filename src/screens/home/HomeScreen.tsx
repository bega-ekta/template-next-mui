import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useRootStore from 'base/store/useRootStore';
import withConnection from 'hocs/withConnection';
import withNetwork from 'hocs/withNetwork';
import { observer } from 'mobx-react-lite';
import { CommonDialogs } from 'modules/common/types/CommonTypes';
import dynamic from 'next/dynamic';


interface IProps {}

const HomeScreen: React.FC<IProps> = observer(() => {
  const { commonStore } = useRootStore();
  const open = commonStore.dialogs.terms;

  // Handlers
  const handleClose = () => {
    commonStore.setDialogs(CommonDialogs.Terms, false);
  };

  // Renders
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
          Home Screen
      </Container>

    </Box>
  );
});

export default withConnection(withNetwork(HomeScreen));
