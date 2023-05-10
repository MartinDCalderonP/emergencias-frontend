import { createContext, ReactNode, useContext, useState } from "react"
import dayjs from "dayjs"
import "dayjs/locale/es"

dayjs.locale("es")

type Context = {
  currentDate: dayjs.Dayjs
  setCurrentDate: (month: dayjs.Dayjs) => void
}

export const DateContext = createContext<Context>({} as Context)

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [currentDate, setCurrentDate] = useState(dayjs("2023-02"))

  return (
    <DateContext.Provider value={{ currentDate, setCurrentDate }}>
      {children}
    </DateContext.Provider>
  )
}

export const useDate = () => {
  const { currentDate, setCurrentDate } = useContext(DateContext)

  if (!currentDate || !setCurrentDate) {
    throw new Error("useDate must be used within a DateProvider")
  }

  return { currentDate, setCurrentDate }
}
