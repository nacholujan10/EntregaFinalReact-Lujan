import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item, quantity = 1) => {
    setCartItems((prevCart) => {
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

  const removeItem = (itemId) => {
    setCartItems((prevCart) => prevCart.filter(cartItem => cartItem.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map(cartItem =>
        cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItem, clearCart, updateQuantity, calculateTotal, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
