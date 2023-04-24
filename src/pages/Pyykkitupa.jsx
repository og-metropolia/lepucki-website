import React from 'react';
// import Navi from '../components/Navi';
import LaundryBooking from '../components/LaundryBooking';
import Gridi from '../components/Gristesti';

export default function Pyykkitupa() {
  return (
    <>
      {/* <Navi /> */}
      {<LaundryBooking />}

      <main>
        <header>
          <h1 className="login-text">Tervetuloa pyykkitupaan</h1>
          <p>Olet nyt pyykkituvassa.</p>
        </header>
      </main>
      {<Gridi />}
      <button>Varaa-aika</button>
    </>
  );
}
