import React from 'react';
import * as S from './DropdownMenuItem.styles';

export interface DropdownMenuItemProps {
  children: React.ReactNode;
}

export const DropdownMenuItem = ({ children }: DropdownMenuItemProps) => {
  return (
    <S.StyledMenuItem>
      <S.StyledMenuItemText>{children}</S.StyledMenuItemText>
    </S.StyledMenuItem>
  );
};
