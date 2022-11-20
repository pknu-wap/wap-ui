import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { common } from '../../../../theme/common';

const DotsKeyframes = keyframes`
 0%{
  opacity: 1;
 }
 50%,100%{
  opacity: 0.3;
 }
`;

export const Container = styled.div<{ size: 'sm' | 'md' | 'lg' }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${({ size }) =>
    size === 'sm' &&
    css`
      width: 2.5rem;
      div {
        width: 0.5rem;
        height: 0.5rem;
      }
    `}
  ${({ size }) =>
    size === 'md' &&
    css`
      width: 3.5rem;
      div {
        width: 0.7rem;
        height: 0.7rem;
      }
    `}
  ${({ size }) =>
    size === 'lg' &&
    css`
      width: 5rem;
      div {
        width: 1rem;
        height: 1rem;
      }
    `}
`;

export const Dot = styled.div<{
  delay: number;

  color: 'primary' | 'secondary';
}>`
  border-radius: 50%;
  ${({ color }) =>
    color === 'primary' &&
    css`
      background-color: ${common.color.green6};
    `};
  ${({ color }) =>
    color === 'secondary' &&
    css`
      background-color: ${common.color.white};
    `};
  animation: ${DotsKeyframes} 1s infinite linear alternate;
  animation-delay: ${({ delay }) => delay + 's'};
`;
