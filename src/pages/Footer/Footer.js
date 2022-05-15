import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Container>
        <Row md={4} sm={12} lg={4}>
          <Col xs={12}>1 of 3</Col>
          <Col xs={12}>2 of 3</Col>
          <Col xs={12}>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;