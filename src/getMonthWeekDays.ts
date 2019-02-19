export const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export default function getMonthWeekDays({
  trimWeekdays = 0,
  weekStartsOn = 0,
  weekdays = WEEKDAYS,
} = {}) {
  return weekdays.concat(weekdays.splice(0, weekStartsOn)).map(weekday => ({
    full: weekday,
    trimmed: trimWeekdays ? weekday.substring(0, trimWeekdays) : weekday,
  }))
}
