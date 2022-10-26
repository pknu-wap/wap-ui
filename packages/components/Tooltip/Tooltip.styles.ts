import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { palette } from '../../theme/palette';
import { NormalColorType } from '../../theme/types';
import { placementMap, placementType } from './placement';

export const TooltipTrigger = styled.div`
  width: 'max-content';
  display: 'inherit';
`;
export const TooltipContent = styled.div<{
  visible: boolean;
  color: NormalColorType;
  placement: placementType;
}>`
  position: relative;
  z-index: 1;
  width: 120px;
  background-color: black;
  color: #fff;
  background: ${({ color }) => palette[color]};
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  bottom: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out;
  ${({ placement }) => placementMap[placement]};
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `};
`;
