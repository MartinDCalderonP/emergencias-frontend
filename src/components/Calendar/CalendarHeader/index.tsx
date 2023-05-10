import styles from "./styles.module.css"

const dayNames = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
]

const CalendarHeader = () => {
  return (
    <>
      {dayNames.map((dayName) => (
        <li className={styles.calendarHeaderItem} key={dayName}>
          {dayName}
        </li>
      ))}
    </>
  )
}

export default CalendarHeader
