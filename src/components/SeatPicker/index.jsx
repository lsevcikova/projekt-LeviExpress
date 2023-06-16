import React from 'react'
import './style.css'
import { SeatRow } from '../SeatRow'

export const SeatPicker = ({ seats, onSeatSelected, selectedSeat }) => (
  <>
    <div className='seat-picker container'>
      <h2>Vyberte sedadlo</h2>
      <div className='seats'>
        {seats.map(row => (
          <SeatRow
            row={row}
            rowSelectedSeat={selectedSeat}
            onSeatSelected={onSeatSelected}
            key={row[0].number}
          />
        ))}
      </div>
    </div>
  </>
)
