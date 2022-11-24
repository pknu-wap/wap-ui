import React from 'react';
import * as S from './ToastBar.styles';

interface ToastBarProps {
  children: React.ReactNode;
}

export const ToastBar = ({ children }: ToastBarProps) => {
  return (
    <S.ToastBarBase>
      <S.Message>{children}</S.Message>
    </S.ToastBarBase>
  );
};
