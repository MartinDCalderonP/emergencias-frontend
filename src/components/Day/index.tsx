import { Dispatch, SetStateAction } from "react"
import styles from "./styles.module.css"

interface DayProps {
  day: number
  firstDayOfTheMonth: number
  pictureUrl: string
  setSelectedDay: Dispatch<SetStateAction<number | null>>
}

const Day = ({
  day,
  firstDayOfTheMonth,
  pictureUrl,
  setSelectedDay
}: DayProps) => {
  const gridColumnStart = day === 1 ? firstDayOfTheMonth : undefined
  const backgroundImage = pictureUrl ? `url(${pictureUrl})` : undefined

  return (
    <li
      className={styles.day}
      onClick={() => setSelectedDay(day)}
      style={{ gridColumnStart, backgroundImage }}
    >
      {day}
    </li>
  )
}

export default Day
