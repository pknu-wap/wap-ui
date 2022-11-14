import React, { useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownButton } from './DropdownButton/DropdownButton';
import { DropdownContext } from './DropdownContext';

export interface DropdownProps {
  children: React.ReactNode[];
}

/**
 * @example
 * ```tsx
      <Dropdown>
        <Dropdown.Button color="secondary" shadow>
          Actions
        </Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.MenuItem>Create a Copy</Dropdown.MenuItem>
          <Dropdown.MenuItem>Download</Dropdown.MenuItem>
          <Dropdown.MenuItem>Delete</Dropdown.MenuItem>
          <Dropdown.MenuItem>Mark as Draft</Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
 * ```
 */
export const Dropdown = ({ children }: DropdownProps) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState<boolean>(false);
  const onClose = (nextState: boolean) => {
    setVisible(nextState);
  };
  useOnClickOutside(ref, () => onClose(false));
  return (
    <DropdownContext.Provider value={{ state: visible, updateState: onClose }}>
      <div ref={ref} onClick={() => setVisible(true)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;
