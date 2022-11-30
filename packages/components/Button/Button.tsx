import { NormalColorType } from '../../theme/types';
import React, { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'auto';
  children: React.ReactNode;
  color?: NormalColorType;
  shadow?: boolean;
}
/**
 * @example
 * ```tsx
 * <Button color="primary" shadow>Button</Button>
 * <Button color="success" shadow>Button</Button>
 * <Button color="secondary" shadow>Button</Button>
 * <Button color="warning" shadow>Button</Button>
 * <Button color="error" shadow>Button</Button>
 * ```
 */
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
