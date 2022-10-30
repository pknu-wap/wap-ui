import React from 'react';
import * as S from './Modal.styles';

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
}

export const ModalFooter = ({ children, ...rest }: Props) => {
  return <S.ModalFooter {...rest}>{children}</S.ModalFooter>;
};
