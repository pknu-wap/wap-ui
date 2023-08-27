import { ComponentMeta } from '@storybook/react';
import { DateCalendar } from './DateCalendar';
import React, { useState } from 'react';
import { format } from 'date-fns';

export default {
  title: 'Components/DateCalendar',
  component: DateCalendar,
} as ComponentMeta<typeof DateCalendar>;

export const ControlledDateCalendar = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleSelectedDateChange = (newDate: Date) => {
      setSelectedDate(newDate);
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div>Selected Date: {format(selectedDate, 'yyyy-MM-dd')}</div>
        <DateCalendar
          selectedDate={selectedDate}
          onSelectedDateChange={handleSelectedDateChange}
        />
      </div>
    );
  },
};

export const UncontrolledDateCalendar = () => {
  return <DateCalendar />;
};
