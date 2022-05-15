import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/Google_Logo.svg';
import './signup.css';

const Signup = () => {
  const [email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error,setError]=useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading, googleError] = useSignInWithGoogle(auth);


  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }
  const handleConfirmPassword=(event)=>{
    setConfirmPassword(event.target.value);
  }
  const handlesubmit=(event)=>{
    event.preventDefault();
    createUserWithEmailAndPassword(email,password);
  }
  return (
    <div className="signup">
      <h1 className="my-4">Please sign up !!!</h1>
      <div>
        <Form onSubmit={handlesubmit} className="mx-auto w-50 signup-form">
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onBlur={handleConfirmPassword}
              type="password"
              placeholder="Re-type Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" size="lg" className="my-3 ">
            Sign up
          </Button>
        </Form>
      </div>

      <h5 className="my-3">
        Already have an account?
        <span>
          <Link className="text-decoration-none" to="/login">
            Log In
          </Link>
        </span>
      </h5>
      <div className="d-flex container ">
        <hr className="w-50 hr-line" />
        or <hr className="w-50  hr-line" />
      </div>

      <Button
        onClick={() => signInWithGoogle()}
        className="google-btn mt-3"
        variant="primary"
        size="lg"
      >
        <img className="me-2 mb-1" src={google} alt="" />
        Sign up with Google
      </Button>
    </div>
  );
};

export default Signup;