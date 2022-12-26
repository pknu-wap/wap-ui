import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { palette } from '../../../../theme/palette';
import { NormalColorType } from '../../../../theme';

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
  color: NormalColorType;
}>`
  border-radius: 50%;
  background-color: ${({ color }) => palette[color]};
  animation: ${DotsKeyframes} 1s infinite linear alternate;
  animation-delay: ${({ delay }) => delay + 's'};
`;
