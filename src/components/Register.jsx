import { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Tässä voit kutsua API:a, joka tallentaa käyttäjän tiedot tietokantaan tai muuhun tallennusjärjestelmään.
  };

  return (
    <div>
      <h2>Rekisteröidy</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Syötä käyttäjänimi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Syötä salasana"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Rekisteröidy</button>
      </form>
    </div>
  );
}
