import { Dayjs } from "dayjs"

const basicFetchUrl = `${process.env.NEXT_PUBLIC_NASA_API_URL}?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`

export const getMonthDaysArray = (currentMonth: Dayjs) => {
  return Array(currentMonth.daysInMonth())
    .fill(0)
    .map((_, i) => i + 1)
}

const startDate = (currentMonth: Dayjs) =>
  currentMonth.startOf("month").format("YYYY-MM-DD")

const endDate = (currentMonth: Dayjs) =>
  currentMonth.endOf("month").format("YYYY-MM-DD")

export const getPicturesOfTheMonth = async (currentMonth: Dayjs) => {
  try {
    const response = await fetch(
      `${basicFetchUrl}&start_date=${startDate(
        currentMonth
      )}&end_date=${endDate(currentMonth)}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getFormattedMonth = (currentMonth: Dayjs) => {
  const month = currentMonth.format("MMMM YYYY")
  const capitalizedMonth = capitalizeFirstLetter(month)
  return capitalizedMonth
}
