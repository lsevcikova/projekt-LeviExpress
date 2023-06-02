import React, {useState} from 'react'
import { JourneyPicker } from '../JourneyPicker'
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {
const[journey, setJourney] = useState();
  const handleJourneyChange = data => {
    console.log(data)
    setJourney(data)
  }
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {/* <JourneyDetail journey={journey}/> */}
    </main>
  )
}
