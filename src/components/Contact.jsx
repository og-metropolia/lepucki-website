import React, { useState } from 'react';
import './contact.css';
import { BASE_URL, ENDPOINTS } from '../constants/api.mjs';

export default function YhteydenottoFormi() {
  const [nimi, setNimi] = useState('');
  const [email, setEmail] = useState('');
  const [viesti, setViesti] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/${ENDPOINTS.contact}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nimi, email, message: viesti }),
      });

      if (response.ok) {
        alert('Viesti lähetetty onnistuneesti');
        setNimi('');
        setEmail('');
        setViesti('');
      } else {
        alert('Viestin lähettäminen epäonnistui. Yritä uudelleen.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Viestin lähettäminen epäonnistui. Yritä uudelleen.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nimi">Nimi:</label>
          <input
            type="text"
            id="nimi"
            value={nimi}
            onChange={(event) => setNimi(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Sähköposti:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="viesti">Viesti:</label>
          <textarea
            id="viesti"
            value={viesti}
            onChange={(event) => setViesti(event.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Lähetä
        </button>
      </form>
    </div>
  );
}
