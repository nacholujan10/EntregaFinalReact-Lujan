import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function ItemDetail({ item, addToCart }) {
  return (
    <Card className="shadow-sm rounded">
      <Card.Img
        variant="top"
        src={item.imageUrl}
        alt={item.name}
        style={{ width: '150px', height: '150px', objectFit: 'contain', marginRight: '20px' }}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text><Descripcion description={item.description} /></Card.Text>
        <Card.Text>
          <strong>Price: ${item.price}</strong>
        </Card.Text>
        <ItemQuantitySelector />
        <AddItemButton item={item} addToCart={addToCart} />
      </Card.Body>
    </Card>
  );
}

function ItemQuantitySelector() {
  const [quantity, setQuantity] = React.useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div>
      <Button onClick={decrement} variant="secondary">-</Button>
      <span className="mx-2">{quantity}</span>
      <Button onClick={increment} variant="secondary">+</Button>
    </div>
  );
}

function Descripcion({ description }) {
  return <p>{description}</p>;
}

function AddItemButton({ item, addToCart }) {
  return (
    <Button variant="success" onClick={() => addToCart(item)}>
      Agregar al Carrito
    </Button>
  );
}

export default ItemDetail;
