import styles from "./styles.module.css"
import { useDate } from "@/contexts/DateContext"
import { useQuery } from "react-query"
import { getPicturesOfTheMonth } from "@/utils/utils"
import CalendarHeader from "./CalendarHeader"
import CalendarBody from "./CalendarBody"
import Loader from "@/components/Loader"

const Calendar = () => {
  const { currentDate } = useDate()
  const { data, isLoading, error } = useQuery(["pictures", currentDate], () =>
    getPicturesOfTheMonth(currentDate)
  )
  if (isLoading) return <Loader />

  if (error) return <p>Something went wrong...</p>

  return (
    <>
      {data?.length > 0 && (
        <ol className={styles.calendar}>
          <CalendarHeader />
          <CalendarBody pictures={data} />
        </ol>
      )}
    </>
  )
}

export default Calendar
