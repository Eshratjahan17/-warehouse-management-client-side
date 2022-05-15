
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import dribble from '../../images/dribble.svg';
import fb from '../../images/fb.svg';
import envelop from '../../images/icons/envelop.svg';
import fax from '../../images/icons/fax.svg';
import location from '../../images/icons/location.svg';
import phone from '../../images/icons/phone.svg';
import watch from '../../images/icons/watch.svg';
import printerest from '../../images/printerest.svg';
import twiteer from '../../images/twiteer.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer mt-5">
      <Container>
        <Row md={3} sm={12} lg={3}>
          <Col className="about-us" xs={12}>
            <div>
              <h3 className="mb-2 mt-5 text-start">SB warehouse</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nisi
                saepe sapiente cupiditate odit quasi fuga exercitationem ad?
                Adipisci suscipit fugiat eveniet aperiam voluptatum eaque
                delectus! Itaque, nisi accusantium. Recusandae.
              </p>
            </div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Product name "
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button className="search-btn" id="button-addon2">
                Search
              </button>
            </InputGroup>
          </Col>
          <Col xs={12} className="my-5">
            <h5>Quick Access</h5>
            <div className="quick-access ">
              <a href="#">Home</a>
              <a href="/blogs">FAQ</a>
              <a href="/manageinventory">Products</a>
              <a href="#">Reviwes</a>
              <a href="#">About Us</a>
              <a href="/signup">Sign up</a>
            </div>
          </Col>
          <Col xs={12} className="my-5 location">
            <h5 className="text-start ms-5 mb-3 ">Our Location</h5>
            <p>
              <img src={location} alt="" /> 14 Tottenham Court, London, England.
            </p>
            <p>
              <img src={fax} alt="" />
              (102) 6666 8888
            </p>
            <p>
              <img src={envelop} alt="" />
              info@zooka.com
            </p>
            <p>
              <img src={phone} alt="" />
              (102) 8888 9999
            </p>
            <p>
              <img src={watch} alt="" />
              Mon - Sat: 9:00 - 18:00
            </p>
          </Col>
        </Row>
        <hr></hr>
        <div className="d-flex justify-content-center">
          <div className="social-icon d-flex mt-4 ">
            <a href="#">
              <img src={fb} alt="" />
            </a>
            <a href="#">
              <img src={dribble} alt="" />
            </a>
            <a href="#">
              <img src={printerest} alt="" />
            </a>
            <a href="#">
              <img src={twiteer} alt="" />
            </a>
          </div>
        </div>
        <small>&copy;copyright Eshrat jahan2022. All rights reserved.</small>
      </Container>
    </div>
  );
};

export default Footer;