import React, { useState } from 'react';
import { NormalColorType } from '../../theme/types';
import * as S from './Tooltip.styles';
import TooltipContent from './TooltipContent';

export interface Props {
  children: React.ReactNode;
  content: string;
  color?: NormalColorType;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

/**
 * @todo 이거 참고하기!!
 * @see w3schools https://www.w3schools.com/css/css_tooltip.asp
 * @see nextui https://nextui.org/docs/components/tooltip
 */

export const Tooltip = ({
  children,
  color = 'primary',
  content,
  placement = 'bottom',
}: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleChangeVisible = () => {
    return;
  };
  return (
    <S.TooltipTrigger>
      <TooltipContent visible={visible} color={color} placement={placement}>
        {content}
      </TooltipContent>
      {children}
    </S.TooltipTrigger>
  );
};

export default Tooltip;
