import React from 'react';

export interface DropdownButtonProps {
  children: React.ReactNode[] | React.ReactNode;
}

export const DropdownButton = ({ children }: DropdownButtonProps) => {
  return <div>{children}</div>;
};
