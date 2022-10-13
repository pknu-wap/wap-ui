import styled from '@emotion/styled';
import { common } from '../../../theme/common';

export const Root = styled.div`
  position: relative;
  padding: 10px 20px;
`;

export const Label = styled.div`
  position: relative;
  padding: 10px;
  font-size: ${common.size.md};
  background: ${common.color.cyan3};
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

export const Content = styled.div``;
