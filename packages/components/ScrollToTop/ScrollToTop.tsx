import { useEffect } from 'react';

/**
 * @example
 * ```jsx
 * const App = () =>{
 *  ...
 *  return (
 *  <ScrollToTop/>
 * )
 * ```
 */

export const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};
