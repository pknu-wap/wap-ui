import React from 'react';
import styled from '@emotion/styled';

interface BottomSheetContentProps {
  children?: React.ReactNode;
}

const BottomSheetContent = ({ children }: BottomSheetContentProps) => {
  return (
    <StyledBottomSheetContent>
      <div className="body">{children}</div>
    </StyledBottomSheetContent>
  );
};

const StyledBottomSheetContent = styled.div``;

export default BottomSheetContent;
