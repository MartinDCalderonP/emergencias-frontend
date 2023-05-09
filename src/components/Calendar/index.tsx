import { useState } from "react"
import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { useQuery } from "react-query"
import { getPicturesOfTheMonth } from "@/utils/utils"
import CalendarHeader from "../CalendarHeader"
import CalendarBody from "../CalendarBody"
import DayModal from "../DayModal"
import { PictureData } from "@/common/interfaces"

const Calendar = () => {
  const { currentMonth } = useDate()
  const { data, error } = useQuery(["pictures"], () =>
    getPicturesOfTheMonth(currentMonth)
  )

  const picturesUrls: string[] = data?.map((data: PictureData) => data.url)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  if (error) return <p>Something went wrong...</p>

  return (
    <>
      {data?.length > 0 && (
        <ol className={styles.calendar}>
          <CalendarHeader />
          <CalendarBody
            handleToggleModal={handleToggleModal}
            picturesUrls={picturesUrls}
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
