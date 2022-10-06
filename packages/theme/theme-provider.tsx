import React from 'react';
import { ThemeProvider, ThemeProviderProps } from '@emotion/react';
import lightTheme from './light-theme';

type Props = ThemeProviderProps

export const WapUIProvider = ({ children, theme = lightTheme }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
