import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import path from '../constants/routes.mjs';
import Register from '../components/Register.jsx';
import AuthContext from '../auth/AuthContext';
import './login.css';
import { BASE_URL, ENDPOINTS } from '../constants/api.mjs';

/**
Login-komponentti mahdollistaa käyttäjien kirjautumisen sovellukseen ja ohjaa heidät etusivulle onnistuneen kirjautumisen jälkeen.
Komponentissa on myös rekisteröitymispainike uusille käyttäjille.
@component
@returns {JSX.Element} Login-komponentti.
*/

export default function Login() {
  const { setLogged } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setValid] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const inputUsername = event.target[0].value;
    const inputPassword = event.target[1].value;

    try {
      const response = await fetch(
        `${BASE_URL}/${ENDPOINTS.users}/${inputUsername}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (inputUsername === data.username && inputPassword === data.password) {
        setLogged(true);
        history.push(path.home);
      } else {
        setValid(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openRegisterWindow = () => {
    const registerWindow = window.open('', '_blank', 'width=500,height=600');
    registerWindow.document.write(
      '<html><head><title>Rekisteröidy</title></head><body>'
    );
    registerWindow.document.write('</style></head><body>');
    registerWindow.document.write('<div id="register-root"></div>');
    registerWindow.document.write('</body></html>');
    registerWindow.document.close();

    setTimeout(() => {
      ReactDOM.render(
        <Register onRegisterSuccess={handleRegisterSuccess} />,
        registerWindow.document.getElementById('register-root')
      );
    }, 0);
  };

  const handleRegisterSuccess = () => {
    alert(
      'Rekisteröityminen onnistui! Voit nyt kirjautua sisään uusilla tunnuksilla.'
    );
  };

  return (
    <div className="login-container">
      <img className="main-logo" src="src/assets/logo.png" alt="Lepucki logo" />
      <h2 className="login-text">Kirjaudu sisään</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          className="login-input"
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Käyttäjänimi"
        />
        <input
          className="login-input"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Salasana"
        />
        <br />
        <button className="btn-confirm" type="submit">
          Kirjaudu
        </button>
      </form>
      {isValid && (
        <p>
          Väärä käyttäjänimi tai salasana, ole yhteydessä sivun ylläpitäjään
        </p>
      )}

      <button className="btn-register" onClick={openRegisterWindow}>
        Luo käyttäjä
      </button>
    </div>
  );
}
