import React, { useState } from 'react'
import { JourneyPicker } from '../JourneyPicker'
import { JourneyDetail } from '../JourneyDetail'

export const Home = () => {
  const [journey, setJourney] = useState()
  const handleJourneyChange = data => {
    setJourney(data)
  }

  console.log(journey)

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <JourneyDetail journey={journey} />}
    </main>
  )
}
