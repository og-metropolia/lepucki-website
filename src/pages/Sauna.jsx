import React from 'react';
import SaunaBooking from '../components/SaunaBooking';

/**
 * Sauna()-funktio palauttaa sivun, joka sisältää moduuleja
 * saunan varaus sivun toiminnan mahdollistamiseksi
 * @component
 * @returns {JSX.Element} Sauna-komponentti.
 */

export default function Sauna() {
  return (
    <>
      <main>
        <header>
          <h1 className="login-text">Saunan ajanvaraus</h1>
        </header>
      </main>
      {<SaunaBooking />}
    </>
  );
}
