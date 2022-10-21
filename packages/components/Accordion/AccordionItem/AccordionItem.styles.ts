import styled from '@emotion/styled';
import { common } from '../../../theme/common';

export const Root = styled.div`
  position: relative;
  margin: 10px 20px;
`;

export const Label = styled.div<{ visible: boolean }>`
  position: relative;
  padding: 10px;
  font-size: ${common.size.md};
  background: ${common.color.cyan3};
  border-left: 5px solid ${common.color.cyan5};
  color: ${common.color.white};
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    background: ${common.color.cyan4};
  }
  &::before {
    content: '+';
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;

export const ContentWrapper = styled.div<{ visible: boolean }>`
  position: relative;
  max-height: ${({ visible }) => (visible ? '600px' : '0')};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  overflow-y: auto;
`;

export const Content = styled.div`
  background: ${common.color.cyan0};
  padding: 10px;
`;
