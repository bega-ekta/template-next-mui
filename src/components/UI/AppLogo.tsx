import Image from 'next/image';
import Link from 'next/link';
import { AppRoutesPaths } from 'modules/common/types/CommonTypes';
import useTheme from '@mui/material/styles/useTheme';
import { ThemeName } from 'styles/themeTypes';
import useMediaQueries from 'hooks/useMediaQueries';
import styled from '@mui/material/styles/styled';

const StyledImage = styled(Image)(() => ({
  objectFit: 'contain',
}));

const StyledLink = styled(Link)(() => ({
  display: 'flex',
}));

interface IProps {}

const AppLogo: React.FC<IProps> = () => {
  const { palette } = useTheme();
  const { isSM } = useMediaQueries();

  const currentPath = isSM
    ? '/icons/ekta-logo.svg'
    : palette.mode === ThemeName.Light
    ? '/icons/logo-dark.svg'
    : '/icons/logo-light.svg';

  const width = isSM ? 40 : 120;
  const height = isSM ? 40 : 55;

  return (
    <StyledLink href={AppRoutesPaths.Home}>
      <StyledImage src={currentPath} alt="logo" width={width} height={height} />
    </StyledLink>
  );
};

export default AppLogo;
