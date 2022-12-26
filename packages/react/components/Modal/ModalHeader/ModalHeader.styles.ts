import styled from '@emotion/styled';
import { common } from '../../../theme/common';

export const ModalHeader = styled.header`
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ModalHeaderTitle = styled.h2`
  display: flex;
  width: 80%;
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
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background: none;
  flex-basis: auto;
  svg {
    cursor: pointer;
    color: ${common.color.gray5};
  }
`;
