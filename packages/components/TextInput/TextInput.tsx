import React, { forwardRef, InputHTMLAttributes } from 'react';
import { NormalColorType } from '../../theme/types';
import * as S from './TextInput.styles';

export type InputVariantType = 'bordered' | 'underlined';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  color?: NormalColorType;
  variant?: InputVariantType;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(
  { placeholder, color = 'primary', variant = 'bordered', ...props },
  ref,
) {
  return (
    <S.Root>
      <S.Input
        autoComplete="off"
        placeholder=" "
        color={color}
        variant={variant}
        ref={ref}
        {...props}
      />
      {variant === 'underlined' && <S.Underline color={color} />}
      <S.Label color={color}>{placeholder}</S.Label>
    </S.Root>
  );
});
