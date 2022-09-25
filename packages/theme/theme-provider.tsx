import React from 'react';
import { ThemeProvider, ThemeProviderProps } from '@emotion/react';
import lightTheme from './light-theme';

interface Props extends ThemeProviderProps {}

export const WapUIProvider = ({ children, theme = lightTheme }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
