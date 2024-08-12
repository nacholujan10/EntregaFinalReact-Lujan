import React from 'react';
import { useCart } from './CartContext';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return <div>El carrito está vacío</div>;
  }

  return (
    <Container className="my-4">
      <h1>Carrito</h1>
      <ListGroup>
        {cart.map(item => (
          <ListGroup.Item key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <Button
              variant="danger"
              className="float-end ms-2"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </Button>
            <Button
              variant="secondary"
              className="float-end ms-2"
              onClick={() => updateQuantity(item.id, -1)}
              disabled={item.quantity <= 1}
            >
              -
            </Button>
            <Button
              variant="secondary"
              className="float-end ms-2"
              onClick={() => updateQuantity(item.id, 1)}
            >
              +
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button
        variant="warning"
        className="mt-3"
        onClick={clearCart}
      >
        Vaciar Carrito
      </Button>
      <Link to="/" className="d-block mt-3">Volver a la Tienda</Link>
    </Container>
  );
}

export default Cart;