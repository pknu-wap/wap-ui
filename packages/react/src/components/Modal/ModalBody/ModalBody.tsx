import React from 'react';
import * as S from './ModalBody.styles';

export type ModalBodyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export const ModalBody = ({ children, ...rest }: ModalBodyProps) => {
  return <S.ModalBody {...rest}>{children}</S.ModalBody>;
};
