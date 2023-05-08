"use client"
import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"

const dayNames = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
]

const Calendar = () => {
  const { currentMonth } = useDate()

  const monthDays = currentMonth.daysInMonth()
  const monthDaysArray = Array(monthDays)
    .fill(0)
    .map((_, i) => i + 1)

  return (
    <ol className={styles.calendar}>
      {dayNames.map((dayName) => (
        <li key={dayName}>{dayName}</li>
      ))}

      {monthDaysArray.map((day) => (
        <li key={day}>{day}</li>
      ))}
    </ol>
  )
}

export default Calendar
