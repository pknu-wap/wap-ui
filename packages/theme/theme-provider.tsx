import React from 'react';
import { Theme, ThemeProvider } from '@emotion/react';
import lightTheme from './light-theme';
import GlobalStyle from './GlobalStyle';

interface Props {
  theme?: Theme;
  children: React.ReactNode;
}

export const WapUIProvider = ({ children, theme = lightTheme }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
