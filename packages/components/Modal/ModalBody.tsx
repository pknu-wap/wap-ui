import React from 'react';
import * as S from './Modal.styles';

export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ModalBody = ({ children, ...rest }: Props) => {
  return <S.ModalBody {...rest}>{children}</S.ModalBody>;
};
