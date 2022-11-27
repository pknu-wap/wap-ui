import React, { useEffect, useState } from 'react';
import { Portal } from '../../Portal';
import { ToastBar } from '../ToastBar/ToastBar';
import { getToastList } from '../useToast';
import * as S from './Toaster.styles';

type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToasterProps {
  /**
   * toast message의 위치
   * @default 'bottom-center'
   */
  position?: ToastPosition;
}

export interface Toast {
  id: number;
  message: string;
}

/**
 * toast message의 위치에 따른 style을 반환하는 함수
 */
const getPositionStyles = (position: ToastPosition): React.CSSProperties => {
  const top = position.includes('top');
  const vertical: React.CSSProperties = top ? { top: 0 } : { bottom: 0 };
  const horizontal: React.CSSProperties = position.includes('center')
    ? { justifyContent: 'center' }
    : position.includes('right')
    ? {
        justifyContent: 'flex-end',
      }
    : {};

  return {
    left: 0,
    right: 0,
    display: 'flex',
    position: 'absolute',
    ...vertical,
    ...horizontal,
  };
};

/**
 * @example
 * ```jsx
 * <Toaster/>
 * <Toaster position="top-center">
 * ```
 */

export const Toaster = ({ position = 'bottom-center' }: ToasterProps) => {
  const positionStyles = getPositionStyles(position);
  const [isBottom, setIsBottom] = useState(true);
  const toastList = getToastList();

  useEffect(() => {
    if (
      position === 'top-left' ||
      position === 'top-center' ||
      position === 'top-right'
    ) {
      setIsBottom(false);
    } else {
      setIsBottom(true);
    }
  }, [position, setIsBottom]);

  return (
    <>
      <Portal target="toast">
        <S.Wrapper style={positionStyles}>
          <S.ToastList isBottom={isBottom}>
            {toastList.map((toast) => (
              <ToastBar key={toast.id}>{toast.message}</ToastBar>
            ))}
          </S.ToastList>
        </S.Wrapper>
      </Portal>
    </>
  );
};
