import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity = 1) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find(cartItem => cartItem.id === item.id);
      if (itemInCart) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(cartItem =>
        cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity, cartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};


// Estoy usando un carrito de manera global para poder interactuar con todos los componentes.