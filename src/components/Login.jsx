import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import path from '../constants/path';
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setValid] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      history.push(path.home);
    } else {
      setValid(true);
    }
  };

  return (
    <div>
      <img className="main-logo" src="src/assets/logo.png" alt="Lepucki logo" />
      <h2 className="login-text">Kirjaudu sisään</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Käyttäjänimi"
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Salasana"
        />
        <br />
        <button type="submit">Kirjaudu</button>
      </form>
      {isValid && (
        <p>
          Väärä käyttäjänimi tai salasana, ole yhteydessä sivun ylläpitäjään
        </p>
      )}
    </div>
  );
}
