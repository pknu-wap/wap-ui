import React, { useState } from 'react';

import { isSameDay, startOfMonth } from 'date-fns';
import styled from '@emotion/styled';

import useControlled from '../../hooks/useControlled';
import { getWeekArray } from './utils/getWeekArray';
import DateCalendarWeekdayLabel from './DateCalendarWeekdayLabel';
import DateCalendarHeader from './DateCalendarHeader';
import DateCalendarDay from './DateCalendarDay';

export interface DateCalendarProps {
  selectedDate?: Date;
  onSelectedDateChange?: (newDate: Date) => void;
}

export const DateCalendar = ({
  selectedDate,
  onSelectedDateChange,
}: DateCalendarProps) => {
  const now = new Date();

  const [selectedDateState, setSelectedDateState] = useControlled({
    controlledValue: selectedDate,
    defaultValue: now,
  });

  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(selectedDateState),
  );

  const weeksToDisplay = getWeekArray(currentMonth);

  const handleSelectedDateChange = (date: Date) => {
    setSelectedDateState(date);
    onSelectedDateChange?.(date);
  };

  const isSelected = (date: Date) => {
    return isSameDay(date, selectedDateState);
  };

  return (
    <DateCalendarContainer>
      <DateCalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      <DateCalendarWeekContainer>
        <DateCalendarWeekdayLabel />
        {weeksToDisplay.map((week) => (
          <DateCalendarWeek key={`week-${week[0]}`}>
            {week.map((day) => (
              <DateCalendarDay
                key={day.toString()}
                day={day}
                currentMonth={currentMonth}
                isSelected={isSelected(day)}
                onClick={() => handleSelectedDateChange(day)}
              />
            ))}
          </DateCalendarWeek>
        ))}
      </DateCalendarWeekContainer>
    </DateCalendarContainer>
  );
};

const DateCalendarContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 16px;
`;

const DateCalendarWeekContainer = styled.div`
  padding: 8px 0;
`;

const DateCalendarWeek = styled.div`
  margin: 2px 0;
  display: flex;
  justify-content: center;
`;
