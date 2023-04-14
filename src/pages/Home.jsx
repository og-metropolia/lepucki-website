import React from 'react';
import AnnouncementBoard from '../components/AnnouncementBoard';

export default function Home() {
  return (
    <>
      <main>
        <header>
          <h1 className="login-text">Tervetuloa sisään!</h1>
          <p>Olet nyt kirjautunut sisään.</p>
        </header>
      </main>
      <AnnouncementBoard />
    </>
  );
}
