import { palette } from '../../theme/palette';
import { NormalColorType } from '../../theme/types';
import styled from '@emotion/styled';

export const CheckboxText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  user-select: none;
`;

export const CheckboxMask = styled.span`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 33%;
  border: 3px solid ${palette.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.white};
  transition: 0.2s ease-in-out;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 24px;
    height: 24px;
    transform: scale(0.3);
    opacity: 0;
    border-radius: 33%;
    transition: inherit;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  &:hover ${CheckboxMask} {
    background-color: ${palette.gray};
  }
`;

export const CheckIcon = styled.i`
  width: 8px;
  height: 14px;
  display: block;
  position: relative;
  margin-top: -4px;
  transform: rotate(45deg) scale(0.8);
  transition: 0.2s ease;
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 3px;
    border-radius: 5px 0px 0px 5px;
    bottom: 0px;
    background-color: ${palette.white};
  }
  &::after {
    content: '';
    position: absolute;
    height: 0px;
    border-radius: 5px 5px 0px 0px;
    bottom: 0px;
    right: 0px;
    width: 3px;
    background-color: ${palette.white};
  }
`;

export const CheckboxInput = styled.input<{ color: NormalColorType }>`
  display: none;

  // Switch Off
  & ~ ${CheckboxMask} {
    ${CheckIcon} {
      opacity: 0;
    }
  }

  // Switch On
  &:checked {
    & ~ ${CheckboxMask} {
      &::before {
        background-color: ${({ color }) => palette[color]};
        transform: scale(1);
        opacity: 1;
      }
      ${CheckIcon} {
        opacity: 1;
        &::before {
          transition: 0.2s ease;
          width: 8px;
        }
        &::after {
          transition: 0.2s ease 0.2s;
          height: 13px;
        }
      }
    }
  }
`;
