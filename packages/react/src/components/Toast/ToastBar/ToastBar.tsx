import type { Variants } from 'framer-motion';
import React from 'react';
import { ErrorIcon, SuccessIcon } from '../ToastIcon/ToastIcon';
import * as S from './ToastBar.styles';

interface ToastBarProps {
  children: React.ReactNode;
  type?: 'success' | 'error';
}

export const ToastBar = ({ children, type }: ToastBarProps) => {
  const toastVariants: Variants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <S.ToastBarBase
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {type === 'success' && <SuccessIcon />}
      {type === 'error' && <ErrorIcon />}
      <S.Message>{children}</S.Message>
    </S.ToastBarBase>
  );
};
