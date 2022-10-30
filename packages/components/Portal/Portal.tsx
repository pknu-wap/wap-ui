import { useState } from '@storybook/addons';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export interface Props extends React.ReactPortal {
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
 * @example
 * <Portal target="modal">
 *    <Modal/>
 * </Portal>
 *
 * @example
 * <Portal target={document.getElementById('modal')}>
 *   <Modal/>
 * </Portal>
 */

export const Portal = ({ children, target }: Props) => {
  const [mounted, setMounted] = useState(false);
  /**
   * @see https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-isomorphic-effect/use-isomorphic-effect.ts
   *
   * @description useLayoutEffect는 브라우저가 DOM을 렌더링한 후에 동기적으로 실행되는데, 이는 DOM이 렌더링되기 전에 실행되는 useEffect와는 다르다.
   * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
   */
  const useIsomorphicEffect =
    typeof document !== 'undefined' ? useLayoutEffect : useEffect;
  const elementRef = useRef<HTMLElement>();

  useIsomorphicEffect(() => {
    setMounted(true);
    elementRef.current = !target
      ? document.createElement('div')
      : typeof target === 'string'
      ? (document.getElementById(target) as HTMLElement)
      : target;

    if (!target) {
      document.body.appendChild(elementRef.current);
    }

    return () => {
      !target && document.body.removeChild(elementRef.current as HTMLElement);
    };
  }, [target]);

  if (!mounted) {
    return null;
  }

  return ReactDOM.createPortal(children, elementRef.current as HTMLElement);
};
