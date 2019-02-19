export const YEARS_PER_PAGE = 12

export default function getYears(
  activeYear: number,
  yearCount: number = YEARS_PER_PAGE
) {
  const activeOffset = activeYear % yearCount
  let years = []
  for (let index = 0; index < yearCount; index++) {
    years.push(activeYear - activeOffset + index)
  }
  return years
}
