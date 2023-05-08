import { DateProvider } from "@/contexts/DateContext"
import Title from "@/components/Title"
import Calendar from "@/components/Calendar"

const Home = () => {
  return (
    <DateProvider>
      <main>
        <Title />
        <Calendar />
      </main>
    </DateProvider>
  )
}

export default Home
