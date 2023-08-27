import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

import { useBottomSheetContext } from './BottomSheetContext';

const BottomSheetOverlay = () => {
  const { onClose } = useBottomSheetContext();

  return (
    <StyledBottomSheetOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    />
  );
};

const StyledBottomSheetOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

export default BottomSheetOverlay;
