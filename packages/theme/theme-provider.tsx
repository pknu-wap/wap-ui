import React from 'react';
import { Theme, ThemeProvider } from '@emotion/react';
import lightTheme from './light-theme';
import GlobalStyle from './GlobalStyle';

interface WapUIProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const WapUIProvider = ({
  children,
  theme = lightTheme,
}: WapUIProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
