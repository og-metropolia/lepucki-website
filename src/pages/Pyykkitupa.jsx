import React from 'react';
import LaundryBooking from '../components/LaundryBooking';

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
