import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;