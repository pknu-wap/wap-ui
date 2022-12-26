import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { palette } from '../../../theme/palette';
import { NormalColorType } from '../../../theme';

export const StyledButton = styled.button<{
  color: NormalColorType;
  shadow: boolean;
}>`
  background: ${({ color }) => palette[color]};
  color: #fff;
  border-radius: 0.7rem;
  padding: 0.7rem 2rem;
  width: auto;
  min-width: 100px;
  line-height: 1rem;
  font-size: 1rem;
  ${({ shadow, color }) =>
    shadow &&
    css`
      box-shadow: 0 4px 14px 0 ${palette[color]};
    `};
`;
