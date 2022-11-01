import { useRef, useEffect } from 'react';

/**
 * @todo 나중에 타입 추가하기
 * useDidMountEffect는 컴포넌트가 마운트 된 후에만 effect를 실행합니다.
 * 즉 마운트 시에는 실행되지 않고, deps가 변경될 때에만 실행됩니다.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDidMountEffect = (func: any, deps: any) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
