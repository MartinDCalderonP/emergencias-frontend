import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { useQuery } from "react-query"
import { getPicturesOfTheMonth } from "@/utils/utils"
import CalendarHeader from "./CalendarHeader"
import CalendarBody from "./CalendarBody"
import DayModal from "./DayModal"
import Loader from "@/components/Loader"

const Calendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const { currentMonth } = useDate()
  const { data, isFetching, error, refetch } = useQuery(
    ["pictures", currentMonth],
    () => getPicturesOfTheMonth(currentMonth)
  )

  useEffect(() => {
    refetch()
  }, [currentMonth, refetch])

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  if (isFetching) return <Loader />

  if (error) return <p>Something went wrong...</p>

  return (
    <>
      {data?.length > 0 && (
        <ol className={styles.calendar}>
          <CalendarHeader />
          <CalendarBody
            handleToggleModal={handleToggleModal}
            pictures={data}
            setSelectedDay={setSelectedDay}
          />
        </ol>
      )}
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
