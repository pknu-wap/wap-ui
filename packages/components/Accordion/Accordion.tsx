import React from 'react';
import * as S from './Accordion.styles';

export interface Props {
  children: React.ReactNode;
}

export const Accordion = ({ children }: Props) => {
  return <S.Root>{children}</S.Root>;
};
