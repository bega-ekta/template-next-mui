import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import { ThemeContext } from 'contexts/ThemeProviderWrapper';
import useMediaQueries from 'hooks/useMediaQueries';
import { useContext } from 'react';
import { ThemeName } from 'styles/themeTypes';

interface IProps {}

const ThemeSwitch: React.FC<IProps> = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { isSM } = useMediaQueries();

  const handleChangeTheme = (themeName: ThemeName) => {
    setTheme(themeName);
  };

  return (
    <>
      {theme === ThemeName.Dark && (
        <IconButton onClick={() => handleChangeTheme(ThemeName.Light)} title="Dark mode" aria-label="Dark mode">
          <LightModeIcon fontSize={isSM ? 'small' : 'medium'} />
        </IconButton>
      )}
      {theme === ThemeName.Light && (
        <IconButton onClick={() => handleChangeTheme(ThemeName.Dark)} title="Light mode" aria-label="Light mode">
          <DarkModeIcon fontSize={isSM ? 'small' : 'medium'} />
        </IconButton>
      )}
    </>
  );
};

export default ThemeSwitch;
