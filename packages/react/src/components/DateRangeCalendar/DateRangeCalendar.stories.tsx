import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import DateRangeCalendar from './DateRangeCalendar';
import { DateCalendar } from '../DateCalendar';
import { format } from 'date-fns';

export default {
  title: 'Components/DateRangeCalendar',
  component: DateCalendar,
} as ComponentMeta<typeof DateCalendar>;

export const ControlledDateRangeCalendar = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedDateRange, setSelectedDateRange] = useState<[Date?, Date?]>(
      [],
    );

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {selectedDateRange[0] ? (
          <div>Start Date: {format(selectedDateRange[0], 'yyyy-MM-dd')}</div>
        ) : (
          <div>Start Date: None</div>
        )}
        {selectedDateRange[1] ? (
          <div>End Date: {format(selectedDateRange[1], 'yyyy-MM-dd')}</div>
        ) : (
          <div>End Date: None</div>
        )}
        <DateRangeCalendar
          selectedDateRange={selectedDateRange}
          onSelectedDateRangeChange={setSelectedDateRange}
        />
      </div>
    );
  },
};

export const UncontrolledDateRangeCalendar = {
  render: () => {
    return <DateRangeCalendar />;
  },
};
