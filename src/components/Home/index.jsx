import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { JourneyPicker } from '../JourneyPicker'
import { JourneyDetail } from '../JourneyDetail'
import { SeatPicker } from '../SeatPicker'

export const Home = () => {
  const navigate = useNavigate()
  const [journey, setJourney] = useState(null)
  const [userSeat, setUserSeat] = useState(null)
  const handleJourneyChange = data => {
    setJourney(data)
    setUserSeat(data.autoSeat)
  }

  const handleBuy = () => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'create',
        seat: userSeat,
        journeyId: journey.journeyId,
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
      {journey && <SeatPicker seats={journey.seats} journeyId={journey.id} selectedSeat={userSeat} onSeatSelected={setUserSeat}/>}

      {journey && (
        <div className='controls container'>
          <button className='btn btn--big' type='button' onClick={handleBuy}>
            Rezervovat
          </button> 
        </div>
      )}
    </main>
  )
}
