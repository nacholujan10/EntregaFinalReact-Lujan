import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <Row>
      {items.map(item => (
        <Col key={item.id} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={item.imageId} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.price} $</Card.Text>
              <Button as={Link} to={`/item/${item.id}`} variant="primary">Ver Detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;

