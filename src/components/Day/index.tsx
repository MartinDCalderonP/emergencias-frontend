import Image from "next/image"

interface DayProps {
  day: number
  firstDayOfTheMonth: number
  pictureUrl: string
}

const Day = ({ day, firstDayOfTheMonth, pictureUrl }: DayProps) => {
  const gridColumnStart = day === 1 ? firstDayOfTheMonth : undefined

  return (
    <li style={{ gridColumnStart }}>
      <p>{day}</p>
      {pictureUrl && (
        <Image
          src={pictureUrl}
          alt="Picture of the day"
          width={100}
          height={100}
        />
      )}
    </li>
  )
}

export default Day
