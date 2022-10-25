import React from 'react';
import { NormalColorType } from '../../theme/types';
import * as S from './Tooltip.styles';

export interface Props {
  children: React.ReactNode;
  content: string;
  color: NormalColorType;
  placement: 'top' | 'bottom' | 'left' | 'right';
}

/**
 * @todo 이거 참고하기!!
 * @see w3schools https://www.w3schools.com/css/css_tooltip.asp
 * @see nextui https://nextui.org/docs/components/tooltip
 */

export const Tooltip = ({ children }: Props) => {
  return <S.Root>{children}</S.Root>;
};

export default Tooltip;
