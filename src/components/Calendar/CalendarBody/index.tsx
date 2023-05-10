import { Dispatch, SetStateAction } from "react"
import { useDate } from "@/contexts/DateContext"
import { getMonthDaysArray } from "@/utils/utils"
import Day from "./Day"

interface CalendarBodyProps {
  handleToggleModal: () => void
  picturesUrls: string[]
  setSelectedDay: Dispatch<SetStateAction<number | null>>
}

const CalendarBody = ({
  handleToggleModal,
  picturesUrls,
  setSelectedDay
}: CalendarBodyProps) => {
  const { currentMonth } = useDate()
  const monthDaysArray = getMonthDaysArray(currentMonth)

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
