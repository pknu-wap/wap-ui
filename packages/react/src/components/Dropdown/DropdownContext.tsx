import React, { createContext, useContext } from 'react';

export interface DropdownProviderProps {
  children: React.ReactNode;
}

export interface DropdownContextValue {
  /** DropdownButton의 ref */
  triggerRef?: React.RefObject<HTMLButtonElement>;
  contentRef?: React.RefObject<HTMLDivElement>;
  updateState?: (nextState: boolean) => void;
  state: boolean;
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
