
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Headers.css';

const Headers = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid >
        <Navbar.Brand href="#">SB WareHouse </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link className="nav" to="/home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              <Link className="nav" to="/manageinventory">
                Phones
              </Link>
            </Nav.Link>

            <Nav.Link href="#reviwes">
              <Link className="nav" to="/reviwes">
                Reviwes
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="d-flex ">
            <NavDropdown
              title="User Name"
              className="me-2"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">
                <Link className="dropdown" to="/myitems">
                  My Items
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Link className="dropdown" to="/addnewitem">
                  Add Items
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                <Link className="dropdown" to="/manageinventory">
                  Manage Items
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-success">Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Headers;