import React from 'react';

export interface DropdownMenuProps {
  children: React.ReactNode[] | React.ReactNode;
}

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return <div>{children}</div>;
};
