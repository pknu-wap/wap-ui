import React from 'react';
import * as S from './DropdownMenu.styles';

export interface DropdownMenuProps {
  children: React.ReactNode[] | React.ReactNode;
}

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return <S.StyledMenu>{children}</S.StyledMenu>;
};
