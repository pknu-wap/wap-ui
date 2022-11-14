import React from 'react';
import { useDropdownContext } from '../DropdownContext';
import * as S from './DropdownMenu.styles';

export interface DropdownMenuProps {
  children: React.ReactNode[] | React.ReactNode;
}

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const { state } = useDropdownContext();
  if (!state) return null;
  return <S.StyledMenu>{children}</S.StyledMenu>;
};
