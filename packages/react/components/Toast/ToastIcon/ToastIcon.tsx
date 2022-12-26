import React from 'react';
import * as S from './ToastIcon.styles';

export const SuccessIcon = () => {
  return (
    <S.ToastIconContainer>
      <S.SuccessCircle />
      <S.SuccessStem />
      <S.SuccessKick />
    </S.ToastIconContainer>
  );
};

export const ErrorIcon = () => {
  return (
    <S.ToastIconContainer>
      <S.ErrorCircle />
    </S.ToastIconContainer>
  );
};
