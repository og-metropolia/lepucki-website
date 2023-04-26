import React from 'react';
import SaunaBooking from '../components/SaunaBooking';

export default function Sauna() {
  return (
    <>
      <main>
        <header>
          <h1 className="login-text">Tervetuloa saunaan!</h1>
        </header>
      </main>
      {<SaunaBooking />}
    </>
  );
}
