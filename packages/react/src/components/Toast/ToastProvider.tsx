import React, { useSyncExternalStore } from 'react';

import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ToastPosition } from './types';
import { toastStore } from './ToastStore';
import ToastComponent from './ToastComponent';
import { usePortal } from '../../hooks';
import { createPortal } from 'react-dom';

const ToastProvider = () => {
  const toasts = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState,
  );

  const toastPositions = Object.keys(toasts) as ToastPosition[];

  const portal = usePortal('toast');

  const renderToastList = () => {
    return toastPositions.map((position) => {
      const positionToasts = toasts[position];

      return (
        <ToastContainer key={position} position={position}>
          <AnimatePresence initial={false}>
            {positionToasts.map((toast) => (
              <ToastComponent key={toast.id} {...toast} />
            ))}
          </AnimatePresence>
        </ToastContainer>
      );
    });
  };

  if (!portal) return null;

  return createPortal(<>{renderToastList()}</>, portal);
};

const ToastContainer = styled.div<{ position: ToastPosition }>`
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  display: flex;
  flex-direction: column;

  ${({ position }) => {
    const isCenter = position.includes('center');
    const margin = isCenter ? '0 auto' : undefined;

    // env(safe-area-inset-*)은 아이폰 노치 디자인을 위한 것으로, 아이폰이 아닌 다른 기기에서는 0px로 적용됩니다.
    const top = position.includes('top')
      ? 'env(safe-area-inset-top, 0px)'
      : undefined;
    const bottom = position.includes('bottom')
      ? 'env(safe-area-inset-bottom, 0px)'
      : undefined;
    const right = !position.includes('left')
      ? 'env(safe-area-inset-right, 0px)'
      : undefined;
    const left = !position.includes('right')
      ? 'env(safe-area-inset-left, 0px)'
      : undefined;

    return css`
      margin: ${margin};
      top: ${top};
      bottom: ${bottom};
      right: ${right};
      left: ${left};
    `;
  }};
`;

export default ToastProvider;
