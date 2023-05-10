import { Dispatch, SetStateAction } from "react"
import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"

interface DayProps {
  day: number
  pictureUrl: string
  setSelectedDay: Dispatch<SetStateAction<number | null>>
  handleToggleModal: () => void
}

const Day = ({
  day,
  pictureUrl,
  setSelectedDay,
  handleToggleModal
}: DayProps) => {
  const { currentDate } = useDate()
  const firstDayOfTheMonth = currentDate.startOf("month").day()
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
