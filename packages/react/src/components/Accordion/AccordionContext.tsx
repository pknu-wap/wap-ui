import React from 'react';
import { createReactContext } from '../../hooks';

export interface AccordionProviderProps {
  children: React.ReactNode;
}

export interface AccordionContextValue {
  values: Array<number>;
  updateValues?: (index: number, nextState: boolean) => void;
}

const [AccordionProvider, useAccordionContext] =
  createReactContext<AccordionContextValue>({
    name: 'AccordionContext',
    errorMessage: 'useAccordionContext must be used within a AccordionProvider',
  });

export { AccordionProvider, useAccordionContext };
