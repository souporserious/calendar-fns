## 🗓 calendar-fns

Small utility functions for building calendars in JavaScript.

### Exported Functions

#### getMonthWeekDays

```jsx
import React from 'react'
import getMonthWeekDays from 'calendar-utils/getMonthWeekDays'

function CalendarWeekDays() {
  const weekdays = getMonthWeekDays()
  return (
    <tr>
      {weekdays.map(weekday => (
        <th>{weekday}</th>
      ))}
    </tr>
  )
}
```

#### getMonthWeeks

```jsx
import React from 'react'
import getMonthWeeks from 'calendar-utils/getMonthWeeks'

function CalendarWeeks() {
  const weeks = getMonthWeeks()
  return weeks.map(week => (
    <tr>
      {week.map(day => (
        <td>{day})</td>
      ))}
    </tr>
  ))
}
```

#### getYears

```jsx
import React from 'react'
import getYears from 'calendar-utils/getYears'

function YearPicker({ onYearClick }) {
  const years = getYears()
  return years.map(year => (
    <button onClick={() => onYearClick(year)}>{year}</button>
  ))
}
```

### Exported Constants

#### TODAY

#### YEARS_PER_PAGE

#### DAYS_IN_WEEK

#### DAYS_IN_SIX_WEEKS

#### MONTHS

#### WEEKDAYS
