import React from 'react';
import styled from '@emotion/styled';

const DateCalendarWeekdayLabel = () => {
  const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const defaultWeekDayFormatter = (day: string) => day.charAt(0).toUpperCase();
  return (
    <DateCalendarWeekdayLabelContainer>
      {WEEK_DAYS.map((day, idx) => (
        <WeekdayLabel key={idx}>{defaultWeekDayFormatter(day)}</WeekdayLabel>
      ))}
    </DateCalendarWeekdayLabelContainer>
  );
};

const DateCalendarWeekdayLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeekdayLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  margin: 0px 2px;
  color: rgba(0, 0, 0, 0.6);
`;

export default DateCalendarWeekdayLabel;
