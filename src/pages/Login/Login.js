import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="signup">
      <h1 className="my-4">Please Log in !!!</h1>
      <div>
        <Form className="mx-auto w-50 signup-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" size="lg" className="my-3 ">
            Log In
          </Button>
        </Form>
      </div>
      <div>
        <h5 className="my-3">
          Didn't have any account?
          <span>
            <Link className="text-decoration-none" to="/signup">
              Sign up
            </Link>
          </span>
        </h5>
      </div>
      </div>

      
  );
};

export default Login;