import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CardVariantType } from './Card';

export const StyledCard = styled.div<{
  variant: CardVariantType;
  isPressable: boolean;
}>`
  padding: 20px 12px;
  border-radius: 14px;
  color: #000;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ variant }) =>
    variant === 'shadow' &&
    css`
      box-shadow: 0 12px 20px 6px rgba(0, 0, 0, 0.1);
    `};
  ${({ variant }) =>
    variant === 'bordered' &&
    css`
      border: 1px solid #dfe3e6;
    `};
  ${({ variant }) =>
    variant === 'flat' &&
    css`
      background-color: #dfe3e6;
    `};
  ${({ isPressable }) =>
    isPressable &&
    css`
      cursor: pointer;
    `}
`;
