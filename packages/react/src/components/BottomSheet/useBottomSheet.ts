import { useEffect, useRef } from 'react';

import { useBottomSheetContext } from './BottomSheetContext';

const useBottomSheet = () => {
  interface Metrics {
    isDragging: boolean;
    startY: number;
    startHeight: number;
  }

  const metricsRef = useRef<Metrics>({
    isDragging: false,
    startY: 0,
    startHeight: 0,
  });

  const sheetRef = useRef<HTMLDivElement>(null);

  const { onClose } = useBottomSheetContext();

  useEffect(() => {
    const dragStart = (e: MouseEvent | TouchEvent) => {
      const metrics = metricsRef.current;
      metrics.isDragging = true;
      metrics.startY = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY;
      if (sheetRef.current) {
        metrics.startHeight = parseInt(sheetRef.current!.style.height, 10);
        sheetRef.current.style.transition = 'none';
      }
    };

    const dragging = (e: MouseEvent | TouchEvent) => {
      const metrics = metricsRef.current;
      if (!metrics.isDragging) return;

      const delta =
        e instanceof MouseEvent
          ? metrics.startY - e.pageY
          : metrics.startY - e.touches[0].pageY;

      const newHeight =
        metrics.startHeight + (delta / window.innerHeight) * 100;

      updateSheetHeight(newHeight);
    };

    const dragStop = () => {
      const metrics = metricsRef.current;
      if (!metrics.isDragging) return;
      metrics.isDragging = false;

      if (sheetRef.current) {
        sheetRef.current.style.transition = 'height 0.3s ease';
      }
      const sheetHeight = parseInt(sheetRef.current!.style.height, 10);
      if (sheetHeight < 25) onClose();
      else if (sheetHeight > 75) updateSheetHeight(100);
      else updateSheetHeight(50);
    };

    const updateSheetHeight = (height: number) => {
      if (sheetRef.current) sheetRef.current.style.height = `${height}vh`;
    };

    updateSheetHeight(50);

    sheetRef.current?.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);

    sheetRef.current?.addEventListener('touchstart', dragStart);
    document.addEventListener('touchmove', dragging);
    document.addEventListener('touchend', dragStop);

    return () => {
      sheetRef.current?.removeEventListener('mousedown', dragStart);
      document.removeEventListener('mousemove', dragging);
      document.removeEventListener('mouseup', dragStop);

      sheetRef.current?.removeEventListener('touchstart', dragStart);
      document.removeEventListener('touchmove', dragging);
      document.removeEventListener('touchend', dragStop);
    };
  }, []);

  return { sheetRef };
};

export default useBottomSheet;
