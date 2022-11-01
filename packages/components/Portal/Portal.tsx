import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export interface Props {
  children: React.ReactNode;
  target?: HTMLElement | string;
}

/**
 * 참고
 * @see https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/Portal/Portal.tsx
 *
 * @example
 * <Portal>
 *    <Modal/>
 * </Portal>
 *
 * <Portal target="modal">
 *    <Modal/>
 * </Portal>
 *
 * <Portal target={document.getElementById('modal')}>
 *   <Modal/>
 * </Portal>
 */

export const Portal = ({ children, target }: Props) => {
  const portalContainer = useRef<HTMLElement>();

  if (typeof target === 'string') {
    portalContainer.current = document.getElementById(target) as HTMLElement;
  } else if (target instanceof HTMLElement) {
    portalContainer.current = target;
    document.body.appendChild(portalContainer.current);
  } else {
    if (!portalContainer.current) {
      const div = document.createElement('div');
      div.className = 'portal';
      portalContainer.current = div;
    }
    document.body.appendChild(portalContainer.current);
  }

  useEffect(() => {
    return () => {
      if (target === undefined && portalContainer.current) {
        document.body.removeChild(portalContainer.current);
      }
    };
  }, []);

  return ReactDOM.createPortal(
    children,
    portalContainer.current as HTMLElement,
  );
};
