import { Dispatch, SetStateAction } from "react"
import styles from "./styles.module.css"

interface DayProps {
  day: number
  firstDayOfTheMonth: number
  pictureUrl: string
  setSelectedDay: Dispatch<SetStateAction<number | null>>
  handleToggleModal: () => void
}

const Day = ({
  day,
  firstDayOfTheMonth,
  pictureUrl,
  setSelectedDay,
  handleToggleModal
}: DayProps) => {
  const gridColumnStart = day === 1 ? firstDayOfTheMonth : undefined
  const backgroundImage = pictureUrl ? `url(${pictureUrl})` : undefined

  const handleDayClick = () => {
    setSelectedDay(day)
    handleToggleModal()
  }

  return (
    <li
      className={styles.day}
      onClick={handleDayClick}
      style={{ gridColumnStart, backgroundImage }}
    >
      {day}
    </li>
  )
}

export default Day
