import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useCart } from "../CartContext";

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

function ItemListContainer() {
  const { id: categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {

      const filteredProducts = categoryId
        ? products.filter((product) => product.category === categoryId)
        : products;

      setItems(filteredProducts);
      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (items.length === 0) {
    return <div>No se encontraron productos en esta categoría</div>;
  }

  return (
    <Container className="my-4">
      <h1>Lista de Productos</h1>
      <Row>
        {items.map((item) => (
          <Col md={3} className="mb-4" key={item.id}>
            <Card className="shadow-sm rounded">
              <Card.Img
                variant="top"
                src={item.imageUrl}
                alt={item.name}
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title className="mb-3">{item.name}</Card.Title>
                <Card.Text className="mb-3">{item.description}</Card.Text>
                <Card.Text className="mb-3">
                  <strong>Price: ${item.price}</strong>
                </Card.Text>
                <div className="d-flex flex-column gap-2">
                  <Button variant="primary" as={Link} to={`/item/${item.id}`}>
                    Ver Detalles
                  </Button>
                  <Button variant="success" onClick={() => addToCart(item)}>
                    Agregar al Carrito
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemListContainer;
