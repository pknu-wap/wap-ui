import React from 'react';
import * as S from './Modal.styles';

export interface Props {
  children: React.ReactNode;
}

export const ModalFooter = ({ children }: Props) => {
  return <S.ModalFooter>{children}</S.ModalFooter>;
};
