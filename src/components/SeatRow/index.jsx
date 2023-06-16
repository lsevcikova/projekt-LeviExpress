import React from 'react'
import { Seat } from '../Seat'

export const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
  return (
    <div className='seat-row'>
      {row.map(seat => (
        <Seat
          number={seat.number}
          isOccupied={seat.isOccupied}
          key={seat.number}
          isSelected={rowSelectedSeat === seat.number}
          onSeatSelected={onSeatSelected}
        />
      ))}
    </div>
  )
}
