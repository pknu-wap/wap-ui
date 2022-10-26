import React from 'react';
import * as S from './Modal.styles';

export interface Props {
  children: React.ReactNode;
}

export const ModalBody = ({ children }: Props) => {
  return <S.ModalBody>{children}</S.ModalBody>;
};
