import { useEffect, useRef } from 'react';

interface useIntersectionObserverProps {
  onIntersect: () => void;
}
/**
 * IntersectionObserver(교차 관찰자 API)는 타겟 엘레멘트와
 * 타겟의 부모 혹은 상위 엘레멘트의 뷰포트가 교차되는 부분을 비동기적으로 관찰하는 API이다.
 * 
 * @example
 * const loadMore = () => {
    if (hasNextPage) fetchNextPage();
  };
  const targetElement = useIntersectionObserver({ onIntersect: loadMore });
 */
const useIntersectionObserver = ({
  onIntersect,
}: useIntersectionObserverProps) => {
  const targetElement = useRef(null);

  useEffect(() => {
    if (!targetElement || !targetElement.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && onIntersect());
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(targetElement && targetElement.current);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect]);

  return targetElement;
};

export default useIntersectionObserver;
