
import React from 'react';
import { Button, Card, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import './ItemDetails.css';

const ItemDetails = () => {
  return (
    <div>
      <Row xs={1} md={2} lg={2} className="d-flex justify-content-center">
        <Col>
          <Card className="card-div ">
            <Card.Img
              variant="top"
              src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-x-space-gray.png"
            />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Supplier Name
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <p>
                <span>Id:</span>FSAA$_AD
              </p>
              <p>
                <span>Quantity:</span>5
              </p>
              <p>
                <span>Quantity:</span>5
              </p>

              <Button className="btn-update" size="lg">
                <a className="update-btn" href="/inventory/:id">
                  {" "}
                  Deliverd
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className='w-50 mx-auto'>
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
      </div>
    </div>
  );
};

export default ItemDetails;