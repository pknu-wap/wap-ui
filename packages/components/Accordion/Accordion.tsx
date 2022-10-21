import React, { useState } from 'react';
import * as S from './Accordion.styles';
import { AccordionItem } from './AccordionItem/AccordionItem';
import { AccordionContext, AccordionProviderProps } from './AccordionContext';

export interface Props extends AccordionProviderProps {
  children: React.ReactNode;
}

export const Accordion = ({ children }: Props) => {
  const [state, setState] = useState<Array<number>>([]);

  const updateValues = (currentIndex: number, nextState: boolean) => {
    return;
  };

  return (
    <AccordionContext.Provider value={{ values: state, updateValues }}>
      <S.Root>{children}</S.Root>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
