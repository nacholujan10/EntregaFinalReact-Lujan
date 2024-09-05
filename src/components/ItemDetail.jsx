import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { Button, Card } from 'react-bootstrap';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCartContext();

  const handleAddToCart = () => {
    addItemToCart(item, quantity);
  };

  return (
    <Card>
      <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Precio: {item.price}$</Card.Text>
        <Button onClick={handleAddToCart} variant="success">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;