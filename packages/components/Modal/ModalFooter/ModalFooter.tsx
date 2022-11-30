import React from 'react';
import * as S from './ModalFooter.styles';

export type ModalFooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ModalFooter = ({ children, ...rest }: ModalFooterProps) => {
  return <S.ModalFooter {...rest}>{children}</S.ModalFooter>;
};
