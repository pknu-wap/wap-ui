import React from 'react';
import { Spinner } from './Loaders/Spinner/Spinner';

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  type?: 'spinner' | 'bars' | 'dots';
}

export const Loader = ({
  color = 'primary',
  size = 'md',
  type = 'spinner',
}: LoaderProps) => {
  return (
    <>{type === 'spinner' ? <Spinner size={size} color={color} /> : null}</>
  );
};
