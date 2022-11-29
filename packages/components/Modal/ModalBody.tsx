import React from 'react';
import * as S from './Modal.styles';

export type ModalBodyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ModalBody = ({ children, ...rest }: ModalBodyProps) => {
  return <S.ModalBody {...rest}>{children}</S.ModalBody>;
};
