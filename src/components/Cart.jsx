import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, ListGroup } from 'react-bootstrap';

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ListGroup>
            {cart.map((item) => (
              <ListGroup.Item key={item.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong>
                    <p>${item.price}</p>
                  </div>
                  <div>
                    <Button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</Button>
                    <Button variant="danger" onClick={() => removeFromCart(item.id)} className="ms-2">Eliminar</Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="warning" onClick={clearCart} className="mt-4">
            Vaciar Carrito
          </Button>
        </>
      )}
    </div>
  );
}

export default Cart;
