import { NormalColorType } from '../../theme/types';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './Radio.styles';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  color?: NormalColorType;
  labelColor?: boolean;
}

/**
 * @example
 * ```tsx
 * <Radio labelText="Radio" color="primary" />
 * <Radio labelText="Radio" color="success" />
 * <Radio labelText="Radio" color="secondary" />
 * <Radio labelText="Radio" color="warning" />
 * <Radio labelText="Radio" color="error" />
 * ```
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { labelText = '', labelColor = false, color = 'primary', ...options },
  ref,
) {
  return (
    <S.RadioLabel>
      <S.RadioInput type="radio" ref={ref} color={color} {...options} />
      <S.RadioPoint color={color} />
      <S.RadioText labelColor={labelColor} color={color}>
        {labelText}
      </S.RadioText>
    </S.RadioLabel>
  );
});

export default Radio;
