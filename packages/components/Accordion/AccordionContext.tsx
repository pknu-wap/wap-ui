import React, { createContext, useContext } from 'react';

export interface AccordionProviderProps {
  children: React.ReactNode;
}

export interface AccoridionContextValue {
  values: Array<number>;
  updateValues?: (currentIndex: number, nextState: boolean) => void;
}

export const AccordionContext = createContext<AccoridionContextValue>({
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
