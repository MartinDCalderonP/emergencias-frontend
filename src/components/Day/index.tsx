import { useDate } from "@/contexts/DateContext"

interface DayProps {
  day: number
}

const Day = ({ day }: DayProps) => {
  const { currentMonth } = useDate()
  const firstDay = currentMonth.startOf("month").day()
  const gridColumnStart = day === 1 ? firstDay : undefined

  return <li style={{ gridColumnStart }}>{day}</li>
}

export default Day
