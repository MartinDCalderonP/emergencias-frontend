import { Dayjs } from "dayjs"

const basicFetchUrl = `${process.env.NEXT_PUBLIC_NASA_API_URL}?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`

export const getMonthDaysArray = (currentDate: Dayjs) => {
  return Array(currentDate.daysInMonth())
    .fill(0)
    .map((_, i) => i + 1)
}

const startDate = (currentDate: Dayjs) =>
  currentDate.startOf("month").format("YYYY-MM-DD")

const endDate = (currentDate: Dayjs) =>
  currentDate.endOf("month").format("YYYY-MM-DD")

export const getPicturesOfTheMonth = async (currentDate: Dayjs) => {
  try {
    const response = await fetch(
      `${basicFetchUrl}&start_date=${startDate(currentDate)}&end_date=${endDate(
        currentDate
      )}`
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

export const getFormattedMonth = (currentDate: Dayjs) => {
  const month = currentDate.format("MMMM YYYY")
  const capitalizedMonth = capitalizeFirstLetter(month)
  return capitalizedMonth
}
