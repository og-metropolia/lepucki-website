import './App.css';
// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import path from './constants/routes.mjs';

// components
import Login from './pages/Login';
import Navi from './components/Navi';
import Footer from './components/Footer';
import { AuthProvider } from './auth/AuthContext';
// import PrivateRoute from './components/PrivateRoute';

// pages
import Home from './pages/Home';
import Sauna from './pages/Sauna';
import Pyykkitupa from './pages/Pyykkitupa';
import Yhteystiedot from './pages/Yhteystiedot';
import Etusivu from './pages/Etusivu';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navi />
          <Switch>
            <Route path={path.front} exact component={Etusivu} />
            <Route path={path.login}>
              <Login />
            </Route>
            <Route path={path.home} component={Home} />
            <Route path={path.sauna} component={Sauna} />
            <Route path={path.laundry} component={Pyykkitupa} />
            <Route path={path.contact} component={Yhteystiedot} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
