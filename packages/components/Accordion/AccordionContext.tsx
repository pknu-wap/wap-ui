import React, { createContext, useContext } from 'react';

export interface AccordionProviderProps {
  children: React.ReactNode;
}

export interface AccoridionContextValue {
  values: Array<number>;
  /** (index: number, nextState: boolean) => void으로 하면 index값이 있을 수도 없을 수도 있어서 애매 */
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
