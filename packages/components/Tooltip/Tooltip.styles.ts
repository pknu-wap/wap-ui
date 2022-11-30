import styled from '@emotion/styled';
import { palette } from '../../theme/palette';
import { NormalColorType } from '../../theme/types';
import { placementMap, placementType } from './placement';

export const TooltipContent = styled.div<{
  color: NormalColorType;
  placement: placementType;
}>`
  position: relative;
  z-index: 10000;
  width: 420px;
  background-color: black;
  color: #fff;
  background: ${({ color }) => palette[color]};
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  ${({ placement }) => placementMap[placement]};
`;
