import { NormalColorType } from '../../theme/types';
import React, { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'auto';
  children: React.ReactNode;
  color?: NormalColorType;
  shadow?: boolean;
}

export const Button = ({
  size = 'md',
  color = 'primary',
  children,
  shadow = false,
  ...options
}: ButtonProps) => {
  return (
    <S.StyledButton size={size} color={color} shadow={shadow} {...options}>
      {children}
    </S.StyledButton>
  );
};
