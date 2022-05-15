import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../images/banner/1.jpg';
import img2 from '../images/banner/2.jpg';
import img3 from '../images/banner/3.jpg';
import './Body.css';

const Body = () => {
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
              <div className="d-flex justify-content-between">
                <p>
                  <span>Price:</span>$500
                </p>
                <p>
                  <span>Quantity:</span>5
                </p>
              </div>

              
                <a className="btn-update" href="/inventory/:id">
                 
                  Update button
                </a>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h3 className="my-5">
        <Link to="/manageinventory">Manage Items</Link>
      </h3>
    </div>
  );
};

export default Body;