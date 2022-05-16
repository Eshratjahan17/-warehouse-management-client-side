import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItems = () => {
  const handlePost=(event)=>{
    event.preventDefault();
    const productName = event.target.productName.value;
    const supplierName = event.target.supplierName.value;
    const about = event.target.about.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const picture = event.target.picture.value;
   const productDetail= {productName, supplierName, about, price, quantity, picture};
   fetch("http://localhost:5000/product", {
     method: "POST",
     headers: {
       "Content-type": "application/json; charset=UTF-8",
     },
     body:JSON.stringify(productDetail)
   })
   .then(res=>res.json())
   .then(data =>console.log(data));

  }
  return (
    <div>
      <h1>Add item Here!!</h1>
      <Form onSubmit={handlePost} className="mx-auto w-50 signup-form">
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="productName"
            placeholder="Enter Product Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Supplier Name</Form.Label>
          <Form.Control
            type="text"
            name="supplierName"
            placeholder="Supplier Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>About product</Form.Label>
          <Form.Control type="text" name="about" placeholder="About" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sold quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            placeholder="sold quantity"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="url" name="picture" placeholder="Image url" />
        </Form.Group>

        <Button variant="success" type="submit">
          Add item
        </Button>
      </Form>
    </div>
  );
};

export default AddItems;