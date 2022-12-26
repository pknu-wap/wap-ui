import React from 'react';
import { NormalColorType } from '../../../../theme';
import * as S from './Spinner.styles';

interface SpinnerProps {
  size: 'sm' | 'md' | 'lg';
  color: NormalColorType;
}

export const Spinner = ({ size, color }: SpinnerProps) => {
  return (
    <S.Container size={size}>
      {[0.1, 0.2, 0.3, 0.4, 0.5, 0.6].map((number) => (
        <S.SpinningDot color={color} key={number} delay={number} />
      ))}
    </S.Container>
  );
};
