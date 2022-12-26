import * as S from './Checkbox.styles';
import { NormalColorType } from '../../theme';
import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  color?: NormalColorType;
}

/**
 * @example
 * ```tsx
 * <Checkbox labelText="Checkbox" color="primary" />
 * <Checkbox labelText="Checkbox" color="success" />
 * <Checkbox labelText="Checkbox" color="secondary" />
 * <Checkbox labelText="Checkbox" color="warning" />
 * <Checkbox labelText="Checkbox" color="error" />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ labelText = '', color = 'primary', ...options }, ref) {
    return (
      <S.CheckboxLabel>
        <S.CheckboxInput type="checkbox" ref={ref} color={color} {...options} />
        <S.CheckboxMask color={color}>
          <S.CheckIcon />
        </S.CheckboxMask>
        <S.CheckboxText>{labelText}</S.CheckboxText>
      </S.CheckboxLabel>
    );
  },
);
