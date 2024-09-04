import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cartItemsCount } = useContext(CartContext);

  return (
    <Link to="/cart" className="text-decoration-none">
      <FaShoppingCart size={24} />
      {cartItemsCount > 0 && <span className="ms-1 badge bg-secondary">{cartItemsCount}</span>}
    </Link>
  );
}

export default CartWidget;

