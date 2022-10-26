import React, { useState, useRef } from 'react';
import { NormalColorType } from '../../theme/types';
import { placementType } from './placement';
import * as S from './Tooltip.styles';
import TooltipContent from './TooltipContent';

export interface Props {
  children: React.ReactNode;
  content: string;
  color?: NormalColorType;
  placement?: placementType;
}

/**
 * @todo 이거 참고하기!!
 * @see w3schools https://www.w3schools.com/css/css_tooltip.asp
 * @see nextui https://nextui.org/docs/components/tooltip
 */

const ENTER_DELAY = 100; // 0.1s
const LEAVE_DELAY = 100; // 0.1s

export const Tooltip = ({
  children,
  color = 'primary',
  content,
  placement = 'top',
}: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const timer = useRef<number>();

  const handleChangeVisible = (nextState: boolean) => {
    console.log(nextState);
    changeVisible(nextState);
  };

  /**
   * nextui 참고
   * @see https://github.com/nextui-org/nextui/blob/main/packages/react/src/tooltip/tooltip.tsx
   *  */
  const changeVisible = (nextState: boolean) => {
    const clear = () => {
      clearTimeout(timer.current);
      timer.current = undefined;
    };
    const handler = (nextState: boolean) => {
      setVisible(nextState);
      clear();
    };

    clear();

    if (nextState) {
      timer.current = window.setTimeout(() => handler(nextState), ENTER_DELAY);
      return;
    }
    timer.current = window.setTimeout(() => handler(nextState), LEAVE_DELAY);
  };

  /**
   * @legacy clearTimeout()을 사용한 방법
   */
  // useEffect(() => {
  //   let timeoutId: ReturnType<typeof setTimeout> | null = null;
  //   if (visible) {
  //     setVisible(false);
  //   } else {
  //     timeoutId = setTimeout(() => {
  //       setVisible(true);
  //     }, 100); /** animation도 0.1로 설정해야함. 주의하기! */
  //   }
  //   return () => {
  //     if (timeoutId) {
  //       clearTimeout(timeoutId);
  //     }
  //   };
  // }, [visible]);

  return (
    <S.TooltipTrigger
      onMouseEnter={() => handleChangeVisible(true)}
      onMouseLeave={() => handleChangeVisible(false)}
    >
      <TooltipContent visible={visible} color={color} placement={placement}>
        {content}
      </TooltipContent>
      {children}
    </S.TooltipTrigger>
  );
};

export default Tooltip;
