import { QueryClient, QueryClientProvider } from "react-query"
import { DateProvider } from "@/contexts/DateContext"
import Title from "@/components/Title"
import Calendar from "@/components/Calendar"

const Home = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <DateProvider>
        <main>
          <Title />
          <Calendar />
        </main>
      </DateProvider>
    </QueryClientProvider>
  )
}

export default Home
