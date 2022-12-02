import React, { useState, useLayoutEffect } from 'react';
import { RippleContainer } from './Ripple.styles';

interface useDebouncedRippleCleanUpProps {
  rippleCount: number;
  duration: number;
  cleanUp: () => void;
}
const useDebouncedRippleCleanUp = ({
  rippleCount,
  duration,
  cleanUp,
}: useDebouncedRippleCleanUpProps) => {
  useLayoutEffect(() => {
    let bounce: ReturnType<typeof setTimeout> | null = null;
    if (rippleCount > 0) {
      bounce && clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUp();
        bounce && clearTimeout(bounce);
      }, duration * 4);
    }

    return () => {
      bounce && clearTimeout(bounce);
    };
  }, [rippleCount, duration, cleanUp]);
};

type Ripple = {
  x: number;
  y: number;
  size: number;
};

const Ripple = () => {
  const duration = 800;
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useDebouncedRippleCleanUp({
    rippleCount: ripples.length,
    duration,
    cleanUp: () => {
      setRipples([]);
    },
  });

  const addRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rippleContainer = e.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = e.clientX - rippleContainer.x - size / 2;
    const y = e.clientY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRipples([...ripples, newRipple]);
  };

  return (
    <RippleContainer duration={duration} onMouseDown={addRipple}>
      {ripples.length > 0 &&
        ripples.map((ripple, index) => {
          return (
            <span
              key={'span' + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

export default Ripple;
