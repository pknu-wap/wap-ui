import React from 'react';
import { NormalColorType } from '../../theme/types';
import { Bars } from './Loaders/Bars/Bars';
import { Dots } from './Loaders/Dots/Dots';
import { Spinner } from './Loaders/Spinner/Spinner';

export interface LoaderProps {
  /**
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * @default 'primary'
   */
  color?: NormalColorType;
  /**
   * @default 'spinner'
   */
  type?: 'spinner' | 'bars' | 'dots';
}

/**
 * @example
 * ```jsx
 * const App = () => {
 *  return (
 * <>
 *   <Loader />
 *   <Loader type="spinner" size='sm' />
 *   <Loader type="bars" color='secondary' />
 *   <Loader type="dots" />
 * </>
 * )
 * }
 * ```
 */

export const Loader = ({
  color = 'primary',
  size = 'md',
  type = 'spinner',
}: LoaderProps) => {
  return (
    <>
      {type === 'spinner' ? (
        <Spinner size={size} color={color} />
      ) : type === 'bars' ? (
        <Bars size={size} color={color} />
      ) : type === 'dots' ? (
        <Dots size={size} color={color} />
      ) : null}
    </>
  );
};
