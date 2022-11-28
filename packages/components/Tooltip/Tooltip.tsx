import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import { NormalColorType } from '../../theme/types';
import { Portal } from '../Portal';
import { placementType } from './placement';
import TooltipContent from './TooltipContent';

export interface Props {
  children: React.ReactNode;
  content: string;
  color?: NormalColorType;
  placement?: placementType;
}

export const Tooltip = ({
  children,
  color = 'primary',
  content,
  placement = 'top',
}: Props) => {
  const ENTER_DELAY = 100;
  const EXIT_DELAY = 250;
  const [visible, setVisible] = useState<boolean>(false);
  const timer = useRef<number>();

  const handleChangeVisible = (nextState: boolean) => {
    console.log(nextState);
    changeVisible(nextState);
  };

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

    if (!nextState) {
      timer.current = window.setTimeout(() => handler(nextState), EXIT_DELAY);
      return;
    }
    timer.current = window.setTimeout(() => handler(nextState), ENTER_DELAY);
  };

  const trigger = React.cloneElement(children as React.ReactElement, {
    onMouseEnter: () => handleChangeVisible(true),
    onMouseLeave: () => handleChangeVisible(false),
  });

  return (
    <>
      <AnimatePresence>
        {visible && (
          <Portal>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.25, ease: 'easeInOut' },
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                transition: { duration: 0.25, ease: 'easeInOut' },
              }}
            >
              <TooltipContent color={color} placement={placement}>
                {content}
              </TooltipContent>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
      {/* trigger button */}
      {trigger} {visible ? 'true' : 'false'}
    </>
  );
};

export default Tooltip;
