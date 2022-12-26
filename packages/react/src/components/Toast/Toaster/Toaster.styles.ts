import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100vw;
  pointer-events: none;
`;

export const ToastList = styled.div<{ isBottom: boolean }>`
  display: flex;
  gap: 0.5rem;
  ${({ isBottom }) =>
    isBottom === true &&
    css`
      flex-direction: column-reverse;
    `};
  ${({ isBottom }) =>
    isBottom === false &&
    css`
      flex-direction: column;
    `};
`;
