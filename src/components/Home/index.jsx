import React, {useState} from 'react'
import { JourneyPicker } from '../JourneyPicker'

export const Home = () => {
const[journey, setJourney] = useState();
  const handleJourneyChange = data => {
    console.log(data)
    setJourney(data)
  }
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
    </main>
  )
}
