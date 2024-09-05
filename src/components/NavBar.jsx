import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../main';
import { collection, getDocs } from 'firebase/firestore';
import CartWidget from './CartWidget';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const querySnapshot = await getDocs(collection(db, 'categories'));
      setCategories(querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
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
              {categories.map(category => (
                <NavDropdown.Item key={category.id} as={Link} to={`/categories/${category.key}`}>
                  {category.description}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          {}
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


