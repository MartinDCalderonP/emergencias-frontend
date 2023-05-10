import { createContext, ReactNode, useContext, useReducer } from "react"
import reducer, { Action, initialState } from "./reducer"
import dayjs from "dayjs"
import "dayjs/locale/es"

dayjs.locale("es")

type Context = {
  currentDate: dayjs.Dayjs
  setCurrentDate: (action: Action) => void
}

export const DateContext = createContext<Context>({} as Context)

interface DateProviderProps {
  children: ReactNode
}

export const DateProvider = ({ children }: DateProviderProps) => {
  const [currentDate, setCurrentDate] = useReducer(reducer, initialState)

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
