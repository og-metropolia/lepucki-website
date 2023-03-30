import { useState } from 'react';
import './App.css';
import Footer from './homepage/Footer';
import Sisaankirjautunut from './pages/Sisaankirjautunut';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   ReactDOM,
// } from 'react-router-dom';

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route path="/sisäänkirjautunut">
//         <Sisaankirjautunut />
//       </Route>
//       <Route path="/">
//         <App />
//       </Route>
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );

function Login() {
  const [kayttajanimi, setKayttajanimi] = useState('');
  const [salasana, setSalasana] = useState('');
  const [kirjautunut, setKirjautunut] = useState(false);
  const [vaarin, setVaarin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tarkista kirjautumistiedot
    if (kayttajanimi === 'admin' && salasana === 'admin') {
      setKirjautunut(true);
    } else {
      setVaarin(true);
    }
  };

  if (kirjautunut) {
    // window.open('/sisäänkirjautunut', '_blank');
    <Sisaankirjautunut />;
  }

  return (
    <div>
      <h2 className="login-text">Kirjaudu sisään</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="kayttajanimi"
          value={kayttajanimi}
          onChange={(event) => setKayttajanimi(event.target.value)}
          placeholder="Käyttäjänimi"
          className="login-input"
        />
        <br />
        <input
          type="password"
          id="salasana"
          value={salasana}
          onChange={(event) => setSalasana(event.target.value)}
          placeholder="Salasana"
          className="login-input"
        />
        <br />
        <button type="submit">Kirjaudu</button>
      </form>
      {vaarin && (
        <p>
          Väärä käyttäjänimi tai salasana, ole yhteydessä sivun ylläpitäjään
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <div className="App">
        <img
          className="main-logo"
          src="src/assets/logo.png"
          alt="Lepucki logo"
        />
      </div>
      <Login />
      <Footer />
    </>
  );
}

export default App;
