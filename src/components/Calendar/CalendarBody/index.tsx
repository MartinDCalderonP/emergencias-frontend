import { useState } from "react"
import { useDate } from "@/contexts/DateContext"
import { getMonthDaysArray } from "@/utils/utils"
import { PictureData } from "@/common/interfaces"
import Day from "./Day"
import DayModal from "../DayModal"

interface CalendarBodyProps {
  pictures: PictureData[]
}

const CalendarBody = ({ pictures }: CalendarBodyProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const { currentDate } = useDate()
  const monthDaysArray = getMonthDaysArray(currentDate)
  const picturesUrls = pictures.map((picture) => picture.url)

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  return (
    <>
      {monthDaysArray.map((day) => (
        <Day
          key={day}
          day={day}
          pictureUrl={picturesUrls[day - 1]}
          setSelectedDay={setSelectedDay}
          handleToggleModal={handleToggleModal}
        />
      ))}
      {isModalOpen && selectedDay && (
        <DayModal
          toggleModal={handleToggleModal}
          dayData={pictures[selectedDay - 1]}
        />
      )}
    </>
  )
}

export default CalendarBody
