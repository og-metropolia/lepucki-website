import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import path from '../constants/routes.mjs';
import './navi.css';

export default function Navi() {
  return (
    <>
      <Navbar
        id="navbar"
        bg="light"
        style={{ backgro: 'center' }}
        expand="lg"
        className="flexed-top">
        <Navbar.Brand href="#">Lepucki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={path.home}>Koti</Nav.Link>
            <Nav.Link href={path.sauna}>Sauna</Nav.Link>
            <Nav.Link href={path.laundry}>Pyykkitupa</Nav.Link>
            <Nav.Link href={path.contact}>Yhteystiedot</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
