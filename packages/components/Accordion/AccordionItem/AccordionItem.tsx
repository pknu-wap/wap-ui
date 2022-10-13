import React from 'react';
import * as S from './AccordionItem.styles';

export interface Props {
  label: string;
  children: React.ReactNode;
}

export const AccordionItem = ({ children, label }: Props) => {
  return (
    <S.Root>
      <S.Label>{label}</S.Label>
      <S.Content>{children}</S.Content>
    </S.Root>
  );
};
