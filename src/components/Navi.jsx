import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navi() {
  return (
    <>
      <Navbar id="navbar" bg="light" expand="lg" className="flexed-top">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="../koti">Koti</Nav.Link>
            <Nav.Link href="../sivut/Sauna">Sauna</Nav.Link>
            <Nav.Link href="/sivut/pyykkitupa">Pyykkitupa</Nav.Link>
            <Nav.Link href="../sivut/Yhteystiedot">Yhteystiedot</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navi;
