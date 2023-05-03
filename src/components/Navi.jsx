import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import path from '../constants/routes.mjs';
import './navi.css';
import AuthContext from '../auth/AuthContext';

/**

Navi-komponentti luo navigaatiopalkin sovellukselle.
@component
@returns {JSX.Element} Navi-komponentti.
*/
export default function Navi() {
  return (
    <>
      <Navbar id="navbar" expand="lg" className="flexed-top">
        <Navbar.Brand id="nav-brand" href="/">
          Lepucki
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <LoggedNavLinks />
          <div className="nav-login-container">
            <LogButton />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

/**
LoggedNavLinks-komponentti näyttää erilaiset navigointilinkit käyttäjän kirjautumisen perusteella.
@returns {JSX.Element} LoggedNavLinks-komponentti.
*/
function LoggedNavLinks() {
  const location = useLocation();
  return (
    `/${location.pathname}` !== path.front &&
    location.pathname !== path.login && (
      <Nav className="mr-auto btn-nav">
        <Nav.Link href={path.home}>Ilmoitustaulu</Nav.Link>
        <Nav.Link href={path.sauna}>Sauna</Nav.Link>
        <Nav.Link href={path.laundry}>Pyykkitupa</Nav.Link>
        <Nav.Link href={path.contact}>Yhteystiedot</Nav.Link>
      </Nav>
    )
  );
}

/**
LogButton-komponentti näyttää joko "Kirjaudu sisään" tai "Kirjaudu ulos" -linkin käyttäjän kirjautumistilan perusteella.
@returns {JSX.Element} LogButton-komponentti.
*/
function LogButton() {
  const { isLogged, setLogged } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    setLogged(false);
    history.push(path.login);
  };

  return isLogged ? (
    <Nav className="btn-login">
      <Nav.Link onClick={handleLogout}>Kirjaudu ulos</Nav.Link>
    </Nav>
  ) : (
    <Nav className="btn-login">
      <Nav.Link href={path.login}>Kirjaudu sisään</Nav.Link>
    </Nav>
  );
}
