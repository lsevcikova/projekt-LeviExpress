import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { JourneyPicker } from '../JourneyPicker'
import { JourneyDetail } from '../JourneyDetail'
import { SelectedSeat } from '../SelectedSeat'

export const Home = () => {
  const navigate = useNavigate()
  const [journey, setJourney] = useState()
  const handleJourneyChange = data => {
    setJourney(data)
  }

  console.log(journey)

  const handleBuy = () => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId
      })
    })
      .then(response => response.json())
      .then(data => {
        navigate(`/reservation/${data.results.reservationId}`)
      })
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <JourneyDetail journey={journey} />}
      {journey && <SelectedSeat number={journey.autoSeat} />}
      {journey && (
        <div class='controls container'>
          <button class='btn btn--big' type='button' onClick={handleBuy}>
            Rezervovat
          </button> 
        </div>
      )}
    </main>
  )
}
