import React from 'react';
import * as S from './Accordion.styles';
import { AccordionItem } from './AccordionItem/AccordionItem';
import AccordionProvider, { AccoridionContextValue } from './AccordionProvider';

export interface Props extends AccoridionContextValue {
  children: React.ReactNode;
}

export const Accordion = ({ children }: Props) => {
  return (
    <AccordionProvider>
      <S.Root>{children}</S.Root>
    </AccordionProvider>
  );
};

Accordion.Item = AccordionItem;
