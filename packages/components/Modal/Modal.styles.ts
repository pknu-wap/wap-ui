import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { common } from '../../theme/common';
import { ModalProps } from './Modal';

export const ModalAnimationProvider = styled.div<Pick<ModalProps, 'isOpen'>>`
  ${({ isOpen }) => css`
    visibility: ${isOpen ? 'visible' : 'hidden'};
    animation: ${isOpen ? fadeIn : fadeOut} 0.1s;
    transition: visibility 0.1s;
  `}
`;

export const Overlay = styled.div<{ blur: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  ${({ blur }) =>
    blur === true &&
    css`
      -webkit-backdrop-filter: saturate(200%) blur(2px);
      backdrop-filter: saturate(200%) blur(2px);
      background-color: rgba(0, 0, 0, 0.1);
    `}
  ${({ blur }) =>
    blur === false &&
    css`
      background-color: ${common.color.black};
      opacity: 0.5;
    `}
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.2rem;
  padding: 1rem 2rem;
  min-width: 30%;
  max-width: 80%;
  background-color: ${common.color.white};
`;

const fadeIn = keyframes`
  from {
  opacity: 0;
}
  to {
  opacity: 1;
}
`;

const fadeOut = keyframes`
  from {
  opacity: 1;
}
  to {
  opacity: 0; 
}
`;
