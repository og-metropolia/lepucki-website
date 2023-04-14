import React from 'react';
import SaunaBooking from '../components/SaunaBooking';

export default function Sauna() {
  return (
    <>
      <main>
        <header>
          <h1 className="login-text">Tervetuloa saunaan!</h1>

          <p>Olet nyt saunassa.</p>
        </header>
      </main>
      {<SaunaBooking />}
    </>
  );
}
