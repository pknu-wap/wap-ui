import { NormalColorType } from '../../theme/types';
import { palette } from '../../theme/palette';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ToggleLabel = styled.label<{ variant: 'sm' | 'lg' }>`
  display: flex;
  align-items: center;

  ${({ variant }) =>
    variant === 'sm' &&
    css`
      gap: 0.5rem;
    `}
  ${({ variant }) =>
    variant === 'lg' &&
    css`
      gap: 1rem;
    `}
`;

export const ToggleSwitch = styled.span<{ variant: 'sm' | 'lg' }>`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${palette.gray};
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${({ variant }) =>
    variant === 'sm' &&
    css`
      width: 2.5rem;
      height: 1.5rem;
      border-radius: 1rem;
    `}
  ${({ variant }) =>
    variant === 'lg' &&
    css`
      width: 5rem;
      height: 3rem;
      border-radius: 2rem;
    `}

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    border-radius: 50%;
    background-color: ${palette.white};
    transition: transform 0.2s ease, background-color 0.2s ease;

    ${({ variant }) =>
      variant === 'sm' &&
      css`
        width: 1rem;
        height: 1rem;
      `}
    ${({ variant }) =>
      variant === 'lg' &&
      css`
        width: 2rem;
        height: 2rem;
      `}
  }
`;

export const ToggleText = styled.span<{ variant: 'sm' | 'lg' }>`
  user-select: none;

  ${({ variant }) =>
    variant === 'sm' &&
    css`
      font-size: 1rem;
      line-height: 1rem;
    `}
  ${({ variant }) =>
    variant === 'lg' &&
    css`
      font-size: 2rem;
      line-height: 2rem;
    `}
`;

export const ToggleCheckbox = styled.input<{
  color: NormalColorType;
  variant: 'sm' | 'lg';
}>`
  display: none;

  // Switch Off
  & ~ ${ToggleSwitch} {
    &::after {
      ${({ variant }) =>
        variant === 'sm' &&
        css`
          transform: translateX(0.3rem);
        `}
      ${({ variant }) =>
        variant === 'lg' &&
        css`
          transform: translateX(0.6rem);
        `}
    }
  }

  // Switch On
  &:checked {
    & ~ ${ToggleSwitch} {
      background-color: ${({ color }) => palette[color]};
      &::after {
        ${({ variant }) =>
          variant === 'sm' &&
          css`
            transform: translateX(1.2rem);
          `}
        ${({ variant }) =>
          variant === 'lg' &&
          css`
            transform: translateX(2.4rem);
          `}
      }
    }
  }
`;
