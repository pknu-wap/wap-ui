import React, { createContext, useContext } from 'react';

export interface DropdownProviderProps {
  children: React.ReactNode;
}

export interface DropdownContextValue {
  ref?: React.RefObject<HTMLButtonElement>;
  state: boolean;
  updateState?: (nextState: boolean) => void;
}

export const DropdownContext = createContext<DropdownContextValue>({
  state: false,
});

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error(
      'useDropdownContext should be used within a DropdownContext.Provider',
    );
  }
  return context;
};
