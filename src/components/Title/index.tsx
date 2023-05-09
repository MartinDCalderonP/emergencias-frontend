import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { capitalizeFirstLetter } from "@/utils/utils"

const Title = () => {
  const { currentMonth } = useDate()
  const title = currentMonth.format("MMMM YYYY")
  const capitalizedTitle = capitalizeFirstLetter(title)

  return <h1 className={styles.title}>{capitalizedTitle}</h1>
}

export default Title
