import React from 'react';
import { Seat } from '../Seat';

const testRow = [
    {
      number: 33,
      isOccupied: false,
    },
    {
      number: 29,
      isOccupied: true,
    },
    {
      number: 25,
      isOccupied: false,
    },
  ];

export const SeatRow = ({ row }) => {
    return (
        <div className='seat-row'>
            {row.map(seat => (
            <Seat number={seat.number} />
            ))}
        </div>
    )
};