import React from 'react';
import logo from '../assets/logo.png';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <img src={logo} alt="Lepucki Oy Logo" />
        </div>
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
        <div className="footer-col-3">
          <h4>Linkit</h4>
          <p>
            <a href="https://tauno.link/nvr">Säännöt</a>
          </p>
          <p>
            <a href="https://tauno.link/nvr">Ohjeet</a>
          </p>
          <p>
            <a href="https://tauno.link/nvr">Tietosuojakäytäntö</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
