import React, { useEffect, useState } from 'react';
import { Portal } from '../../Portal';
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
            <span>test1</span>
            <span>test2</span>
            <span>test3</span>
            <span>test4</span>
            <span>test5</span>
            <span>test6</span>
            <span>test7</span>
          </S.ToastList>
        </S.Wrapper>
      </Portal>
    </>
  );
};
