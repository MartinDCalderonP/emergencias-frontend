import { useDate } from "@/contexts/DateContext"
import Image from "next/image"

interface DayProps {
  day: number
  pictureUrl: string
}

const Day = ({ day, pictureUrl }: DayProps) => {
  const { currentMonth } = useDate()
  const firstDay = currentMonth.startOf("month").day()
  const gridColumnStart = day === 1 ? firstDay : undefined

  return (
    <li style={{ gridColumnStart }}>
      <p>{day}</p>
      {pictureUrl && (
        <Image
          src={pictureUrl}
          alt="Picture of the day"
          width={100}
          height={100}
        />
      )}
    </li>
  )
}

export default Day
