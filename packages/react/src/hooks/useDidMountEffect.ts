import React, { useRef, useEffect } from 'react';

/**
 * @description
 * useDidMountEffect는 컴포넌트가 마운트 된 후에만 effect를 실행합니다.
 * 즉 마운트 시에는 실행되지 않고, deps가 변경될 때에만 실행됩니다.
 *
 * @example
 * ```tsx
 * const [count, setCount] = useState<number>(0);
 * useDidMountEffect(() => {
 *  console.log('count changed');
 * }, [count]);
 *
 * <button onClick={() => setCount(count + 1)}>count + 1</button>
 * ```
 */
const useDidMountEffect = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) effect();
    else didMount.current = true;
  }, [deps, effect]);
};

export default useDidMountEffect;
