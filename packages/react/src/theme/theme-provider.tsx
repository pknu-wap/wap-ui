import React from 'react';
import GlobalStyle from './GlobalStyle';
import ToastProvider from '../components/Toast/ToastProvider';

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
      <ToastProvider />
      {children}
    </>
  );
};
