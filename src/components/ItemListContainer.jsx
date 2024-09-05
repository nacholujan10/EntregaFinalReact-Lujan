import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { db } from '../main';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const itemsCollection = collection(db, 'items');
      let q = query(itemsCollection);

      if (categoryId) {
        q = query(itemsCollection, where('category', '==', categoryId));
      }

      const querySnapshot = await getDocs(q);
      setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
