
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Headers.css';

const Headers = () => {
  const [user]=useAuthState(auth);
  console.log(user);
  const handleSignout=()=>{
    signOut(auth);
  }
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
                Products
              </Link>
            </Nav.Link>

            <Nav.Link href="#reviwes">
              <Link className="nav" to="/reviwes">
                Reviwes
              </Link>
            </Nav.Link>
          </Nav>
          {
            user?
            <Nav className="d-flex ">
            <NavDropdown
              title="User Name"
              className="me-2"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item >
                <Link className="dropdown" to="/myitems">
                  My Items
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link className="dropdown" to="/addnewitem">
                  Add Items
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <Link className="dropdown" to="/manageinventory">
                  Manage Items
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Button onClick={handleSignout}variant="outline-success">Sign Out</Button>
          </Nav>

            :
            
              <Link className=' login-btn' to="/login">Log in</Link>
            
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Headers;