import React, { useRef, useState } from 'react';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownButton } from './DropdownButton/DropdownButton';
import { DropdownProvider } from './DropdownContext';
import { usePortal, useOnClickOutside } from '../../hooks';
import { createPortal } from 'react-dom';

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
  const el = usePortal('dropdown');
  /** triggerRef은 Context를 타고 DropdownButton으로 전달됨 */
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [trigger, content] = React.Children.toArray(children);
  const [visible, setVisible] = useState<boolean>(false);

  const onChangeVisible = (nextState: boolean) => setVisible(nextState);

  /** trigger(버튼) 외부 클릭 시 visible = false */
  useOnClickOutside(triggerRef, (e) => {
    if (!contentRef.current?.contains(e.target as Node)) {
      onChangeVisible(false);
    }
  });

  if (!el) return null;

  return (
    <DropdownProvider
      value={{
        triggerRef: triggerRef,
        contentRef: contentRef,
        state: visible,
        updateState: onChangeVisible,
      }}
    >
      {/* tirgger button <Dropdown.Button>Actions</Dropdown.Button> */}
      {trigger}
      {/* content menu <Dropdown.Menu>...</Dropdown.Menu> */}
      {createPortal(content, el)}
    </DropdownProvider>
  );
};

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;
