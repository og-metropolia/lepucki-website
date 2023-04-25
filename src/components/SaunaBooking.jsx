import React, { useState } from 'react';
import { BASE_URL, ENDPOINTS } from '../constants/api.mjs';
import './SaunaBooking.css';

export default function SaunaBooking() {
  const [currentWeek, setCurrentWeek] = useState(0);
  const generateBookings = (weeks) => {
    let bookings = [];
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0);
    for (let i = 0; i < weeks * 7; i++) {
      for (let j = 0; j < 4; j++) {
        const time = ['14:00', '16:00', '18:00', '20:00'][j];
        const date = new Date(startTime);
        date.setDate(date.getDate() + i);
        const id = i * 4 + j + 1;
        bookings.push({
          id,
          time,
          date: date.toISOString().split('T')[0],
          reserved: false,
          timestamp: date,
        });
      }
    }
    return bookings;
  };

  const [bookings, setBookings] = useState(generateBookings(4)); // Generate bookings for 4 weeks

  const handleCancel = (ind) => {
    const index = bookings.findIndex((booking) => booking.id === ind);
    const updatedBooking = Object.assign({}, bookings[index], {
      reserved: false,
    });

    const updatedBookings = bookings.slice();
    updatedBookings[index] = updatedBooking;
    setBookings(updatedBookings);
  };

  const handleBooking = (timestamp) => {
    // const index = bookings.findIndex((booking) => booking.id === id);
    // const updatedBooking = Object.assign({}, bookings[index], {
    //   reserved: true,
    // });

    const newBooking = {
      apartment_number: 42,
      starting_at: timestamp,
      // ending_at: new Date(timestamp.getTime() + 1000 * 60 * 60 * 2),
      ending_at: timestamp.setHours(timestamp.getHours() + 2),
    };

    const updatedBookings = bookings.slice();
    // updatedBookings[index] = updatedBooking;
    setBookings(updatedBookings);

    fetch(`${BASE_URL}/${ENDPOINTS.sauna}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    })
      // .then((response) => {})
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const prevWeek = () => {
    setCurrentWeek(currentWeek - 1);
  };

  const nextWeek = () => {
    setCurrentWeek(currentWeek + 1);
  };

  const bookingsToShow = bookings.slice(
    currentWeek * 28,
    (currentWeek + 1) * 28
  );

  const weekdays = [
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
    'Sunnuntai',
  ];

  return (
    <div>
      <h2>Saunan varausjärjestelmä</h2>
      <h3>Kalenteri:</h3>
      <button onClick={prevWeek} disabled={currentWeek === 0}>
        Edellinen viikko
      </button>
      <button onClick={nextWeek}>Seuraava viikko</button>
      <div className="calendar">
        {weekdays.map((weekday, dayIndex) => (
          <div key={dayIndex} className="day">
            <div className="day-name">{weekday}</div>
            {bookingsToShow
              .filter(
                (booking) =>
                  new Date(booking.date).getDay() === (dayIndex + 1) % 7
              )
              .map((booking) => (
                <div
                  key={booking.id}
                  className={`time-slot ${
                    booking.reserved ? 'reserved' : 'free'
                  }`}
                  onClick={() =>
                    booking.reserved ? null : handleBooking(booking.timestamp)
                  }>
                  klo {booking.time}
                </div>
              ))}
          </div>
        ))}
      </div>
      <h3>Varatut ajat:</h3>
      <ul>
        {bookings
          .filter((booking) => booking.reserved === true)
          .map((booking) => (
            <li key={booking.id}>
              {booking.date} klo {booking.time}
              <button onClick={() => handleCancel(booking.id)}>Peruuta</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
