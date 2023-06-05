import React from 'react';
import { Seat } from '../Seat';

export const SeatRow = ({ row }) => {
    return (
        <div className='seat-row'>
            <Seat />
        </div>
    )
};