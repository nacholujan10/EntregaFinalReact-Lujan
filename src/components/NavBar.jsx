import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

function NavbarComponent() {
  const { cart } = useCart();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img
              src="src\assets\logoAmarillo.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="numeral"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/cereales">
              Cereales
            </Nav.Link>
            <Nav.Link as={Link} to="/category/oleoginosas">
              Oleoginosas
            </Nav.Link>
            <Nav.Link as={Link} to="/category/granos">
              Granos
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              Carrito
              {cart.length > 0 && (
                <Badge bg="secondary" className="ms-2">
                  {cart.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
