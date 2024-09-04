import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ItemList({ items, addToCart }) {
  return (
    <Row>
      {items.map(item => (
        <Col md={3} key={item.id} className="mb-4">
          <Card className="shadow-sm rounded">
            <Card.Img
              variant="top"
              src={item.imageUrl}
              alt={item.name}
              style={{ width: '100%', height: '200px', objectFit: 'contain' }}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text><strong>Price: ${item.price}</strong></Card.Text>
              <Button variant="primary" as={Link} to={`/item/${item.id}`}>
                Ver Detalles
              </Button>
              <Button variant="success" onClick={() => addToCart(item)} className="ms-2">
                Agregar al Carrito
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ItemList;
