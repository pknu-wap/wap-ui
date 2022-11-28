import React from 'react';
import { ErrorIcon, SuccessIcon } from '../ToastIcon/ToastIcon';
import * as S from './ToastBar.styles';

interface ToastBarProps {
  children: React.ReactNode;
  type?: 'success' | 'error';
}

export const ToastBar = ({ children, type }: ToastBarProps) => {
  console.log(type);
  return (
    <S.ToastBarBase>
      {type === 'success' && <SuccessIcon />}
      {type === 'error' && <ErrorIcon />}
      <S.Message>{children}</S.Message>
    </S.ToastBarBase>
  );
};
