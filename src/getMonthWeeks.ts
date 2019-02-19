import {
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isSameDay,
  lastDayOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns'

export const DAYS_IN_SIX_WEEKS = 42

export const DAYS_IN_WEEK = 7

export default function getMonthWeeks(
  date: Date,
  { forceSixWeeks = true, locale = null } = {}
) {
  const weekOptions = { locale }
  const monthFirstDate = startOfMonth(date)
  const monthLastDate = endOfMonth(date)
  const monthFirstWeekdayDate = startOfWeek(monthFirstDate, weekOptions)
  const monthLastWeekdayDate = lastDayOfWeek(monthLastDate, weekOptions)
  let currentEndOfWeek = endOfWeek(monthFirstWeekdayDate, weekOptions)
  let days = eachDayOfInterval({
    start: monthFirstWeekdayDate,
    end: monthLastWeekdayDate,
  })
  let week = []
  if (forceSixWeeks && days.length < DAYS_IN_SIX_WEEKS) {
    days = eachDayOfInterval({
      start: monthFirstWeekdayDate,
      end: addWeeks(
        monthLastWeekdayDate,
        (DAYS_IN_SIX_WEEKS % days.length) / DAYS_IN_WEEK
      ),
    })
  }
  return days.reduce((weeks, day) => {
    week.push(day)
    if (isSameDay(day, currentEndOfWeek)) {
      weeks.push(week)
      week = []
    } else {
      currentEndOfWeek = endOfWeek(day, weekOptions)
    }
    return weeks
  }, [])
}
