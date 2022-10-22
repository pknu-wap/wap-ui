import React from 'react';
import * as S from './Tooltip.styles';

export interface Props {
  children: React.ReactNode;
}

export const Tooltip = ({ children }: Props) => {
  return <S.Root>{children}</S.Root>;
};

export default Tooltip;
