import { addWeeks, getISODay, setISODay, startOfDay } from 'date-fns'

export const TODAY = startOfDay(new Date())

export default function getNextOccurrenceOfDay(dayOfWeek) {
  const date = setISODay(TODAY, dayOfWeek)
  return getISODay(TODAY) <= dayOfWeek ? date : addWeeks(date, 1)
}
