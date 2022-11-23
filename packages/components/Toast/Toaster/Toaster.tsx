import React from 'react';
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
  position: ToastPosition;
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

export const Toaster = ({ position }: ToasterProps) => {
  const positionStyles = getPositionStyles(position);

  return (
    <>
      <Portal>
        <S.ToastWrapper style={positionStyles}></S.ToastWrapper>
      </Portal>
    </>
  );
};
