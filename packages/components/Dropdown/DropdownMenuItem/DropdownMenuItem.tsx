import React, { ButtonHTMLAttributes } from 'react';
import * as S from './DropdownMenuItem.styles';

export interface DropdownMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const DropdownMenuItem = ({ children }: DropdownMenuItemProps) => {
  return (
    <S.StyledMenuItem>
      <S.StyledMenuItemText>{children}</S.StyledMenuItemText>
    </S.StyledMenuItem>
  );
};
