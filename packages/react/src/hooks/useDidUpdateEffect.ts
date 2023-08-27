import React, { useRef, useEffect } from 'react';

/**
 * @description
 * useDidUpdateEffect는 컴포넌트가 마운트 된 후에만 effect를 실행합니다.
 * 즉 마운트 시에는 실행되지 않고, deps가 변경될 때에만 실행됩니다.
 *
 * @example
 * ```tsx
 * const [count, setCount] = useState<number>(0);
 * useDidUpdateEffect(() => {
 *  console.log('count changed');
 * }, [count]);
 *
 * <button onClick={() => setCount(count + 1)}>count + 1</button>
 * ```
 */

const useDidUpdateEffect = (
  callback: () => void,
  deps: React.DependencyList,
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) callback();
    else didMount.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidUpdateEffect;
