import React, { createContext, useContext } from 'react';

export interface AccordionProviderProps {
  children: React.ReactNode;
}

export interface AccoridionContextValue {
  values: Array<number>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  updateValues?: Function;
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
