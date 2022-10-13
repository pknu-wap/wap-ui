import React from 'react';
import * as S from './Accordion.styles';
import { AccordionItem } from './AccordionItem/AccordionItem';

export interface Props {
  children: React.ReactNode;
}

export const Accordion = ({ children }: Props) => {
  return <S.Root>{children}</S.Root>;
};

Accordion.Item = AccordionItem;
