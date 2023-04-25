import React, { useState } from 'react';
import './gridtesti.css';
import { BASE_URL, ENDPOINTS } from '../constants/api.mjs';

let apartment_number = null;

export default function Gridi() {
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

  // const goToNextWeek = () => {
  //   setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() + 7)));
  // };

  // const goToPreviousWeek = () => {
  //   setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() - 7)));
  // };

  const days = [
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
    'Sunnuntai',
  ];

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

  return (
    <div>
      <label className="asunnonnumeroLabel">
        Asunnon numero
        <input
          id="asunnonnumeroField"
          type="number"
          onChange={(event) => updateApartmentNumber(event)}
        />
      </label>
      <div className="wrapper">
        {dateBoxes}
        {kellonAika()}
      </div>
      <button onClick={ajanvaraus}>VARAA</button>
    </div>
  );
}

function updateApartmentNumber(event) {
  apartment_number = event.target.value;
}

function kellonAika() {
  const aikavali = [];

  let alkuaika = 4;
  let loppuaika = 7;

  for (let i = 0; i < 35; i++) {
    if (i % 7 == 0) {
      alkuaika += 3;
      loppuaika += 3;
    }
    const napit = (
      <button className="kellonaikaButton" name={i} onClick={valinta}>
        {alkuaika.toFixed(2)} - {loppuaika.toFixed(2)}
      </button>
    );

    aikavali.push(napit);
  }
  return aikavali;
}

let varatut = [];

function valinta(event) {
  const valittu = 'valittu';
  const eiValittu = 'kellonaikaButton';

  if (event.target.className === valittu) {
    event.target.className = eiValittu;
    varatut = varatut.filter((item) => item !== event.target.name);
  } else {
    event.target.className = valittu;
    varatut.push(event.target.name);
  }

  console.log(varatut);
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

      if (response.status === 200) {
        return 'Varaus onnistui!';
      } else {
        throw new Error(`Varaus epäonnistui: ${await response.json()}`);
      }
    });
    const messages = await Promise.all(promises);
    console.log(messages); // Tulosta kaikki palautetut viestit
  } catch (err) {
    console.log(`Varaus epäonnistui: ${err.message}`);
  }
}
