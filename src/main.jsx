import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

/**
 * @component
 * @returns {JSX.Element} Main-komponentti.
Tämä tiedosto on sovelluksen pääsyökohta, jossa renderöidään sovellus HTML-muotoon.
Käytetään ReactDOM.createRoot-metodia luomaan sovelluksen juurielementti, joka on
määritelty HTML-tiedostossa ID:llä 'root'. Tähän juurielementtiin renderöidään
<App> -komponentti, joka on ympäröity <BrowserRouter>-komponentilla, joka tarjoaa
reititystoiminnallisuuden sovellukselle.
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
