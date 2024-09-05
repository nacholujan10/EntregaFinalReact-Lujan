import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { db } from '../main';
import { collection, getDocs } from 'firebase/firestore';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const querySnapshot = await getDocs(collection(db, 'categories'));
      setCategories(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchCategories();
  }, []);

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">Numeral Agro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categories/categoria1">Cereales</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/categoria2">Oleoginosas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/categoria3">Granos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


