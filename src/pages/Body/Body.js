import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import img1 from '../../images/banner/1.jpg';
import img2 from "../../images/banner/2.jpg";
import img3 from "../../images/banner/3.jpg";
import './Body.css';

const Body = () => {

  const [products,setProducts]=useData();
  console.log(products);
  
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* cards */}
      <Row xs={1} md={3} lg={3} className="">
        {products.map((product) => (
          <Col>
            <Card className="card-div ">
              <Card.Img variant="top" src={product.picture} />
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {product.supplierName}
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <p>
                    <span>Price:</span>${product.price}
                  </p>
                  <p>
                    <span>Quantity:</span>
                    {product.quantity}
                  </p>
                </div>

                <a className="btn-update" href="/inventory/:id">
                  Update button
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="my-5">
        <Link to="/manageinventory">Manage Items</Link>
      </h3>
    </div>
  );
};

export default Body;