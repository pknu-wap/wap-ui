import React, { createContext, useContext } from 'react';
import { createReactContext } from '../../hooks';

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

const [DropdownProvider, useDropdownContext] =
  createReactContext<DropdownContextValue>({
    name: 'DropdownContext',
    errorMessage: 'useDropdownContext must be used within a DropdownProvider',
  });

export { DropdownProvider, useDropdownContext };
