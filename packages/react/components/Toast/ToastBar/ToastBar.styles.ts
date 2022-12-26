import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { common } from '../../../theme/common';

export const ToastBarBase = styled(motion.div)`
  display: flex;
  align-items: center;
  background: ${common.color.white};
  color: ${common.color.black};
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 21.875rem;
  pointer-events: auto;
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
`;

export const Message = styled(motion.span)`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0.625rem;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;
