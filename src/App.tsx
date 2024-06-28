import { useEffect, useState } from "react"
import "./App.css"
import EventItem from "./components/EventItem"
import { Center, Container, Space, Title } from "@mantine/core"
import { DateInput } from "@mantine/dates"
// import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"

function App() {
  const [eventsList, setEventsList] = useState([])
  const [date, setDate] = useState<Date | null>(null)
  useEffect(() => {
    if (!date) return
    fetch(
      `https://api.api-ninjas.com/v1/historicalevents?month=${
        date.getMonth() + 1
      }&day=${date.getDate()}`,
      {
        headers: {
          "X-Api-Key": `${import.meta.env.VITE_HISTORICAL_EVENTS_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setEventsList(data)
      })
    console.log(date)
  }, [date])
  return (
    <>
      <Center>
        <Container>
          <Title order={1} p="lg">
            Birthday?
          </Title>
          <DateInput
            size="md"
            w={335}
            value={date}
            onChange={setDate}
            // label="Birthday?"
            placeholder="Enter your birthday"
            clearable
          ></DateInput>
        </Container>
      </Center>
      {/* <p>{`Total No. of packages: ${totalPackages}`}</p> */}
      <div className="EventItemsContainer">
        {/* <EventItem
          year={2000}
          month={12}
          day={17}
          text={
            "Something happened I guess what if this goes for a bit too long what if this goes for a bit too long what if this goes for a bit too longwhat if this goes for a bit too longwhat if this goes for a bit too long"
          }
        /> */}
        {eventsList.map((event, index) => (
          <Container>
            <Space key={index} h="md" />
            <EventItem
              key={index} // Add a unique key prop for each item
              year={event.year}
              month={event.month}
              day={event.day}
              text={event.event}
            />
          </Container>
        ))}
      </div>
    </>
  )
}

export default App
