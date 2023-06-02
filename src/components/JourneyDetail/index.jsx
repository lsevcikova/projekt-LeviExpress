import React from 'react'
import { BusStop } from '../BusStop'
import './style.css'

export const JourneyDetail = ({journey}) => {
  return (
    <div className='journey-detail container'>
      <h2>Podrobnosti cesty</h2>
      <div className='stops'>
        <BusStop name={journey.stops[0]} station={'UAN Florenc'} time={'15.30'}/>
      </div>
    </div>
  )
}
