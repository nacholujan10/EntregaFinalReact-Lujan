import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { useCart } from "../context/CartContext";

import maizImage from "../assets/maiz.png";
import sojaImage from "../assets/soja.png";
import trigoImage from "../assets/trigo.png";
import sorgoImage from "../assets/sorgo.png";

const products = [
  {
    id: 1,
    name: "Maiz",
    category: "cereales",
    description: "Descripcion de Maiz",
    price: 300,
    imageUrl: maizImage,
  },
  {
    id: 2,
    name: "Soja",
    category: "oleoginosas",
    description: "Descripcion de Soja",
    price: 400,
    imageUrl: sojaImage,
  },
  {
    id: 3,
    name: "Trigo",
    category: "cereales",
    description: "Descripcion de Trigo",
    price: 500,
    imageUrl: trigoImage,
  },
  {
    id: 4,
    name: "Sorgo",
    category: "granos",
    description: "Descripcion de Sorgo",
    price: 450,
    imageUrl: sorgoImage,
  },
];

function ItemDetailContainer() {
  const { id: itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);

    const fetchItem = () => {
      const itemDetails = products.find(
        (product) => product.id === parseInt(itemId, 10)
      );
      if (itemDetails) {
        setItem(itemDetails);
      } else {
        setItem(null);
      }
      setLoading(false);
    };

    fetchItem();
  }, [itemId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Container>
      <h1 className="my-4">Detalles del Producto</h1>
      <Card className="shadow-sm rounded">
        <Card.Img
          variant="top"
          src={item.imageUrl}
          alt={item.name}
          style={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
            marginRight: "20px",
          }}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>
            <strong>Price: ${item.price}</strong>
          </Card.Text>
          <Button variant="primary" as={Link} to="/">
            Volver a la Lista
          </Button>
          <Button
            variant="success"
            onClick={() => addToCart(item)}
            style={{ marginLeft: "10px" }}
          >
            Agregar al Carrito
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default ItemDetailContainer;
