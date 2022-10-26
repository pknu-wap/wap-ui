import React from 'react';
import * as S from './Modal.styles';

export interface Props {
  children: React.ReactNode;
}

export const ModalHeader = ({ children }: Props) => {
  return <S.ModalHeader>{children}</S.ModalHeader>;
};
