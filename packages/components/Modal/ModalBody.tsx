import React from 'react';
import * as S from './Modal.styles';

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

export const ModalBody = ({ children, ...rest }: Props) => {
  return <S.ModalBody {...rest}>{children}</S.ModalBody>;
};
