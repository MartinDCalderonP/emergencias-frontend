"use client"
import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import CalendarHeader from "../CalendarHeader"
import Day from "../Day"

const Calendar = () => {
  const { currentMonth } = useDate()

  const monthDays = currentMonth.daysInMonth()
  const monthDaysArray = Array(monthDays)
    .fill(0)
    .map((_, i) => i + 1)

  return (
    <ol className={styles.calendar}>
      <CalendarHeader />
      {monthDaysArray.map((day) => (
        <Day key={day} day={day} />
      ))}
    </ol>
  )
}

export default Calendar
