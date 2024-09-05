import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const { cartQuantity } = useCartContext();

  return (
    <Link to="/cart">
      <FaShoppingCart />
      {cartQuantity > 0 && <span>({cartQuantity})</span>}
    </Link>
  );
};

export default CartWidget;

