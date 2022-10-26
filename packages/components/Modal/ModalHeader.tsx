import React from 'react';
import * as S from './Modal.styles';
import { ModalCloseButton } from './ModalCloseButton';

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  onClose: () => void;
}

export const ModalHeader = ({ children, onClose, ...rest }: Props) => {
  return (
    <S.ModalHeader>
      <div />
      <S.ModalHeaderTitle {...rest}>{children}</S.ModalHeaderTitle>
      <ModalCloseButton onClose={onClose} />
    </S.ModalHeader>
  );
};
