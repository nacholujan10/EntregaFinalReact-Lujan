import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cartQuantity } = useCartContext();

  return (
    <Link to="/cart" className="cart-icon">
      <FaShoppingCart style={{ fontSize: '1.5rem', color: 'white' }} />
      {}
      {cartQuantity > 0 && <span>({cartQuantity})</span>}
    </Link>
  );
};

export default CartWidget;