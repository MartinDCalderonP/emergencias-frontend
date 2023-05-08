import { useDate } from "@/contexts/DateContext"

const Title = () => {
  const { currentMonth } = useDate()

  return <h1>{currentMonth.format("MMMM YYYY")}</h1>
}

export default Title
