import React, { useEffect, useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';

import BottomSheetWrapper from './BottomSheetWrapper';
import BottomSheetOverlay from './BottomSheetOverlay';
import BottomSheetHeader from './BottomSheetHeader';
import { BottomSheetConfig, BottomSheetProvider } from './BottomSheetContext';
import BottomSheetContent from './BottomSheetContent';
import { createPortal } from 'react-dom';
import { usePortal } from '../../hooks';

export interface BottomSheetProps extends BottomSheetConfig {
  children: React.ReactNode;
}

const BottomSheet = ({ children, isOpen, onClose }: BottomSheetProps) => {
  const portal = usePortal('bottom-sheet');

  const bottomSheetConfig: BottomSheetConfig = useMemo(
    () => ({
      isOpen,
      onClose,
    }),
    [isOpen, onClose],
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!portal) return null;

  return createPortal(
    <BottomSheetProvider value={bottomSheetConfig}>
      <AnimatePresence>
        {isOpen && (
          <>
            <BottomSheetOverlay />
            <BottomSheetWrapper>{children}</BottomSheetWrapper>
          </>
        )}
      </AnimatePresence>
    </BottomSheetProvider>,
    portal,
  );
};

type BottomSheetComponent = typeof BottomSheet & {
  Header: typeof BottomSheetHeader;
  Content: typeof BottomSheetContent;
};

export default BottomSheet as BottomSheetComponent;
