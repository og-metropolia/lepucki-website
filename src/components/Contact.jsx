import React, { useState } from 'react';
import './contact.css';

export default function YhteydenottoFormi() {
  const [nimi, setNimi] = useState('');
  const [email, setEmail] = useState('');
  const [viesti, setViesti] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Lomake lähetetty');
    alert('Viesti lähetetty onnistuneesti');
    setNimi('');
    setEmail('');
    setViesti('');
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
