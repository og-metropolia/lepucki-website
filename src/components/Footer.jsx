import React from 'react';

import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col-1">
          <h4>Lepucki Oy </h4>
          <p>Leppävaarankatu 23</p>
          <p>00520 Espoo</p>
          <p>Y-tunnus: 1234567-8</p>
        </div>
        <div className="footer-col-2">
          <h4>Yhteystiedot</h4>
          <p>Puheenjohtaja: Matti Meikäläinen</p>
          <p>Puhelin: 040 123 4567</p>
          <p>Email: matti.meikalainen@esimerkkitie123.fi</p>
        </div>
        <div className="footer-column3">
          <h4>Yhteystiedot</h4>
          <p>Puh: 012-345-6789</p>
          <p>Email: info@taloyhtioesimerkki.fi</p>
        </div>
        <div className="footer-col-4">
          <h4 className="footer-heading">Linkit</h4>
          <ul className="footer-links">
            <li>
              <a href="saannot.pdf">Säännöt</a>
            </li>
            <li>
              <a href="ohjeet.pdf">Ohjeet</a>
            </li>
            <li>
              <a href="tietosuojakaytanto.pdf">Tietosuojakäytäntö</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container2">
        <div className="footer-col-5">
          <p>© 2023 Lepucki Oy</p>
        </div>
      </div>
    </footer>
  );
}
