import { useState } from 'react';
import { BASE_URL, ENDPOINTS } from '../constants/api.mjs';
import './register.css';

export default function Register({ onRegisterSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    // Kutsu REST-rajapintaa käyttäjän rekisteröimiseksi
    try {
      const response = await fetch(`${BASE_URL}/${ENDPOINTS.users}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
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
    <div className="register-container">
      <h2>Rekisteröidy</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          className="register-input"
          type="text"
          placeholder="Syötä käyttäjänimi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="register-input"
          type="password"
          placeholder="Syötä salasana"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          className="register-input"
          type="text"
          placeholder="Syötä asunnon numero"
          value={apartmentNumber}
          onChange={(e) => setApartmentNumber(e.target.value)}
        />
        <br />
        <button className="register-button" type="submit">
          Rekisteröidy
        </button>
      </form>
      {message && <p className="register-message">{message}</p>}
    </div>
  );
}
