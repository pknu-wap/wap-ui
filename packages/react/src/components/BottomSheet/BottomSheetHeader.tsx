import React from 'react';
import styled from '@emotion/styled';

const BottomSheetHeader = () => {
  return (
    <BottomSheetHeaderWrapper>
      <BottomSheetHandle>
        <span />
      </BottomSheetHandle>
    </BottomSheetHeaderWrapper>
  );
};

const BottomSheetHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BottomSheetHandle = styled.div`
  cursor: grab;
  user-select: none;
  padding: 15px;
  margin-top: -15px;

  span {
    height: 4px;
    width: 40px;
    display: block;
    background: #c7d0e1;
    border-radius: 50px;
  }
`;

export default BottomSheetHeader;
