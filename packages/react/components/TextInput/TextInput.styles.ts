import { NormalColorType } from '../../theme/types';
import { palette } from '../../theme/palette';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { InputVariantType } from './TextInput';

export const Root = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
  margin-top: 1rem;
`;

export const Label = styled.label<{
  color: NormalColorType;
}>`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0 0.25rem;
  background-color: #fff;
  color: #80868b;
  font-size: 1rem;
  transition: 0.25s;
`;

export const Underline = styled.div<{ color: NormalColorType }>`
  position: absolute;
  bottom: 0px;
  height: 2px;
  width: 100%;
  z-index: 2;
  &::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: ${({ color }) => color && palette[color]};
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }
`;

export const Input = styled.input<{
  color: NormalColorType;
  variant: InputVariantType;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  padding: 1rem;
  background: none;
  z-index: 1;
  transition: 0.25s;
  &:focus {
    & ~ ${Label} {
      top: -0.5rem;
      left: 0.8rem;
      color: ${({ color }) => palette[color]};
      font-size: 1rem;
      font-weight: 500;
      z-index: 1;
    }
  }
  &:not(:placeholder-shown):not(:focus) ~ ${Label} {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 1rem;
    font-weight: 500;
    z-index: 1;
  }
  ${({ variant, color }) =>
    variant === 'bordered' &&
    css`
      border: 2px solid #dadce0;
      border-radius: 1rem;
      &:focus {
        border: 2px solid ${palette[color]};
      }
    `}
  ${({ variant }) =>
    variant === 'underlined' &&
    css`
      border-bottom: 2px solid #dadce0;
      &:focus {
        & ~ ${Underline}::before {
          transform: scaleX(1);
        }
        & ~ ${Label} {
          left: 0;
        }
      }
      &:not(:placeholder-shown):not(:focus) ~ ${Underline}::before {
        transform: scaleX(0);
      }
      &:not(:placeholder-shown):not(:focus) ~ ${Label} {
        left: 0;
      }
    `}
`;
