import React from 'react';

export interface DropdownMenuItemProps {
  children: React.ReactNode;
}

export const DropdownMenuItem = ({ children }: DropdownMenuItemProps) => {
  return <div>{children}</div>;
};
