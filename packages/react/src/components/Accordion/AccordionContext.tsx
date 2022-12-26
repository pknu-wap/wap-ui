import React, { createContext, useContext } from 'react';

export interface AccordionProviderProps {
  children: React.ReactNode;
}

export interface AccordionContextValue {
  values: Array<number>;
  updateValues?: (index: number, nextState: boolean) => void;
}

export const AccordionContext = createContext<AccordionContextValue>({
  values: [],
});

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error(
      'useAccordionContext should be used within a AccordionContext.Provider',
    );
  }
  return context;
};
