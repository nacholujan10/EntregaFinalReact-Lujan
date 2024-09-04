import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Usa cualquier ícono que prefieras

function CartWidget({ cartItemsCount }) {
  return (
    <Link to="/cart" className="text-decoration-none">
      <FaShoppingCart size={24} />
      {cartItemsCount > 0 && <span className="ms-1 badge bg-secondary">{cartItemsCount}</span>}
    </Link>
  );
}

export default CartWidget;
