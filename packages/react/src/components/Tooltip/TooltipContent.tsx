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
import { AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      {visible && (
        <S.StyledTooltipContent
          color={color}
          initial={{
            top: `calc(${rect.top} + 6px)`,
            left: rect.left,
            transform: rect.transform,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            top: rect.top,
          }}
          exit={{
            top: `calc(${rect.top} + 6px)`,
            left: rect.left,
            transform: rect.transform,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
        >
          <S.StyledTooltip>
            <S.StyledTooltipArrow
              style={{
                top,
                left,
                right,
                bottom,
                transform,
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}
            />
            {children}
          </S.StyledTooltip>
        </S.StyledTooltipContent>
      )}
    </AnimatePresence>,
    el,
  );
};
