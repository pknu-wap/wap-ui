import React, { useState } from 'react';

import { isSameDay, isWithinInterval, startOfMonth } from 'date-fns';
import styled from '@emotion/styled';

import useControlled from '../../hooks/useControlled';
import { getWeekArray } from '../DateCalendar/utils/getWeekArray';
import DateCalendarWeekdayLabel from '../DateCalendar/DateCalendarWeekdayLabel';
import DateCalendarHeader from '../DateCalendar/DateCalendarHeader';
import DateCalendarDay from '../DateCalendar/DateCalendarDay';

type DateRange = [Date?, Date?];

export interface DateRangeCalendarProps {
  selectedDateRange?: DateRange;
  onSelectedDateRangeChange?: (value: DateRange) => void;
}

export const DateRangeCalendar = ({
  selectedDateRange,
  onSelectedDateRangeChange,
}: DateRangeCalendarProps) => {
  const now = new Date();
  const [selectedDateRangeState, setSelectedDateRangeState] = useControlled({
    controlledValue: selectedDateRange,
    defaultValue: [undefined, undefined],
  });

  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(selectedDateRangeState[1] || selectedDateRangeState[0] || now),
  );

  const weeksToDisplay = getWeekArray(currentMonth);

  const handleSelectedDateChange = (date: Date) => {
    let newDateRange: DateRange = [...selectedDateRangeState];

    if (!newDateRange[0]) {
      newDateRange[0] = date;
    } else if (!newDateRange[1]) {
      newDateRange[1] = date;
    } else {
      newDateRange = [date];
    }

    if (
      newDateRange[0] &&
      newDateRange[1] &&
      newDateRange[0] > newDateRange[1]
    ) {
      newDateRange = [newDateRange[1], newDateRange[0]];
    }

    setSelectedDateRangeState(newDateRange);
    onSelectedDateRangeChange?.(newDateRange);
  };

  const isSelected = (date: Date) => {
    if (!selectedDateRangeState[0]) {
      return false;
    }
    if (!selectedDateRangeState[1]) {
      return isSameDay(date, selectedDateRangeState[0]);
    }

    return (
      isSameDay(date, selectedDateRangeState[0]) ||
      isSameDay(date, selectedDateRangeState[1])
    );
  };

  // TODO: 나중에 validation 추가
  const rangeStyle = (date: Date): 'none' | 'start' | 'end' | 'within' => {
    if (!selectedDateRangeState[0] || !selectedDateRangeState[1]) return 'none';

    const isInRange = isWithinInterval(date, {
      start: selectedDateRangeState[0],
      end: selectedDateRangeState[1],
    });

    if (!isInRange) return 'none';

    if (isSameDay(date, selectedDateRangeState[0])) {
      // 같은 날짜인 경우
      if (isSameDay(date, selectedDateRangeState[1])) return 'none';
      return 'start';
    }
    if (isSameDay(date, selectedDateRangeState[1])) return 'end';

    return 'within';
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
                rangeStyle={rangeStyle(day)}
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

export default DateRangeCalendar;
