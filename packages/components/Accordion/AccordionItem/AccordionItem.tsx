import React from 'react';
import * as S from './AccordionItem.styles';

export interface Props {
  children: React.ReactNode;
}

export const AccordionItem = ({ children }: Props) => {
  return <S.Root>{children}</S.Root>;
};
