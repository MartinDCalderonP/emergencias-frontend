import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { actionTypes } from "@/contexts/reducer"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import MonthTitle from "./MonthTitle"

const TitleWithButtons = () => {
  const { currentDate, setCurrentDate } = useDate()

  const handlePrevMonth = () => {
    if (currentDate.month() === 4 && currentDate.year() === 1995) return
    setCurrentDate({ type: actionTypes.PREV_MONTH })
  }

  const handleNextMonth = () => {
    if (currentDate.month() === 3 && currentDate.year() === 2023) return
    setCurrentDate({ type: actionTypes.NEXT_MONTH })
  }

  return (
    <div className={styles.container}>
      <button className={styles.iconButton} onClick={handlePrevMonth}>
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
