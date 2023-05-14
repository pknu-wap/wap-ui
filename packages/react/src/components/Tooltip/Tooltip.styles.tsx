import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NormalColorType, palette } from '../../theme';
import { TooltipIconPlacement, TooltipPlacement } from './placement';

export const StyledTooltipTrigger = styled.div`
  width: max-content;
  display: inherit;
`;

export const StyledTooltipArrow = styled.div<{
  tooltipIconPlacement: TooltipIconPlacement;
}>`
  border-radius: 0 0 2px 0;
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #ccc;
  opacity: 0;
  transition: 0.1s ease-in-out;

  ${({ tooltipIconPlacement }) => css`
    top: ${tooltipIconPlacement.top};
    left: ${tooltipIconPlacement.left};
    right: ${tooltipIconPlacement.right};
    bottom: ${tooltipIconPlacement.bottom};
    transform: ${tooltipIconPlacement.transform};
  `};
`;

export const StyledTooltipContent = styled.div<{
  visible: boolean;
  color: NormalColorType;
  tooltipPlacement: TooltipPlacement;
}>`
  position: absolute;
  border-radius: 14px;
  padding: 8px 12px;
  opacity: 0;
  transition: 0.1s ease-in-out;

  ${({ tooltipPlacement }) => css`
    top: calc(${tooltipPlacement.top} + 6px);
    left: ${tooltipPlacement.left};
    transform: ${tooltipPlacement.transform};
  `};

  ${({ visible, tooltipPlacement }) =>
    visible &&
    css`
      opacity: 1;
      top: ${tooltipPlacement.top};
      ${StyledTooltipArrow} {
        opacity: 1;
      }
    `};

  ${({ color }) => css`
    background-color: ${palette[color]};
    ${StyledTooltipArrow} {
      background-color: ${palette[color]};
    }
  `};
`;

export const StyledTooltip = styled.div`
  position: relative;
  font-size: 14px;
  color: #fff;
  line-height: 1.5;
`;
