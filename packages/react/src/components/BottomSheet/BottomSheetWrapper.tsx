import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

import useBottomSheet from './useBottomSheet';

interface BottomSheetWrapperProps {
  children: React.ReactNode;
}

const BottomSheetWrapper = ({ children }: BottomSheetWrapperProps) => {
  const { sheetRef } = useBottomSheet();

  return (
    <StyledBottomSheetWrapper
      ref={sheetRef}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.3, bounce: 0 }}
    >
      {children}
    </StyledBottomSheetWrapper>
  );
};

const StyledBottomSheetWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 50vh;
  max-height: 100vh;
  padding: 25px 30px;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03);
  background: #fff;
  transition: height 0.3s ease-in-out;
`;

export default BottomSheetWrapper;
