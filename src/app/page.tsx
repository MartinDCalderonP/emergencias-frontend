"use client"
import { QueryClient, QueryClientProvider } from "react-query"
import { DateProvider } from "@/contexts/DateContext"
import MonthTitle from "@/components/MonthTitle"
import Calendar from "@/components/Calendar"

const Home = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <DateProvider>
        <main>
          <MonthTitle />
          <Calendar />
        </main>
      </DateProvider>
    </QueryClientProvider>
  )
}

export default Home
