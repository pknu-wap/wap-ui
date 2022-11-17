import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { common } from '../../../../theme/common';

const containerKeyframes = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

const spinningDotKeyframes = keyframes`
    80%, 100% {
       transform: rotate(360deg); 
  } 
`;
const beforeKeyframes = keyframes`
 50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
`;

export const Container = styled.div<{ size: 'sm' | 'md' | 'lg' }>`
  ${({ size }) =>
    size === 'sm'
      ? css`
          width: 1.375rem;
          height: 1.375rem;
        `
      : size === 'md'
      ? css`
          width: 2.25rem;
          height: 2.25rem;
        `
      : css`
          width: 2.75rem;
          height: 2.75rem;
        `}
  position: relative;
  animation: ${containerKeyframes} 2.5s infinite linear both;
`;

export const SpinningDot = styled.div<{
  delay: number;
  color: 'primary' | 'secondary';
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  animation: ${spinningDotKeyframes} 2s infinite ease-in-out both;
  animation-delay: ${({ delay }) => -1.2 + delay + 's'};
  ::before {
    content: ' ';
    display: block;
    width: 25%;
    height: 25%;
    background-color: ${({ color }) =>
      color === 'primary' ? common.color.green6 : common.color.white};
    border-radius: 50%;
    animation: ${beforeKeyframes} 2s infinite ease-in-out both;
    animation-delay: ${({ delay }) => -1.2 + delay + 's'};
  }
`;
