import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function LaundryBooking() {
  const [bookings, setBookings] = useState([]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleApartmentNumberChange = (event) => {
    setApartmentNumber(event.target.value);
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !apartmentNumber) {
      alert('Täytä kaikki kentät: päivämäärä, aika ja asuntonumero.');
      return;
    }

    const formattedDate = selectedDate.toLocaleDateString('fi-FI');

    const existingBooking = bookings.find(
      (booking) =>
        booking.date === formattedDate && booking.time === selectedTime
    );

    if (existingBooking && existingBooking.reserved) {
      alert('Aika on varattu, valitse toinen aika.');
      return;
    }

    const newBooking = {
      id: bookings.length + 1,
      time: selectedTime,
      date: formattedDate,
      reserved: true,
      apartmentNumber: parseInt(apartmentNumber),
    };

    setBookings([...bookings, newBooking]);
    setSelectedDate(null);
    setSelectedTime('');
    setApartmentNumber('');
  };

  const handleCancel = (id) => {
    const index = bookings.findIndex((booking) => booking.id === id);
    const updatedBooking = Object.assign({}, bookings[index], {
      reserved: false,
    });
    const updatedBookings = bookings.slice();
    updatedBookings[index] = updatedBooking;
    setBookings(updatedBookings);
  };

  return (
    <div>
      <h2>Pyykkituvan varausjärjestelmä</h2>
      <form>
        <label>
          Päivämäärä:
          <DatePicker
            dateFormat="dd.MM.yyyy"
            selected={selectedDate}
            onChange={handleDateChange}
          />
        </label>
        <label>
          Aika:
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">Valitse aika</option>
            <option value="10:00">10:00</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
            <option value="18:00">18:00</option>
            <option value="20:00">20:00</option>
            <option value="22:00">22:00</option>
          </select>
        </label>
        <label>
          Asuntonumero:
          <input
            type="number"
            min="1"
            value={apartmentNumber}
            onChange={handleApartmentNumberChange}
          />
        </label>
        <button type="button" onClick={handleBooking}>
          Varaa aika
        </button>
      </form>
      <h3>Vapaat ajat:</h3>
      <ul>
        {bookings
          .filter((booking) => booking.reserved === false)
          .map((booking) => (
            <li key={booking.id}>
              {booking.date} klo {booking.time} - Asunto{' '}
              {booking.apartmentNumber}
              <button onClick={() => handleCancel(booking.id)}>Peruuta</button>
            </li>
          ))}
      </ul>
      <h3>Varatut ajat:</h3>
      <ul>
        {bookings
          .filter((booking) => booking.reserved === true)
          .map((booking) => (
            <li key={booking.id}>
              {booking.date} klo {booking.time} - Asunto{' '}
              {booking.apartmentNumber}
              <button onClick={() => handleCancel(booking.id)}>Peruuta</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
