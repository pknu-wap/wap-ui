import styled from '@emotion/styled';

export const Root = styled.span<{ x: number; y: number }>`
  width: ${({ x }) => x}rem;
  height: ${({ y }) => y}rem;
`;
