import React from 'react';
import Navi from '../components/Navi';

export default function Home() {
  return (
    <>
      <Navi />
      <main>
        <header>
          <h1 className="login-text">Tervetuloa sisään!</h1>
          <p>Olet nyt kirjautunut sisään.</p>
        </header>
      </main>
    </>
  );
}
