import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import path from './constants/routes.mjs';
import AuthContext from './auth/AuthContext';

// components
import Login from './pages/Login';
import Navi from './components/Navi';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Sauna from './pages/Sauna';
import Pyykkitupa from './pages/Pyykkitupa';
import Yhteystiedot from './pages/Yhteystiedot';
import Etusivu from './pages/Etusivu';

// isLogged ? <Logged /> : <Login />;

export default function App() {
  const [isLogged, setLogged] = useState(false);
  return (
    <AuthContext.Provider value={{ isLogged, setLogged }}>
      <div className="App">
        <Navi />
        <Switch>
          <Route path={path.front}>
            <Etusivu />
          </Route>
          <Route path={path.home}>
            <Home />
          </Route>
          <Route path={path.login}>
            <Login />
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
    </AuthContext.Provider>
  );
}
