import styled from '@mui/material/styles/styled';
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('components/header/Header'));

const StyledMain = styled('main')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  position: 'relative',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(10),
}));

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = props => {
  const { children } = props;

  return (
    <>
      <DynamicHeader />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default MainLayout;
