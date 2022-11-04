import { useEffect, useRef, useState } from 'react';

interface Props<T> {
  value: T;
  delay?: number;
}

/**
 * useThrottle hook은 delay마다 값의 변경이 이루어 진다.
 * delay 뒤에 callback이 실행되고 delay이 지나기전 다시 호출될 경우 아직
 * delay이 지나지 않았기 때문에 callback을 실행하지 않고 함수를 종료시키는 형태로 되어있다.
 */
const useTrottle = <T>({ value, delay = 500 }: Props<T>) => {
  const [throttleValue, setTrottleValue] = useState<T>(value);
  const throttling = useRef(false);
  useEffect(() => {
    if (throttling.current === false) {
      setTrottleValue(value);
      throttling.current = true;
    }
    setTimeout(() => {
      if (throttling?.current) throttling.current = false;
    }, delay);
  }, [value, delay]);

  return throttleValue;
};

export default useTrottle;
