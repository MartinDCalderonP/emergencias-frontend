import { Dayjs } from "dayjs"

const basicFetchUrl = `${process.env.NEXT_PUBLIC_NASA_API_URL}?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`

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
