import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import MonthTitle from "./MonthTitle"

const TitleWithButtons = () => {
  const { currentMonth, setCurrentMonth } = useDate()

  const handlePreviousMonth = () => {
    setCurrentMonth(currentMonth.set("month", currentMonth.month() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.set("month", currentMonth.month() + 1))
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
