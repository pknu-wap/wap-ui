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
  -webkit-backdrop-filter: saturate(200%) blur(2px);
  backdrop-filter: saturate(200%) blur(2px);
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalElement = styled.div`
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

export const ModalHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
`;

export const ModalHeaderTitle = styled.h2`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: ${common.size.md};
  font-weight: bold;
  overflow-wrap: anywhere;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  flex-basis: auto;
  svg {
    cursor: pointer;
    color: ${common.color.gray5};
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

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
