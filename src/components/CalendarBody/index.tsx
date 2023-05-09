import { Dispatch, SetStateAction } from "react"
import { useDate } from "@/contexts/DateContext"
import { getMonthDaysArray } from "@/utils/utils"
import Day from "@/components/Day"

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
  const firstDayOfTheMonth = currentMonth.startOf("month").day()

  return (
    <>
      {monthDaysArray.map((day) => (
        <Day
          key={day}
          day={day}
          firstDayOfTheMonth={firstDayOfTheMonth}
          pictureUrl={picturesUrls[day - 1]}
          setSelectedDay={setSelectedDay}
          handleToggleModal={handleToggleModal}
        />
      ))}
    </>
  )
}

export default CalendarBody
