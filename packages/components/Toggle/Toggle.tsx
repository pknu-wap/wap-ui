import React, { forwardRef, InputHTMLAttributes } from 'react';
import { NormalColorType } from '../../theme/types';
import * as S from './Toggle.styles';

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  color?: NormalColorType;
  variant?: 'sm' | 'lg';
}

/**
 * @example
 * ```tsx
 * <Toggle labelText="Toggle" color="primary" />
 * <Toggle labelText="Toggle" color="success" />
 * <Toggle labelText="Toggle" color="secondary" />
 * <Toggle labelText="Toggle" color="warning" />
 * <Toggle labelText="Toggle" color="error" />
 * ```
 * @example
 * ```tsx
 * <Toggle labelText="Toggle" color="primary" variant="lg" />
 * <Toggle labelText="Toggle" color="success" variant="lg" />
 * <Toggle labelText="Toggle" color="secondary" variant="lg" />
 * <Toggle labelText="Toggle" color="warning" variant="lg" />
 * <Toggle labelText="Toggle" color="error" variant="lg" />
 * ```
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  { labelText = '', color = 'primary', variant = 'sm', ...options },
  ref,
) {
  return (
    <S.ToggleLabel variant={variant}>
      <S.ToggleText variant={variant}>{labelText}</S.ToggleText>
      <S.ToggleCheckbox
        type="checkbox"
        variant={variant}
        ref={ref}
        color={color}
        {...options}
      />
      <S.ToggleSwitch variant={variant} />
    </S.ToggleLabel>
  );
});
