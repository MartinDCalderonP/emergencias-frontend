import { useState } from "react"
import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { useQuery } from "react-query"
import { getMonthDaysArray, getPicturesOfTheMonth } from "@/utils/utils"
import CalendarHeader from "../CalendarHeader"
import Day from "../Day"
import DayModal from "../DayModal"

const Calendar = () => {
  const { currentMonth } = useDate()
  const firstDayOfTheMonth = currentMonth.startOf("month").day()
  const monthDaysArray = getMonthDaysArray(currentMonth)
  const { data, isLoading, error } = useQuery(["pictures"], () =>
    getPicturesOfTheMonth(currentMonth)
  )

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Something went wrong...</p>

  return (
    <>
      <ol className={styles.calendar}>
        <CalendarHeader />
        {data &&
          monthDaysArray.map((day) => (
            <Day
              key={day}
              day={day}
              firstDayOfTheMonth={firstDayOfTheMonth}
              pictureUrl={data[day - 1]?.url}
              setSelectedDay={setSelectedDay}
              handleToggleModal={handleToggleModal}
            />
          ))}
      </ol>
      {isModalOpen && selectedDay && (
        <DayModal
          toggleModal={handleToggleModal}
          dayData={data[selectedDay - 1]}
        />
      )}
    </>
  )
}

export default Calendar
