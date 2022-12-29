import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;

  /**
   * @description DOM의 id 혹은 element를 지정합니다.
   * @default 'portal' - className으로 지정됨
   *
   */
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

export const Portal = ({ children, target }: PortalProps) => {
  const portalContainer = useRef<HTMLElement>();

  if (typeof target === 'string') {
    /**
     * @description target이 string일 경우, 해당 id를 가진 element를 찾는다
     */
    if (document.getElementById(target) as HTMLElement) {
      portalContainer.current = document.getElementById(target) as HTMLElement;
    } else {
      /**
       * 찾지 못할 경우 target을 className으로 갖는 element를 만든다
       */
      if (!portalContainer.current) {
        portalContainer.current = document.createElement('div');
        portalContainer.current.className = target;
        document.body.appendChild(portalContainer.current);
      }
    }
  } else if (target instanceof HTMLElement) {
    /**
     * @description target이 HTMLElement일 경우, 해당 element를 찾는다
     */
    portalContainer.current = target;
    document.body.appendChild(portalContainer.current);
  } else {
    /**
     * @description target이 없을 경우, body에 portal라는 className를 가진 div element를 생성한다
     */
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
  }, [target]);

  return ReactDOM.createPortal(
    children,
    portalContainer.current as HTMLElement,
  );
};
