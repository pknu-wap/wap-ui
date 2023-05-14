import React, { MutableRefObject, useEffect, useMemo, useState } from 'react';
import * as S from './Tooltip.styles';
import { createPortal } from 'react-dom';
import usePortal from '../../hooks/usePortal';
import {
  Placement,
  TooltipPlacement,
  defaultTooltipPlacement,
  getIconPlacement,
  getPlacement,
  getRect,
} from './placement';
import { NormalColorType } from '../../theme';

interface TooltipContentProps {
  placement?: Placement;
  visible: boolean;
  children?: React.ReactNode;
  parent?: MutableRefObject<HTMLElement | null> | undefined;
  offset?: number;
  color?: NormalColorType;
}

export const TooltipContent = ({
  placement = 'top',
  visible,
  children,
  offset = 12,
  color = 'primary',
  parent,
}: TooltipContentProps) => {
  const el = usePortal('tooltip');
  const [rect, setRect] = useState<TooltipPlacement>(defaultTooltipPlacement);

  if (!parent) return null;

  const updateRect = () => {
    const pos = getPlacement(placement, getRect(parent), offset);

    setRect(pos);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { transform, top, left, right, bottom } = useMemo(
    () => getIconPlacement(placement, 5),
    [placement],
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    updateRect();
  }, [visible]);

  if (!el) return null;

  return createPortal(
    <S.StyledTooltipContent
      visible={visible}
      tooltipPlacement={{
        left: rect.left,
        top: rect.top,
        transform: rect.transform,
      }}
      color={color}
    >
      <S.StyledTooltip>
        <S.StyledTooltipArrow
          tooltipIconPlacement={{
            left,
            top,
            right,
            bottom,
            transform,
          }}
        />
        {children}
      </S.StyledTooltip>
    </S.StyledTooltipContent>,
    el,
  );
};
