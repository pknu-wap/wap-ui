import { palette } from '../../theme/palette';
import { NormalColorType } from '../../theme/types';
import styled from '@emotion/styled';

export const RadioPoint = styled.span`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.gray};
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    background-color: ${palette.white};
    width: 16px;
    height: 16px;
    transform: scale(1);
    border-radius: 50%;
    transition: inherit;
    // transition: 0.2s ease-in-out;
  }
  transition: 0.2s ease-in-out;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  &:hover ${RadioPoint}::after {
    background-color: ${palette.gray};
  }
`;

export const RadioText = styled.span<{
  labelColor: boolean;
  color: NormalColorType;
}>`
  font-size: 1.2rem;
  font-weight: 900;
  user-select: none;
  color: ${({ labelColor, color }) => labelColor && palette[color]};
`;

export const RadioInput = styled.input<{ color: NormalColorType }>`
  display: none;

  // Switch Off
  & ~ ${RadioPoint} {
    background-color: ${palette.gray};
  }

  // Switch On
  &:checked {
    & ~ ${RadioPoint} {
      background-color: ${({ color }) => palette[color]};
      &::after {
        transform: scale(0.5);
      }
    }
  }
`;
