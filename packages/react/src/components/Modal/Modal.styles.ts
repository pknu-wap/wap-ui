import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { common, mediaQuery } from '../../theme';

export const Overlay = styled(motion.div)<{ blur: string }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
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
    `};
`;

export const Positioner = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
`;

export const ModalContainer = styled(motion.div)`
  border-radius: 1rem;
  padding: 1rem 2rem;
  width: 25rem;
  ${mediaQuery.small} {
    width: 17rem;
  }
  background-color: ${common.color.white};
`;
