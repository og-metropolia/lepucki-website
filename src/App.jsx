import React from 'react';
// import ReactDOM from 'react-dom/client';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import path from './constants/routes.mjs';

// components
import Login from './components/Login';
import Navi from './components/Navi';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Sauna from './pages/Sauna';
import Pyykkitupa from './pages/Pyykkitupa';
import Yhteystiedot from './pages/Yhteystiedot';

// return isLogged ? <Logged /> : <Login />;

export default function App() {
  // const [isLogged, setLogin] = useState(false);
  return (
    <div className="App">
      <Navi />
      <Switch>
        <Route path={path.home}>
          <Home />
        </Route>
        <Route path={path.login}>
          <Login />
          set
        </Route>
        <Route path={path.sauna}>
          <Sauna />
        </Route>
        <Route path={path.laundry}>
          <Pyykkitupa />
        </Route>
        <Route path={path.contact}>
          <Yhteystiedot />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
