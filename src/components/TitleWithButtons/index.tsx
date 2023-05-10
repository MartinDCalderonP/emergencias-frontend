import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import MonthTitle from "./MonthTitle"

const TitleWithButtons = () => {
  const { currentDate, setCurrentDate } = useDate()

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.set("month", currentDate.month() - 1))
  }

  const handleNextMonth = () => {
    if (currentDate.month() === 3 && currentDate.year() === 2023) return
    setCurrentDate(currentDate.set("month", currentDate.month() + 1))
  }

  return (
    <div className={styles.container}>
      <button className={styles.iconButton} onClick={handlePreviousMonth}>
        <BiChevronLeft />
      </button>
      <MonthTitle />
      <button className={styles.iconButton} onClick={handleNextMonth}>
        <BiChevronRight />
      </button>
    </div>
  )
}

export default TitleWithButtons
