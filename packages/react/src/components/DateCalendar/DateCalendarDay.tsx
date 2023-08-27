import React, { useMemo } from 'react';

import { isSameDay } from 'date-fns';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface DateCalendarDayProps {
  day: Date;
  currentMonth: Date;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected?: boolean;
  rangeStyle?: 'start' | 'end' | 'none' | 'within';
}

const DateCalendarDay = ({
  day,
  currentMonth,
  onClick,
  isSelected,
  rangeStyle,
}: DateCalendarDayProps) => {
  const now = new Date();
  const isOutsideCurrentMonth = useMemo(() => {
    return day.getMonth() !== currentMonth.getMonth();
  }, [day, currentMonth]);

  const isToday = isSameDay(day, now);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isOutsideCurrentMonth) return;
    onClick?.(event);
  };

  if (isOutsideCurrentMonth) return <DateCalendarDayFilter />;

  return (
    <DateCalendarDayWrapper rangeStyle={rangeStyle}>
      <DateCalendarDayButton
        isSelected={isSelected}
        isToday={isToday}
        onClick={handleClick}
      >
        {day.getDate()}
      </DateCalendarDayButton>
    </DateCalendarDayWrapper>
  );
};

const DateCalendarDayFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  margin: 0px 2px;
`;

const DateCalendarDayWrapper = styled.div<{
  rangeStyle?: 'start' | 'end' | 'none' | 'within';
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 36px;
  color: rgba(0, 0, 0, 0.6);

  ${({ rangeStyle }) => {
    switch (rangeStyle) {
      case 'start':
        return css`
          background-color: rgba(25, 118, 210, 0.12);
          border-radius: 50% 0 0 50%;
        `;
      case 'end':
        return css`
          background-color: rgba(25, 118, 210, 0.12);
          border-radius: 0 50% 50% 0;
        `;
      case 'within':
        return css`
          background-color: rgba(25, 118, 210, 0.12);
          border-radius: 0;
        `;
      default:
        return css``;
    }
  }}
`;

const DateCalendarDayButton = styled.button<{
  isToday?: boolean;
  isSelected?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 2px;
  user-select: none;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 100%;
  height: 100%;

  &:hover {
    border: 1px dashed rgba(0, 0, 0, 0.1);
  }

  ${({ isToday }) =>
    isToday &&
    css`
      background-color: rgba(0, 0, 0, 0.1);
    `}

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #1976d2;
      color: #fff;
    `}
`;

export default DateCalendarDay;
