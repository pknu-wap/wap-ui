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

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  return context;
};

export default AccordionProvider;
