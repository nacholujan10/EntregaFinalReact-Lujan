import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemQuantitySelector from './ItemQuantitySelector';
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCartContext();

  const handleAddToCart = () => {
    addItemToCart(item, quantity);
  };

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={item.imageId} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Precio: {item.price} $</Card.Text>
        <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button onClick={handleAddToCart} variant="success">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;

