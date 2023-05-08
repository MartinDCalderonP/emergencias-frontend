import { createContext, ReactNode, useContext, useState } from "react"
import dayjs from "dayjs"
import "dayjs/locale/es"

dayjs.locale("es")

export const DateContext = createContext({
  currentMonth: dayjs(),
  setCurrentMonth: (date: dayjs.Dayjs) => {}
})

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs("2023-02"))

  return (
    <DateContext.Provider value={{ currentMonth, setCurrentMonth }}>
      {children}
    </DateContext.Provider>
  )
}

export const useDate = () => {
  const { currentMonth, setCurrentMonth } = useContext(DateContext)

  return { currentMonth, setCurrentMonth }
}
