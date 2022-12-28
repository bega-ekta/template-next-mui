import { createContext, useEffect, useState } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { themeCreator } from 'styles/base';
import { ThemeName } from 'styles/themeTypes';
import LocalStorage from 'base/localstorage/LocalStorage';
import { LocalStorageKeys } from 'base/localstorage/LocalStorageService';

const contextValue = { theme: ThemeName.Dark, setTheme: (theme: ThemeName) => {} };
export const ThemeContext = createContext(contextValue);

interface IProps {
  children: React.ReactNode;
}

const ThemeProviderWrapper: React.FC<IProps> = props => {
  const [themeName, setThemeName] = useState(ThemeName.Dark);
  const theme = themeCreator(themeName);

  useEffect(() => {
    const curThemeName = LocalStorage.get(LocalStorageKeys.AppTheme) || ThemeName.Dark;
    setThemeName(curThemeName as ThemeName);
  }, []);

  const handleSetTheme = (themeName: ThemeName): void => {
    LocalStorage.set(LocalStorageKeys.AppTheme, themeName);
    setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme: handleSetTheme }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
