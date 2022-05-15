import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItems = () => {
  return (
    <div>
      <h1>Add item Here!!</h1>
      <Form className="mx-auto w-50 signup-form">
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Supplier Name</Form.Label>
          <Form.Control type="text" placeholder="Supplier Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>About product</Form.Label>
          <Form.Control type="text" placeholder="About" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sold quantity</Form.Label>
          <Form.Control type="number" placeholder="sold quantity" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="url" placeholder="Image url" />
        </Form.Group>

        <Button variant="success" type="submit">
          Add item
        </Button>
      </Form>
    </div>
  );
};

export default AddItems;