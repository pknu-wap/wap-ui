import styled from '@emotion/styled';
import { common } from '../../../theme/common';

export const Root = styled.div`
  position: relative;
  margin: 10px 20px;
`;

export const Label = styled.div`
  position: relative;
  padding: 10px;
  font-size: ${common.size.md};
  background: ${common.color.cyan3};
  border-left: 5px solid ${common.color.cyan5};
  color: ${common.color.white};
  cursor: pointer;
  &::before {
    content: '+';
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;

export const Content = styled.div`
  position: relative;
  background: ${common.color.white};
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease;
  overflow-y: auto;
`;
