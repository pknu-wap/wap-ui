import { TooltipContent } from './TooltipContent';
import * as S from './Tooltip.styles';
import React, { useRef, useState } from 'react';
import { Placement } from './placement';
import { NormalColorType } from '../../theme';

export interface TooltipProps {
  children: React.ReactNode;
  placement?: Placement;
  content?: React.ReactNode;
  offset?: number;
  color?: NormalColorType;
}

/**
 * @example
 * ```tsx
 * <Tooltip content="Tooltip Content" color="error" placement="left">
 *  <Button>Button</Button>
 * </Tooltip>
 * ```
 */

export const Tooltip = ({
  children,
  placement = 'top',
  content,
  offset,
  color = 'primary',
  ...props
}: TooltipProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const contentProps = {
    placement,
    parent: ref,
    visible,
    offset,
    color,
  };

  const handleChangeVisible = (nextState: boolean) => {
    setVisible(nextState);
  };

  return (
    <S.StyledTooltipTrigger
      ref={ref}
      onMouseEnter={() => handleChangeVisible(true)}
      onMouseLeave={() => handleChangeVisible(false)}
      {...props}
    >
      {children}
      {content ? (
        <TooltipContent {...contentProps}>{content}</TooltipContent>
      ) : null}
      {/* null을 사용하지 않으면, TooltipContent가 렌더링되지 않는다. */}
    </S.StyledTooltipTrigger>
  );
};
