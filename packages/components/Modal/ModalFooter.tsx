import React from 'react';
import * as S from './Modal.styles';

export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ModalFooter = ({ children, ...rest }: Props) => {
  return <S.ModalFooter {...rest}>{children}</S.ModalFooter>;
};
