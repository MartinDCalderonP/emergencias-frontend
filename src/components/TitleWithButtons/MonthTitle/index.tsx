import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { getFormattedMonth } from "@/utils/utils"

const MonthTitle = () => {
  const { currentMonth } = useDate()
  const month = getFormattedMonth(currentMonth)

  return <h1 className={styles.title}>{month}</h1>
}

export default MonthTitle
