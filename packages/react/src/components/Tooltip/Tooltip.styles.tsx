import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NormalColorType, palette } from '../../theme';
import { motion } from 'framer-motion';

export const StyledTooltipTrigger = styled.div`
  width: max-content;
  display: inherit;
`;

export const StyledTooltipArrow = styled(motion.div)`
  border-radius: 0 0 2px 0;
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #ccc;
  opacity: 0;
`;

export const StyledTooltipContent = styled(motion.div)<{
  color: NormalColorType;
}>`
  position: absolute;
  border-radius: 14px;
  padding: 8px 12px;
  opacity: 0;

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
