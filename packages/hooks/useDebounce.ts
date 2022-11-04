import { useEffect, useState } from 'react';

interface Props<T> {
  value: T;
  delay?: number;
}

/**
 * useDebounce hook은 delay 안에 값 변경 시 값을 유지한다.
 * delay 안에 함수가 한번더 실행되면 앞의 작업을 취소하고 delay이
 * 지날 때까지 다시 호출 되지 않으면 callback을 실행하는 형식으로 되어있다.
 */
const useDebounce = <T>({ value, delay = 500 }: Props<T>): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
