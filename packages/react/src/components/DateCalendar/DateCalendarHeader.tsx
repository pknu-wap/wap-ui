import React from 'react';

import { addMonths, format } from 'date-fns';
import styled from '@emotion/styled';

import ArrowRightSVG from './vectors/ArrowRightSVG';
import ArrowLeftSVG from './vectors/ArrowLeftSVG';

interface DateCalendarHeaderProps {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
}

const DateCalendarHeader = ({
  currentMonth,
  setCurrentMonth,
}: DateCalendarHeaderProps) => {
  const currentMonthYear = format(currentMonth, 'LLLL yyyy');

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  return (
    <DateCalendarHeaderContainer>
      <DateCalendarHeaderLabel>{currentMonthYear}</DateCalendarHeaderLabel>
      <DateCalendarHeaderMonthSwitcherContainer>
        <DateCalendarHeaderMonthSwitcherButton
          type="button"
          onClick={handlePreviousMonth}
        >
          <ArrowLeftSVG />
        </DateCalendarHeaderMonthSwitcherButton>
        <div />
        <DateCalendarHeaderMonthSwitcherButton
          type="button"
          onClick={handleNextMonth}
        >
          <ArrowRightSVG />
        </DateCalendarHeaderMonthSwitcherButton>
      </DateCalendarHeaderMonthSwitcherContainer>
    </DateCalendarHeaderContainer>
  );
};

const DateCalendarHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 0 12px;
  max-height: 30px;
  min-height: 30px;
`;

const DateCalendarHeaderLabel = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  margin-right: auto;
`;

const DateCalendarHeaderMonthSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`;

const DateCalendarHeaderMonthSwitcherButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export default DateCalendarHeader;
