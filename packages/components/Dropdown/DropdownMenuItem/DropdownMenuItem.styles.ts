import styled from '@emotion/styled';
import { common } from '../../../theme/common';

export const StyledMenuItem = styled.button`
  display: flex;
  flex-direction: column;
  width: 234px;
  height: 36px;
  padding: 0 12px;
  justify-content: center;
  border-radius: 9px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${common.color.gray7};
  }
`;

export const StyledMenuItemText = styled.span`
  flex: 1 1 0%;
  font-size: 16px;
  text-align: left;
  line-height: 36px;
  height: 36px;
  border-radius: 14px;
`;
