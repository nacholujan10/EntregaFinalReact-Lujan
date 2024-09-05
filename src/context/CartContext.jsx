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

  // Agregar ítem al carrito
  const addItemToCart = (item, quantity = 1) => {
    setCartItems(prevCart => {
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

  // Actualizar la cantidad de un ítem en el carrito
  const updateItemQuantity = (id, quantity) => {
    setCartItems(prevCart =>
      prevCart.map(cartItem =>
        cartItem.id === id ? { ...cartItem, quantity: Math.max(1, Number(quantity)) } : cartItem
      )
    );
  };

  // Calcular la cantidad total de ítems en el carrito
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calcular el total del carrito (precio total)
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Eliminar un ítem del carrito
  const removeItem = (id) => {
    setCartItems(prevCart => prevCart.filter(cartItem => cartItem.id !== id));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, updateItemQuantity, cartQuantity, calculateTotal, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
