import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { useQuery } from "react-query"
import { getMonthDaysArray, getPicturesOfTheMonth } from "@/utils/utils"
import CalendarHeader from "../CalendarHeader"
import Day from "../Day"

const Calendar = () => {
  const { currentMonth } = useDate()
  const firstDayOfTheMonth = currentMonth.startOf("month").day()
  const monthDaysArray = getMonthDaysArray(currentMonth)
  const { data, isLoading, error } = useQuery(["pictures"], () =>
    getPicturesOfTheMonth(currentMonth)
  )

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Something went wrong...</p>

  return (
    <ol className={styles.calendar}>
      <CalendarHeader />
      {data &&
        monthDaysArray.map((day) => (
          <Day
            key={day}
            day={day}
            firstDayOfTheMonth={firstDayOfTheMonth}
            pictureUrl={data[day - 1]?.url}
          />
        ))}
    </ol>
  )
}

export default Calendar
