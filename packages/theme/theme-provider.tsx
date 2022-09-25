import React from 'react';
import { ThemeProvider, ThemeProviderProps } from '@emotion/react';
import lightTheme from './light-theme';
import GlobalStyle from './global-style';

interface Props extends ThemeProviderProps {}

export const WapUIProvider = ({ children, theme = lightTheme }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
