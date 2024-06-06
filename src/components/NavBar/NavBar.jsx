import React from 'react';
import './NavBar.css'; // Ensure you import your CSS file
import {
  Navbar,
  Nav,
  Container,
  Button
} from "react-bootstrap";
import logo from '../../assets/images/Logo.png'; // Adjust this path if necessary

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container className="custom-container">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img 
            src={logo} 
            alt="Logo" 
            width="50" 
            height="35" 
            className="me-2"
          />
          Asesoria de Compra de Autos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/" className="btn btn-primary btn-small">Contáctanos Ahora</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
