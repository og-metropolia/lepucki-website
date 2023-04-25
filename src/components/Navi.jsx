import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import path from '../constants/routes.mjs';
import './navi.css';
import AuthContext from '../auth/AuthContext';

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

function LoggedNavLinks() {
  const location = useLocation();
  return (
    `/${location.pathname}` !== path.front &&
    location.pathname !== path.login && (
      <Nav className="mr-auto btn-nav">
        <Nav.Link href={path.home}>Koti</Nav.Link>
        <Nav.Link href={path.sauna}>Sauna</Nav.Link>
        <Nav.Link href={path.laundry}>Pyykkitupa</Nav.Link>
        <Nav.Link href={path.contact}>Yhteystiedot</Nav.Link>
      </Nav>
    )
  );
}

function LogButton() {
  const { isLogged, setLogged } = useContext(AuthContext);

  const handleLogout = () => {
    setLogged(false);
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
