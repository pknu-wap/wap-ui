import styled from '@emotion/styled';
import { common } from '../../theme/common';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: ${common.color.black};
  opacity: 0.5;
  backdrop-filter: blur(2px);
`;
