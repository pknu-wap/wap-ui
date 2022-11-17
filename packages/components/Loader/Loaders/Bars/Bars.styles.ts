import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { common } from '../../../../theme/common';

const BarKeyframes = keyframes`
  0% {
    transform: none;
  }
  25% {
    transform: scaleY(2);
  }
  50%,
  100% {
    transform: none;
  }
`;

export const Container = styled.div<{ size: 'sm' | 'md' | 'lg' }>`
  display: flex;
  justify-content: space-around;
  ${({ size }) =>
    size === 'sm'
      ? css`
          height: 1.375rem;
        `
      : size === 'md'
      ? css`
          width: 4.5rem;
          height: 2.25rem;
          div {
            width: 0.6rem;
            height: 100%;
          }
        `
      : css`
          height: 2.75rem;
        `};
`;

export const Bar = styled.div<{
  color: 'primary' | 'secondary';
  delay: number;
}>`
  animation: ${BarKeyframes} 1s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay + 's'};
  ${({ color }) =>
    color === 'primary'
      ? css`
          background-color: ${common.color.green6};
        `
      : css``}
`;
