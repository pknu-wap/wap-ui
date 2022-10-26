import React from 'react';
import { NormalColorType } from '../../theme/types';
import * as S from './Tooltip.styles';

interface Props {
  visible: boolean;
  color: NormalColorType;
  placement: 'top' | 'bottom' | 'left' | 'right';
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
