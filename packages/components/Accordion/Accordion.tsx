import React, { useState, useMemo } from 'react';
import * as S from './Accordion.styles';
import { AccordionItem } from './AccordionItem/AccordionItem';
import { AccordionContext, AccordionProviderProps } from './AccordionContext';
import { setChildrenIndex } from '../../utils/setChildrenIndex';

export interface Props extends AccordionProviderProps {
  children: React.ReactNode;
}

export const Accordion = ({ children }: Props) => {
  const [state, setState] = useState<Array<number>>([]);

  const updateValues = (currentIndex: number, nextState: boolean) => {
    return;
  };

  const hasIndexChildren = useMemo(
    () => setChildrenIndex(children, [Accordion.Item]),
    [children],
  );

  return (
    <AccordionContext.Provider value={{ values: state, updateValues }}>
      <S.Root>{hasIndexChildren}</S.Root>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
