import React from 'react';
import Navi from '../components/Navi';

export default function Sauna() {
  return (
    <>
      <Navi />
      <main>
        <header>
          <h1 className="login-text">Tervetuloa saunaan!</h1>
          <p>Olet nyt saunassa.</p>
        </header>
      </main>
    </>
  );
}
