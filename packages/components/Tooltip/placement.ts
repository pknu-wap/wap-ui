import { css, SerializedStyles } from '@emotion/react';

export type placementType = 'top' | 'bottom' | 'left' | 'right';

export const placementMap: {
  [key in placementType]: SerializedStyles;
} = {
  top: css`
    bottom: 100%;
  `,
  bottom: css`
    top: 100%;
  `,
  left: css`
    right: 100%;
  `,
  right: css`
    left: 100%;
  `,
};
