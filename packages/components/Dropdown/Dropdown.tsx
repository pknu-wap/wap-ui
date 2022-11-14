import React from 'react';

export interface DropdownProps {
  children: React.ReactNode;
}

export const Dropdown = ({ children }: DropdownProps) => {
  return <>{children}</>;
};
