import React, { useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownButton } from './DropdownButton/DropdownButton';
import { DropdownContext } from './DropdownContext';
import { Portal } from '../Portal';

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
  /** triggerRef은 Context를 타고 DropdownButton으로 전달됨 */
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [trigger, content] = React.Children.toArray(children);
  const [visible, setVisible] = useState<boolean>(false);

  const onChangeVisible = (nextState: boolean) => setVisible(nextState);

  /** trigger(버튼) 외부 클릭 시 visible = false */
  useOnClickOutside(triggerRef, () => onChangeVisible(false));

  return (
    <DropdownContext.Provider
      value={{ ref: triggerRef, state: visible, updateState: onChangeVisible }}
    >
      {/* tirgger button <Dropdown.Button>Actions</Dropdown.Button> */}
      {trigger}
      {/* content menu <Dropdown.Menu>...</Dropdown.Menu> */}
      <Portal>{content}</Portal>
    </DropdownContext.Provider>
  );
};

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;
