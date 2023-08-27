import {
  addDays,
  endOfMonth,
  endOfWeek,
  isBefore,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

export const getWeekArray = (value: Date) => {
  const start = startOfWeek(startOfMonth(value));
  const end = endOfWeek(endOfMonth(value));

  let count = 0;
  let current = start;
  const nestedWeeks: Date[][] = [];

  while (isBefore(current, end)) {
    const weekNumber = Math.floor(count / 7);
    nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
    nestedWeeks[weekNumber].push(current);

    current = addDays(current, 1);
    count += 1;
  }

  return nestedWeeks;
};
