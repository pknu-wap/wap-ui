import React from 'react';
import { NormalColorType } from '../../theme/types';
import { placementType } from './placement';
import * as S from './Tooltip.styles';

interface Props {
  color: NormalColorType;
  placement: placementType;
  children: React.ReactNode;
}

const TooltipContent = ({ color, placement, children }: Props) => {
  return (
    <S.TooltipContent color={color} placement={placement}>
      {children}
    </S.TooltipContent>
  );
};

export default TooltipContent;
