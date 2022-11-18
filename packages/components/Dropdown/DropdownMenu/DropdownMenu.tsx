import React from 'react';
import { useDropdownContext } from '../DropdownContext';
import * as S from './DropdownMenu.styles';
import { AnimatePresence } from 'framer-motion';

export interface DropdownMenuProps {
  children: React.ReactNode[] | React.ReactNode;
}

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const { state } = useDropdownContext();
  return (
    <AnimatePresence>
      {state && (
        <S.StyledMenu
          initial={{ scale: 0.9, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', bounce: 0.33, duration: 0.3 }}
        >
          {children}
        </S.StyledMenu>
      )}
    </AnimatePresence>
  );
};
