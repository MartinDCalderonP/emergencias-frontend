import { Dispatch, SetStateAction } from "react"
import { useDate } from "@/contexts/DateContext"
import { getMonthDaysArray } from "@/utils/utils"
import Day from "./Day"
import { PictureData } from "@/common/interfaces"

interface CalendarBodyProps {
  handleToggleModal: () => void
  pictures: PictureData[]
  setSelectedDay: Dispatch<SetStateAction<number | null>>
}

const CalendarBody = ({
  handleToggleModal,
  pictures,
  setSelectedDay
}: CalendarBodyProps) => {
  const { currentDate } = useDate()
  const monthDaysArray = getMonthDaysArray(currentDate)

  const picturesUrls = pictures.map((picture) => picture.url)

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
    </>
  )
}

export default CalendarBody
