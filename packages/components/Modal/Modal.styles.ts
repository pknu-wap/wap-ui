import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { common } from '../../theme/common';
import mediaQuery from '../../theme/mediaQuery';

export const Overlay = styled(motion.div)<{ blur: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  ${({ blur }) =>
    blur === 'true' &&
    css`
      -webkit-backdrop-filter: saturate(200%) blur(2px);
      backdrop-filter: saturate(200%) blur(2px);
      background-color: rgba(0, 0, 0, 0.1);
    `}
  ${({ blur }) =>
    blur === 'false' &&
    css`
      background-color: ${common.color.black};
      opacity: 0.5;
    `}
`;

export const ModalContainer = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 0.2rem;
  padding: 1rem 2rem;
  width: 25rem;
  ${mediaQuery.small} {
    width: 17rem;
  }
  background-color: ${common.color.white};
`;
