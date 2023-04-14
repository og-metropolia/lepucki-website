/*
Tämä koodi esittää yksinkertaista varausjärjestelmää saunalle. Siinä on form-elementti, jossa käyttäjä voi valita päivämäärän ja ajan,
jonka hän haluaa varata. Käyttäjä voi varata ajan painamalla "Varaa aika" -painiketta.

Aikavarausten tila tallennetaan bookings-tilamuuttujaan, joka sisältää taulukon varattavissa olevista ajoista,
joka sisältää olion jokaisesta ajasta, jossa on ID, aika, päivämäärä ja varaus -arvo.

Valitun päivämäärän ja ajan tilaa tallennetaan selectedDate- ja selectedTime-tilamuuttujiin.

Kun käyttäjä valitsee päivämäärän ja ajan ja varaa sen, uusi varaus lisätään bookings-taulukkoon. Varauksen tietojen tallentamiseksi käytetään newBooking-oliota.

Käyttäjä voi myös peruuttaa varauksia, joka tehdään painamalla "Peruuta" -painiketta. Tämä päivittää bookings-tilan, asettaen varauksen tilan reserved arvon "false" -arvoksi.

Lopuksi varattuja ja vapaita aikoja näytetään ul -elementissä käyttämällä .filter()- ja .map()-metodeja bookings-taulukon perusteella.
Vapaat ajat ovat niitä, joissa reserved-ominaisuus on "false", ja varatut ajat ovat niitä, joissa reserved-ominaisuus on "true". Vapaat ja varatut ajat näytetään kahdessa eri listassa.
*/


import React, { useState } from 'react';

function SaunaBooking() {
  const [bookings, setBookings] = useState([
    { id: 1, time: '14:00', date: '2022-05-10', reserved: true },
    { id: 2, time: '16:00', date: '2022-05-10', reserved: false },
    { id: 3, time: '18:00', date: '2022-05-10', reserved: false },
    { id: 4, time: '20:00', date: '2022-05-10', reserved: true },
    { id: 5, time: '14:00', date: '2022-05-11', reserved: false },
    { id: 6, time: '16:00', date: '2022-05-11', reserved: true },
    { id: 7, time: '18:00', date: '2022-05-11', reserved: false },
    { id: 8, time: '20:00', date: '2022-05-11', reserved: false },
  ]);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleBooking = () => {
    const newBooking = {
      id: bookings.length + 1,
      time: selectedTime,
      date: selectedDate,
      reserved: true,
    };
    setBookings([...bookings, newBooking]);
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleCancel = (id) => {
    const index = bookings.findIndex((booking) => booking.id === id);
    const updatedBooking = Object.assign({}, bookings[index], { reserved: false });
    const updatedBookings = bookings.slice();
    updatedBookings[index] = updatedBooking;
    setBookings(updatedBookings);
  };

  return (
    <div>
      <h2>Saunan varausjärjestelmä</h2>
      <form>
        <label>
          Päivämäärä:
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </label>
        <label>
          Aika:
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">Valitse aika</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
            <option value="18:00">18:00</option>
            <option value="20:00">20:00</option>
          </select>
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
              {booking.date} klo {booking.time}
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
              {booking.date} klo {booking.time}
              <button onClick={() => handleCancel(booking.id)}>Peruuta</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SaunaBooking;
