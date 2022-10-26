import React from 'react';
import { NormalColorType } from '../../theme/types';
import { placementType } from './placement';
import * as S from './Tooltip.styles';

interface Props {
  visible: boolean;
  color: NormalColorType;
  placement: placementType;
  children: React.ReactNode;
}

const TooltipContent = ({ visible, color, placement, children }: Props) => {
  return (
    <S.TooltipContent visible={visible} color={color} placement={placement}>
      {children}
    </S.TooltipContent>
  );
};

export default TooltipContent;
