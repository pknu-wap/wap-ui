import { NormalColorType } from '../../theme/types';
import { palette } from '../../theme/palette';
import styled from '@emotion/styled';

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ToggleSwitch = styled.span`
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  background-color: ${palette.gray};
  cursor: pointer;
  transition: background-color 0.2s ease;
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    background-color: ${palette.white};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transition: transform 0.2s ease, background-color 0.2s ease;
  }
`;

export const ToggleText = styled.span`
  font-size: 1rem;
  line-height: 1rem;
  user-select: none;
`;

export const ToggleCheckbox = styled.input<{
  color: NormalColorType;
}>`
  display: none;

  // Switch Off
  & ~ ${ToggleSwitch} {
    &::after {
      transform: translateX(0.3rem);
    }
  }

  // Switch On
  &:checked {
    & ~ ${ToggleSwitch} {
      background-color: ${({ color }) => palette[color]};
      &::after {
        transform: translateX(1.2rem);
      }
    }
  }
`;
