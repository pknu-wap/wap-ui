import React, { ButtonHTMLAttributes } from 'react';
import { useDropdownContext } from '../DropdownContext';
import * as S from './DropdownMenuItem.styles';

export interface DropdownMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onAction?: () => void;
}

export const DropdownMenuItem = ({
  children,
  onAction,
}: DropdownMenuItemProps) => {
  const { updateState } = useDropdownContext();
  return (
    <S.StyledMenuItem
      onClick={() => {
        onAction?.();
        updateState?.(false);
      }}
    >
      <S.StyledMenuItemText>{children}</S.StyledMenuItemText>
    </S.StyledMenuItem>
  );
};
