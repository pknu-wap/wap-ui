import styled from '@emotion/styled';
import { common } from '../../../theme/common';

export const Root = styled.div`
  position: relative;
  margin: 10px 20px;
`;

export const Label = styled.div<{ visible: boolean }>`
  position: relative;
  padding: 1rem;
  font-size: ${common.size.md};
  font-weight: 800;
  background: ${common.color.gray5};
  border-left: 5px solid ${common.color.gray6};
  color: ${common.color.white};
  transition: background 0.3s ease;
  cursor: pointer;
  &:hover {
    background: ${common.color.gray6};
  }
  &::before {
    content: '+';
    font-size: 2rem;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%)
      rotate(${({ visible }) => (visible ? '45deg' : '0')});
    transition: all 0.1s ease-in-out;
  }
`;

export const Description = styled.div`
  font-size: ${common.size.sm};
  color: ${common.color.white};
`;

export const ContentWrapper = styled.div`
  height: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  overflow-y: auto;
`;

export const Content = styled.div`
  background: ${common.color.gray2};
  padding: 1rem 2rem;
`;
