const dayNames = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
]

const CalendarHeader = () => {
  return (
    <>
      {dayNames.map((dayName) => (
        <li key={dayName}>{dayName}</li>
      ))}
    </>
  )
}

export default CalendarHeader
