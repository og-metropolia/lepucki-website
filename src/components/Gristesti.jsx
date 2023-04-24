import React from 'react';
import './gridtesti.css';

export default function Gridi() {
  var curr = new Date(); // get current date
  //var first = curr.getDate(); // - curr.getDay(); // First day is the day of the month - the day of the week
  const day = curr.getDay();
  var firstday = new Date(
    new Date().getTime() - 60 * 60 * 24 * (day - 1) * 1000
  ).toLocaleDateString();

  return (
    <div className="wrapper">
      <div className="box">
        <p id="vkpaivat">Maanantai</p>
        <p id="paivamaara">{firstday}</p>
      </div>
      <div className="box">
        <p id="vkpaivat">Tiistai</p>
        <p id="paivamaara">
          {new Date(
            new Date().getTime() + 60 * 60 * 24 * 1 * 1000
          ).toLocaleDateString()}
        </p>
      </div>
      <div className="box">
        <p id="vkpaivat">Keskiviikko</p>
        <p id="paivamaara">
          {new Date(
            new Date().getTime() + 60 * 60 * 24 * 2 * 1000
          ).toLocaleDateString()}
        </p>
      </div>
      <div className="box">
        <p id="vkpaivat">Torstai</p>
        <p id="paivamaara">
          {new Date(
            new Date().getTime() + 60 * 60 * 24 * 3 * 1000
          ).toLocaleDateString()}
        </p>
      </div>
      <div className="box">
        <p id="vkpaivat">Perjantai</p>
        <p id="paivamaara">
          {new Date(
            new Date().getTime() + 60 * 60 * 24 * 4 * 1000
          ).toLocaleDateString()}
        </p>
      </div>
      <div className="box">
        <p id="vkpaivat"> Lauantai</p>
        <p id="paivamaara">
          {new Date(
            new Date().getTime() + 60 * 60 * 24 * 5 * 1000
          ).toLocaleDateString()}
        </p>
      </div>
      <div className="box">
        <p id="vkpaivat">Sunnuntai</p>
        <p id="paivamaara">
          {new Date(
            new Date().getTime() + 60 * 60 * 24 * 6 * 1000
          ).toLocaleDateString()}
        </p>
      </div>
      {kellonAika()}
    </div>
  );
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
