import React from 'react';
import Navi from '../components/Navi';

export default function Pyykkitupa() {
  return (
    <>
      <Navi />
      <main>
        <header>
          <h1 className="login-text">Tervetuloa pyykkitupaan</h1>
          <p>Olet nyt pyykkituvassa.</p>
        </header>
      </main>
    </>
  );
}
