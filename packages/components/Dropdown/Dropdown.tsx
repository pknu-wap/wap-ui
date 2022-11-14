import React, { useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export interface DropdownProps {
  children: React.ReactNode;
}

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
