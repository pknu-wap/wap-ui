import { useEffect, useRef } from 'react';

/**
 * @description useTimeout은 지정된 시간이 지난 후 콜백을 실행하는 훅입니다.
 * @example
 * ```tsx
 * useTimeout(() => {
 *  console.log('hello world');
 * }, 1000);
 * ```
 */
const useTimeout = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void | null>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (!savedCallback.current) return;
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setTimeout(tick, delay);

      return () => clearTimeout(id);
    }
  }, [delay]);
};

export default useTimeout;
