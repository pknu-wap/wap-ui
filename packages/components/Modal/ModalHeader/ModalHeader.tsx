import React from 'react';
import * as S from './ModalHeader.styles';
import { ModalCloseButton } from './ModalCloseButton';

export interface ModalHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  onClose: () => void;
}

export const ModalHeader = ({
  children,
  onClose,
  ...rest
}: ModalHeaderProps) => {
  return (
    <S.ModalHeader>
      <S.ModalHeaderTitle {...rest}>{children}</S.ModalHeaderTitle>
      <ModalCloseButton onClose={onClose} />
    </S.ModalHeader>
  );
};
