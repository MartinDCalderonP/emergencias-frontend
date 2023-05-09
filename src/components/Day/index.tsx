import { useState } from "react"
import styles from "./styles.module.css"
import Modal from "../Modal"
interface DayProps {
  day: number
  firstDayOfTheMonth: number
  pictureUrl: string
}

const Day = ({ day, firstDayOfTheMonth, pictureUrl }: DayProps) => {
  const gridColumnStart = day === 1 ? firstDayOfTheMonth : undefined
  const backgroundImage = pictureUrl ? `url(${pictureUrl})` : undefined

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  return (
    <>
      <li
        className={styles.day}
        onClick={handleToggleModal}
        style={{ gridColumnStart, backgroundImage }}
      >
        {day}
      </li>
      {isModalOpen && <Modal toggleModal={handleToggleModal} />}
    </>
  )
}

export default Day
