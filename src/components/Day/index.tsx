import styles from "./styles.module.css"
interface DayProps {
  day: number
  firstDayOfTheMonth: number
  pictureUrl: string
}

const Day = ({ day, firstDayOfTheMonth, pictureUrl }: DayProps) => {
  const gridColumnStart = day === 1 ? firstDayOfTheMonth : undefined
  const backgroundImage = pictureUrl ? `url(${pictureUrl})` : undefined

  return (
    <li className={styles.day} style={{ gridColumnStart, backgroundImage }}>
      {day}
    </li>
  )
}

export default Day
