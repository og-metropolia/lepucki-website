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
  const alkuaika = 7.0;
  const loppuaika = 10.0;

  for (let i = 0; i < 7; i++) {
    const verti = (
      <div className="box">
        {alkuaika} - {loppuaika}
      </div>
    );
    aikavali.push(verti);

    for (let j = 0; j < 7; j++) {
      alkuaika + 3;
      loppuaika + 3;
      const hori = (
        <div className="box">
          {alkuaika} - {loppuaika}
        </div>
      );
      aikavali.push(hori);
    }
  }
  return aikavali;
}
