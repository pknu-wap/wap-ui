import React from 'react';
import GlobalStyle from './GlobalStyle';

interface WapUIProviderProps {
  children: React.ReactNode;
}
/**
 * @example
 * ```jsx
 * import { WapUIProvider } from '@wap-ui';
 *
 * const App = () => {
 *  return (
 *    <WapUIProvider>
 *      <App />
 *    </WapUIProvider>
 *  );
 * };
 * ```
 */
export const WapUIProvider = ({ children }: WapUIProviderProps) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

// theme 사용할려면 이렇게 하면 됩니다. 시간관계상 제거
//
// export const WapUIProvider = ({
//   children,
//   theme = lightTheme,
// }: WapUIProviderProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       {children}
//     </ThemeProvider>
//   );
// };
