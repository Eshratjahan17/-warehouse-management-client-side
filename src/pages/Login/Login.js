import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [signInWithEmailAndPassword, user, loading, error] =
     useSignInWithEmailAndPassword(auth);
     const handleEmail=(event)=>{
       setEmail(event.target.value);
     }
     const handlePassword=(event)=>{
       setPassword(event.target.value);
     }
     const handleLogin=(event)=>{
       event.preventDefault();
       signInWithEmailAndPassword(email,password);
     }
  return (
    <div className="signup">
      <h1 className="my-4">Please Log in !!!</h1>
      <div>
        <Form onSubmit={handleLogin} className="mx-auto w-50 signup-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" size="lg" className="my-3 ">
            Log In
          </Button>
        </Form>
      </div>
      <div>
        <p >{error?.message}</p>
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