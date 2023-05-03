import React from 'react';
import LaundryBooking from '../components/LaundryBooking';

/**
 * Pyykkitupa()-funktio palauttaa sivun, joka sisältää moduuleja
 * pyykkituvan varaus sivun toiminnan mahdollistamiseksi
 * @component
 * @returns {JSX.Element} Pyykkitupa-komponentti.
 */

export default function Pyykkitupa() {
  return (
    <>
      <main>
        <header>
          <h1 className="login-text">Pyykkituvan ajanvaraus</h1>
        </header>
      </main>
      {<LaundryBooking />}
    </>
  );
}
