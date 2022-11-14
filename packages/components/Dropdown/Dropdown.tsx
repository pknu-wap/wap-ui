import React, { useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownButton } from './DropdownButton/DropdownButton';

export interface DropdownProps {
  children: React.ReactNode[];
}

/**
 * @example
 * ```tsx
      <Dropdown>
        <Dropdown.Button>Actions</Dropdown.Button>
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
  const onClose = () => {
    setVisible(false);
  };
  useOnClickOutside(ref, onClose);
  return (
    <div ref={ref} onClick={() => setVisible(true)}>
      {children}
      {visible ? 'visible' : 'hidden'}
    </div>
  );
};

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;
