import React, { ButtonHTMLAttributes } from 'react';
import { NormalColorType } from '../../../theme/types';
import { useDropdownContext } from '../DropdownContext';
import * as S from './DropdownMenuItem.styles';

export interface DropdownMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onAction?: () => void;
  color?: NormalColorType | 'default';
}

export const DropdownMenuItem = ({
  children,
  onAction,
  color = 'default',
}: DropdownMenuItemProps) => {
  const { updateState } = useDropdownContext();
  return (
    <S.StyledMenuItem
      onClick={() => {
        onAction?.();
        updateState?.(false);
      }}
      color={color}
    >
      <S.StyledMenuItemText color={color}>{children}</S.StyledMenuItemText>
    </S.StyledMenuItem>
  );
};
