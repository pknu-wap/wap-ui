import styled from '@emotion/styled';
import { common } from '../../../theme/common';
import { ButtonColorMap, NormalColorType } from '../../../theme/types';

export const StyledMenuItem = styled.button<{
  color: NormalColorType | 'default';
}>`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 36px;
  padding: 0 12px;
  justify-content: center;
  border-radius: 9px;
  cursor: pointer;
  &:hover {
    background-color: ${({ color }) =>
      color === 'default' ? common.color.gray7 : ButtonColorMap[color].bg};
  }
  transition: background-color 0.2s;
`;

export const StyledMenuItemText = styled.span<{
  color: NormalColorType | 'default';
}>`
  flex: 1 1 0%;
  font-size: 16px;
  text-align: left;
  line-height: 36px;
  height: 36px;
  border-radius: 14px;
  color: ${({ color }) =>
    color === 'default' ? '#fff' : ButtonColorMap[color].hoverSolid};
`;
