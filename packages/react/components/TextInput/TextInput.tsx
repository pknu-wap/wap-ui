import React, { forwardRef, InputHTMLAttributes } from 'react';
import { NormalColorType } from '../../theme';
import * as S from './TextInput.styles';

export type InputVariantType = 'bordered' | 'underlined';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  color?: NormalColorType;
  variant?: InputVariantType;
}

/**
 * @example
 * ```tsx
 * <TextInput placeholder="Input" color="primary" />
 * <TextInput placeholder="Input" color="success" />
 * <TextInput placeholder="Input" color="secondary" />
 * <TextInput placeholder="Input" color="warning" />
 * <TextInput placeholder="Input" color="error" />
 *
 * <TextInput placeholder="Input" color="primary" variant="underlined" />
 * <TextInput placeholder="Input" color="success" variant="underlined" />
 * <TextInput placeholder="Input" color="secondary" variant="underlined" />
 * <TextInput placeholder="Input" color="warning" variant="underlined" />
 * <TextInput placeholder="Input" color="error" variant="underlined" />
 * ```
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
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
  },
);
