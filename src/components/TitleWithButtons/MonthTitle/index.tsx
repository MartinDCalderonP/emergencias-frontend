import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { getFormattedMonth } from "@/utils/utils"

const MonthTitle = () => {
  const { currentDate } = useDate()
  const month = getFormattedMonth(currentDate)

  return <h1 className={styles.title}>{month}</h1>
}

export default MonthTitle
