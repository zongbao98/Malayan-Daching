import React from 'react';
import { Link } from 'react-router-dom'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Logo Images
import logo from '../Assets/Images/mdc-logo.png';

const Header = () => {
    return (
        // Navigation Bar
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          alt="Logo"
          style={{ height: '40px' }} // Set the height of the logo
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/engineer">Engineer</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;