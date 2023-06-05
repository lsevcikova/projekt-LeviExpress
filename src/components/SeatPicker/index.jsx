import React from 'react';
import './style.css';
import { SeatRow } from '../SeatRow';

export const SeatPicker = ({seats, journeyId}) => (
    <>
        <div className="seat-picker container">
            <h2>Vyberte sedadlo</h2>
            <div className="seats">
                {seats.map(seat => (
                <SeatRow/>
                ))}
            </div>
        </div>
    </>
);