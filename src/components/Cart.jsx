import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Button, Table } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, calculateTotal, removeItem, clearCart } = useCartContext();

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3>Total: ${calculateTotal()}</h3>
          <Button variant="danger" onClick={clearCart}>
            Vaciar Carrito
          </Button>
          <Button variant="success" className="ms-2">
            Finalizar Compra
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
