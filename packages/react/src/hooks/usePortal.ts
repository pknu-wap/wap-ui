import { useEffect, useState } from 'react';

const createElement = (id: string): HTMLElement => {
  const el = document.createElement('div');
  el.setAttribute('id', id);
  return el;
};

const isBrowser = Boolean(
  typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement,
);

/**
@description
usePortal은 html에 div 요소를 만들고 반환하는 훅입니다.
이는 모달, 드롭다운 및 툴팁을 만드는 데 유용합니다.
- index.html에 div 요소를 추가하지 않아도 됩니다.
@example 
const Modal = () => {
  const el = usePortal('modal');
  if (!el) return null;
  return createPortal(<Modal />, el);
};
*/
const usePortal = (selectId: string): HTMLElement | null => {
  const id = `${selectId}`;

  const [elSnapshot, setElSnapshot] = useState<HTMLElement | null>(
    isBrowser ? createElement(id) : null,
  );

  useEffect(() => {
    const parentElement = document.body;
    const hasElement = parentElement?.querySelector<HTMLElement>(`#${id}`);
    const el = hasElement ?? createElement(id);

    if (!hasElement) {
      parentElement.appendChild(el);
    }
    setElSnapshot(el);

    return () => {
      parentElement.removeChild(el);
    };
    // Id가 변경될 일이 없으므로 빈 배열을 넣어준다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return elSnapshot;
};

export default usePortal;
