import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavbarComponent({ cartItemsCount }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Numeral Agro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/cereales">Cereales</Nav.Link>
            <Nav.Link as={Link} to="/category/oleoginosas">Oleoginosas</Nav.Link>
            <Nav.Link as={Link} to="/category/granos">Granos</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget cartItemsCount={cartItemsCount} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

