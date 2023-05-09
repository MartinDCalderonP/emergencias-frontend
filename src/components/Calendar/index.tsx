import { useState } from "react"
import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { useQuery } from "react-query"
import { getPicturesOfTheMonth } from "@/utils/utils"
import CalendarHeader from "@/components/CalendarHeader"
import CalendarBody from "@/components/CalendarBody"
import DayModal from "@/components/DayModal"
import Loader from "@/components/Loader"
import { PictureData } from "@/common/interfaces"

const Calendar = () => {
  const { currentMonth } = useDate()
  const { data, isLoading, error } = useQuery(["pictures"], () =>
    getPicturesOfTheMonth(currentMonth)
  )

  const picturesUrls: string[] = data?.map((data: PictureData) => data.url)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  if (isLoading) return <Loader />

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
