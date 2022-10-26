import styled from '@emotion/styled';
import { NormalColorType } from '../../theme/types';

export const TooltipTrigger = styled.div``;

export const TooltipContent = styled.div<{
  visible: boolean;
  color: NormalColorType;
  placement: 'top' | 'bottom' | 'left' | 'right';
}>``;
