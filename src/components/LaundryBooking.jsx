/**
 *
 * LaundryBooking-komponentti, joka luo interaktiivisen grid-valikon
 * ja mahdollistaa pyykkituvan varaamisen käyttäjille eri aikaväleillä.
 * @component
 * @returns {JSX.Element} LaundryBooking-komponentti, joka sisältää varauslogiikan
 * ja käyttöliittymän.
 */

import './booking.css';
import React, { useState, useEffect } from 'react';
import { BASE_URL, ENDPOINTS } from '../constants/api.mjs';

let apartment_number = null;

const valittu = 'kellonaikaButton valittu';
const eiValittu = 'kellonaikaButton eivalittu';

export default function SaunaBooking() {
  const [aikavali, setAikavali] = useState([]);
  /**
   * Funktio, joka hakee viikon ensimmäisen päivän.
   *
   * @returns {Date} Viikon ensimmäinen päivä.
   */
  const getWeeksFirstDay = () => {
    const currentDate = new Date();
    const firstDayOfWeek = new Date(
      currentDate.setDate(
        currentDate.getDate() -
          currentDate.getDay() +
          (currentDate.getDay() === 0 ? -6 : 1)
      )
    );
    return firstDayOfWeek;
  };

  const [currentWeek] = useState(getWeeksFirstDay());
  /**
   * Päivätaulukko, joka sisältää viikonpäivät.
   *
   * @type {Array<string>}
   */
  const days = [
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
    'Sunnuntai',
  ];
  /**
   * Päivämäärätiedot taulukossa, joka sisältää päivän ja viikonpäivän.
   *
   * @type {Array<JSX.Element>}
   */
  const dateBoxes = days.map((day, index) => {
    const date = new Date(
      currentWeek.getTime() + 60 * 60 * 24 * index * 1000
    ).toLocaleDateString();
    return (
      <div className="box" key={index}>
        <p id="vkpaivat">{day}</p>
        <p id="paivamaara">{date}</p>
      </div>
    );
  });

  /**
   * Funktio, joka hakee pyykkituvan varaukset tietokannasta.
   *
   * @returns {Array} Pyykkituvan varaukset.
   */
  async function kellonAika() {
    const aikavali = [];

    let alkuaika = 4;
    let loppuaika = 7;

    const data = await fetchBookings();

    const bookings = data.map((booking) => ({
      ind: booking.ind,
      apartment_number: booking.apartment_number,
    }));

    for (let i = 0; i < 35; i++) {
      if (i % 7 == 0) {
        alkuaika += 3;
        loppuaika += 3;
      }

      let btnClassName = eiValittu;

      if (data !== null) {
        for (let b = 0; b < bookings.length; b++) {
          if (bookings[b].ind === i) {
            btnClassName = valittu;
            break;
          }
        }
      }

      const napit = (
        <button className={btnClassName} name={i} onClick={valinta}>
          {`${alkuaika.toFixed(2).toString().padStart(5, '0')} -
          ${loppuaika.toFixed(2).toString().padStart(5, '0')} `}
        </button>
      );

      aikavali.push(napit);
    }
    setAikavali(aikavali);
  }

  useEffect(() => {
    kellonAika();
  }, []);

  return (
    <div>
      <label className="apartment-number">
        Asunnon numero
        <input
          className="apartment-number-input"
          type="number"
          onChange={(event) => updateApartmentNumber(event)}
        />
      </label>
      <div className="wrapper">
        {dateBoxes}
        {aikavali}
      </div>
      <button className="btn-laundry" onClick={ajanvaraus}>
        Varaa aika
      </button>
    </div>
  );
}

function updateApartmentNumber(event) {
  apartment_number = event.target.value;
}

async function fetchBookings() {
  try {
    const response = await fetch(`${BASE_URL}/${ENDPOINTS.laundry}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
}

let varatut = [];

function valinta(event) {
  if (event.target.className === valittu) {
    event.target.className = eiValittu;
    varatut = varatut.filter((item) => item !== event.target.name);
  } else {
    event.target.className = valittu;
    varatut.push(event.target.name);
  }
}

async function ajanvaraus() {
  try {
    const promises = varatut.map(async (elem) => {
      const response = await fetch(`${BASE_URL}/${ENDPOINTS.laundry}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apartment_number,
          ind: elem,
        }),
      });

      if (response.status !== 200) {
        throw new Error(`Varaus epäonnistui: ${await response.json()}`);
      }
    });
    await Promise.all(promises);
  } catch (err) {
    console.log(`Varaus epäonnistui: ${err.message}`);
    return;
  }
  alert('Varaus onnistui!');
}
