import * as S from './Checkbox.styles';
import { NormalColorType } from '../../theme/types';
import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  color?: NormalColorType;
}
export const Checkbox = forwardRef<HTMLInputElement, Props>(function Checkbox(
  { labelText = '', color = 'primary', ...options },
  ref,
) {
  return (
    <S.CheckboxLabel>
      <S.CheckboxInput type="checkbox" ref={ref} color={color} {...options} />
      <S.CheckboxMask color={color}>
        <S.CheckIcon />
      </S.CheckboxMask>
      <S.CheckboxText>{labelText}</S.CheckboxText>
    </S.CheckboxLabel>
  );
});
