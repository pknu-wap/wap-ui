import { RefObject, useEffect } from 'react';

/**
 * @description
 * ref가 있는 Element의 밖을 click시 handler 작동한다.
 * 대체제로 react-outside-click-handler 라이브러리가 있음
 *
 * @example
 * ```tsx
 * const ref = useRef(null);
 * useOnClickOutside(ref, () => alert('You clicked outside of me!'));
 * <div ref={ref}>Button</div>
 * ```
 */

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
