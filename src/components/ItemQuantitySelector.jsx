import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <InputGroup className="mb-3">
      <Button variant="outline-secondary" onClick={decrement}>-</Button>
      <FormControl value={quantity} readOnly />
      <Button variant="outline-secondary" onClick={increment}>+</Button>
    </InputGroup>
  );
};

export default ItemQuantitySelector;
