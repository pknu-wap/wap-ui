import * as S from './Spacer.styles';
import React from 'react';

export interface SpacerProps {
  x?: number;
  y?: number;
}

export const Spacer = ({ x = 1, y = 1 }: SpacerProps) => {
  return <S.Root x={x} y={y} />;
};
