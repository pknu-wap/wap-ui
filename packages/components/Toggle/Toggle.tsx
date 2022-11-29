import React, { forwardRef, InputHTMLAttributes } from 'react';
import { NormalColorType } from '../../theme/types';
import * as S from './Toggle.styles';

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  color?: NormalColorType;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  { labelText = '', color = 'primary', ...options },
  ref,
) {
  return (
    <S.ToggleLabel>
      <S.ToggleText>{labelText}</S.ToggleText>
      <S.ToggleCheckbox type="checkbox" ref={ref} color={color} {...options} />
      <S.ToggleSwitch />
    </S.ToggleLabel>
  );
});
