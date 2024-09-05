import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const ItemList = ({ items }) => {
  const { addItemToCart } = useCartContext();

  return (
    <Row>
      {items.map(item => (
        <Col key={item.id} md={4} className="mb-4">
          <Card className="product-card">
            <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.price}$</Card.Text>
              {}
              <Link to={`/item/${item.id}`}>
                <Button variant="primary">Ver detalles</Button>
              </Link>
              {}
              <Button
                variant="success"
                className="mt-2"
                onClick={() => addItemToCart(item, 1)}
              >
                Agregar al Carrito
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;
