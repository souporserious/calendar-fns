import React, { useState } from 'react'

import {
  DAYS_IN_SIX_WEEKS,
  DAYS_IN_WEEK,
  TODAY,
  WEEKDAYS,
  YEARS_PER_PAGE,
  getMonthWeekDays,
  getMonthWeeks,
  getNextOccurrenceOfDay,
  getYears,
} from '../../../src'

function CalendarWeekDays({ trimWeekdays }) {
  const weekdays = getMonthWeekDays({ trimWeekdays })
  return (
    <tr>
      {weekdays.map(weekday => (
        <th key={weekday.full}>
          <abbr title={weekday.full}>{weekday.trimmed}</abbr>
        </th>
      ))}
    </tr>
  )
}

function CalendarWeeks({ date, forceSixWeeks, locale }) {
  const weeks = getMonthWeeks(date, { forceSixWeeks, locale })
  return weeks.map((week, weekIndex) => (
    <tr key={weekIndex}>
      {week.map(day => (
        <td key={day}>{day.getDate()}</td>
      ))}
    </tr>
  ))
}

function YearPicker({ onYearClick }) {
  const years = getYears(2019)
  return years.map(year => (
    <button onClick={() => onYearClick(year)}>{year}</button>
  ))
}

function Calendar() {
  const [currentDate, setCurrentDate] = useState(TODAY)
  return (
    <table>
      <thead>
        <CalendarWeekDays trimWeekdays={3} />
      </thead>
      <tbody>
        <CalendarWeeks date={currentDate} />
      </tbody>
    </table>
  )
}

export default Calendar
