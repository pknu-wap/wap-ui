import React, { ButtonHTMLAttributes } from 'react';
import { NormalColorType } from '../../../theme/types';
import * as S from './DropdownButton.styles';

export interface DropdownButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: NormalColorType;
  shadow?: boolean;
}

export const DropdownButton = ({
  children,
  color = 'primary',
  shadow = false,
  ...options
}: DropdownButtonProps) => {
  return (
    <S.StyledButton color={color} shadow={shadow} {...options}>
      {children}
    </S.StyledButton>
  );
};
