import React from 'react';
import * as S from './Modal.styles';

export interface Props {
  isOpen?: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen = false, onClose }: Props) => {
  return <>{isOpen && <S.Overlay onClick={onClose} />}</>;
};
