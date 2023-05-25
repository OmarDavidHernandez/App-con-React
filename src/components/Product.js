import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

function Product({ product, onDeleteProduct, onEditProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);

  const handleEdit = () => {
    onEditProduct(product.id, name, quantity, price);
    setIsEditing(false);
  };

  return (
    <Card className="my-3">
      {isEditing ? (
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del Producto</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleEdit}>
              Save
            </Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </Form>
        </Card.Body>
      ) : (
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text> Cantidad: {product.quantity}</Card.Text>
          <Card.Text>Precio: ${product.price}</Card.Text>
          <Button variant="success" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => onDeleteProduct(product.id)} className="ms-2">
            Delete
          </Button>
        </Card.Body>
      )}
    </Card>
  );
}

export default Product;