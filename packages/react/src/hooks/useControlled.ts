import { useCallback, useRef, useState } from 'react';

interface UseControlledProps<T = unknown> {
  controlledValue?: T;
  defaultValue?: T;
}

/**
 * @description
 * 컴포넌트의 상태를 제어할 때 사용하는 훅으로 컴포넌트에서 value와 onChange를 prop로 받아서 사용할 때 유용하다.
 * value와 props를 받지 않으면 defaultValue를 사용한다.
 */
const useControlled = <T = unknown>({
  controlledValue,
  defaultValue,
}: UseControlledProps<T>) => {
  const { current: isControlled } = useRef(controlledValue !== undefined);
  const [uncontrolledState, setUncontrolledState] = useState(defaultValue as T);
  const value = isControlled ? controlledValue : uncontrolledState;

  const setValueIfUncontrolled = useCallback(
    (next: React.SetStateAction<T>) =>
      !isControlled && setUncontrolledState(next),
    // isControlled가 변하지 않아야 하므로, isControlled를 의존성 배열에 넣지 않는다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return [value, setValueIfUncontrolled] as [
    T,
    React.Dispatch<React.SetStateAction<T>>,
  ];
};

export default useControlled;
