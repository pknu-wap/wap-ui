import React, { createContext, useContext } from 'react';

export interface AccordionProviderProps {
  children: React.ReactNode;
}

export interface AccoridionContextValue {
  onChange: () => void;
}

const handleChange = () => {
  return;
};

export const AccordionContext = createContext<AccoridionContextValue>({
  onChange: handleChange,
});

const AccordionProvider = ({ children }: AccordionProviderProps) => {
  return (
    <AccordionContext.Provider
      value={{
        onChange: handleChange,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error(
      'useAccordionContext should be used within a AccordionContext.Provider',
    );
  }
  return context;
};

export default AccordionProvider;
