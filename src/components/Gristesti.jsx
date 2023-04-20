import React from 'react';
import './gridtesti.css';

export default function Gridi() {
  return (
    <div className="wrapper">
      <div className="box" id="vkpaivat">
        Maanantai
      </div>
      <div className="box" id="vkpaivat">
        Tiistai
      </div>
      <div className="box" id="vkpaivat">
        Keskiviikko
      </div>
      <div className="box" id="vkpaivat">
        Torstai
      </div>
      <div className="box" id="vkpaivat">
        Perjantai
      </div>
      <div className="box" id="vkpaivat">
        Lauantai
      </div>
      <div className="box" id="vkpaivat">
        Sunnuntai
      </div>
      {kellonAika()}
    </div>
  );
}

function kellonAika() {
  const aikavali = [];
  let alkuaika = 4.0;
  let loppuaika = 7.0;

  for (let i = 1; i < 6; i++) {
    alkuaika += 3;
    loppuaika += 3;
    const verti = (
      <button className="kellonaikaButton">
        {alkuaika.toFixed(2)} - {loppuaika.toFixed(2)}
      </button>
    );
    aikavali.push(verti);

    for (let j = 1; j < 7; j++) {
      const hori = (
        <button className="kellonaikaButton">
          {alkuaika.toFixed(2)} - {loppuaika.toFixed(2)}
        </button>
      );
      aikavali.push(hori);
    }
  }
  return aikavali;
}

const napit = document.querySelectorAll('.kellonaikaButton');

napit.forEach((nappi) => {
  nappi.addEventListener('click', () => {
    nappi.classList.toggle('valittu');

    const valitutNapit = document.querySelectorAll('.kellonaikaButton.valittu');
    valitutNapit.forEach((valittuNappi) => {
      valittuNappi.classList.add('valittu');
    });
  });
});
