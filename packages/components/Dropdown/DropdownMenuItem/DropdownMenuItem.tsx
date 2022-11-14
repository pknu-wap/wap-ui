import React from 'react';
import * as S from './DropdownMenuItem.styles';

export interface DropdownMenuItemProps {
  children: React.ReactNode;
}

export const DropdownMenuItem = ({ children }: DropdownMenuItemProps) => {
  return <S.StyledMenuItem>{children}</S.StyledMenuItem>;
};
