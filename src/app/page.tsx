import { DateProvider } from '@/contexts/DateContext'
import Title from '@/components/Title'

const Home = () => {
  return (
    <DateProvider>
      <main>
        <Title />
      </main>
    </DateProvider>
  )
}

export default Home
