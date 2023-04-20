import { useState } from 'react';

export default function Register({ onRegisterSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    // Kutsu REST-rajapintaa käyttäjän rekisteröimiseksi
    try {
      const response = await fetch('http://localhost:3000/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          apartment_number: apartmentNumber,
        }),
      });

      if (response.ok) {
        setMessage('Rekisteröinti onnistui!');
        if (onRegisterSuccess) {
          onRegisterSuccess();
        }
      } else {
        const error = await response.json();
        setMessage(`Rekisteröinti epäonnistui: ${error.message}`);
      }
    } catch (err) {
      setMessage(`Rekisteröinti epäonnistui: ${err.message}`);
    }
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
        <input
          type="text"
          placeholder="Syötä asunnon numero"
          value={apartmentNumber}
          onChange={(e) => setApartmentNumber(e.target.value)}
        />
        <br />
        <button type="submit">Rekisteröidy</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
