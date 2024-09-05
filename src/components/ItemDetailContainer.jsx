import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../main';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      const docRef = doc(db, 'items', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        setItem(null);
      }
      setLoading(false);
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return <div>Cargando detalles del producto...</div>;
  }

  if (!item) {
    return <div>El producto no existe</div>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

