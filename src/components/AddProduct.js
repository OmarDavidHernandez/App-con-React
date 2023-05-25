import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function AddProduct({ onAddProduct }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(name, quantity, price);
    setName('');
    setQuantity('');
    setPrice('');
  };

  return (
    <Card className="my-5">
      <Card.Header>Añade un nuevo producto</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Añadir Producto
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AddProduct;