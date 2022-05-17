
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ItemDetails.css';


const ItemDetails = () => {
  let {id}=useParams();
  
  console.log(id);
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    const url = `http://localhost:5000/inventory/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));

  },[]);
 
  
  
  return (
    <div>
      <div>
        <Row xs={1} md={2} lg={2} className="d-flex justify-content-center">
          <Col>
            <Card className="card-div ">
              <Card.Img
                className="card-img"
                variant="top"
                src={product.picture}
              />
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {product.SupplierName}
                </Card.Subtitle>
                <Card.Text>{product.about}</Card.Text>

                <p>
                  <span>Id:</span>
                  {product._id}
                </p>
                <p>
                  <span>Quantity:</span>
                  {product.quantity}
                </p>
                <p>
                  <span>price:</span>
                  {product.price}
                </p>

                <Button className="btn-update" size="lg">
                  <a className="update-btn" href="/inventory/:id">
                    Deliverd
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="w-50 mx-auto">
          <h3>Restock items</h3>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter Quantity "
              aria-label="Product Quantity"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Restock
            </Button>
          </InputGroup>
          <h3 className="my-5">
            <Link to="/manageinventory">Manage Items</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;