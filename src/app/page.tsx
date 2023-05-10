"use client"
import { QueryClient, QueryClientProvider } from "react-query"
import { DateProvider } from "@/contexts/DateContext"
import TitleWithButtons from "@/components/TitleWithButtons"
import Calendar from "@/components/Calendar"

const Home = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <DateProvider>
        <main>
          <TitleWithButtons />
          <Calendar />
        </main>
      </DateProvider>
    </QueryClientProvider>
  )
}

export default Home
