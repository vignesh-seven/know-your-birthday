import { useEffect, useState } from "react"
import "./App.css"
import EventItem from "./components/EventItem"

function App() {
  const [eventsList, setEventsList] = useState<any[]>([])

  useEffect(() => {
    fetch(
      `https://api.api-ninjas.com/v1/historicalevents?month=${12}&day=${17}`,
      {
        headers: {
          "X-Api-Key": `${process.env.REACT_APP_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setEventsList(data)
      })
  }, [])
  return (
    <>
      {/* <p>{`Total No. of packages: ${totalPackages}`}</p> */}
      <div className="EventItemsContainer">
        <EventItem
          year={2000}
          month={12}
          day={17}
          text={
            "Something happened I guess what if this goes for a bit too long what if this goes for a bit too long what if this goes for a bit too longwhat if this goes for a bit too longwhat if this goes for a bit too long"
          }
        />
        {eventsList.map((event, index) => (
          <EventItem
            key={index} // Add a unique key prop for each item
            year={event.year}
            month={event.month}
            day={event.day}
            text={event.event}
          />
        ))}
      </div>
    </>
  )
}

export default App
