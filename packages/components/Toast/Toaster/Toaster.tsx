import React, { useEffect, useState } from 'react';
import { Portal } from '../../Portal';
import { ToastBar } from '../ToastBar/ToastBar';
import * as S from './Toaster.styles';

type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToasterProps {
  position?: ToastPosition;
}

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
      <Portal>
        <S.Wrapper style={positionStyles}>
          <S.ToastList isBottom={isBottom}>
            <ToastBar>test1</ToastBar>
            <ToastBar>test2</ToastBar>
            <ToastBar>test3</ToastBar>
            <ToastBar>test4</ToastBar>
            <ToastBar>test5</ToastBar>
            <ToastBar>test6</ToastBar>
            <ToastBar>test7</ToastBar>
          </S.ToastList>
        </S.Wrapper>
      </Portal>
    </>
  );
};
