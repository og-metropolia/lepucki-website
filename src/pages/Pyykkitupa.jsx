import React from 'react';
import LaundryBooking from '../components/LaundryBooking';

export default function Pyykkitupa() {
  return (
    <>
      <main>
        <header>
          <h1 className="login-text">Pyykkitupa</h1>
          <p>Ajanvaraus</p>
        </header>
      </main>
      {<LaundryBooking />}
    </>
  );
}
