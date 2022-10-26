import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { common } from '../../theme/common';
import { Props } from './Modal';

export const ModalAnimationProvider = styled.div<Pick<Props, 'isOpen'>>`
  ${({ isOpen }) => css`
    visibility: ${isOpen ? 'visible' : 'hidden'};
    animation: ${isOpen ? fadeIn : fadeOut} 0.1s;
    transition: visibility 0.1s;
  `}
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  backdrop-filter: saturate(200%) blur(2px);
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalElement = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.2rem;
  padding: 2rem 2rem;
  min-width: 30%;
  background-color: ${common.color.white};
`;

export const ModalHeader = styled.header``;

export const ModalBody = styled.div``;

export const ModalFooter = styled.footer``;

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
