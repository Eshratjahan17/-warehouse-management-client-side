import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
     const [sendEmailVerification, sending, verificationerror] =
       useSendEmailVerification(auth);
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";


  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }
  const handleConfirmPassword=(event)=>{
    setConfirmPassword(event.target.value);
  }
  const handlesubmit=async(event)=>{
    event.preventDefault();
    if(password === confirmPassword && password.length>6)
    {
       createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        toast("Sent email");

    }else{
      setError("please give a valid password");
     toast("Please enter a valid password");
      return false;

    }
   
  }
  

   if (user) {
     navigate(from, { replace: true });
   }
   if (loading || sending) {
     <Spinner
       style={{ height: "50px" }}
       className="w-50"
       animation="border"
       variant="success"
     />;
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

          <Button
            variant="success"
            type="submit"
            size="lg"
            className="my-3 rounded-pill"
          >
            Sign up
          </Button>
        </Form>
      </div>
      
      <p className='text-danger mt-3'>{googleError?.message}</p>
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
        onClick={() =>
    signInWithGoogle() }
        className="google-btn mt-3 rounded-pill"
        variant="primary"
        size="lg"
      >
        <img className="me-2 mb-1" src={google} alt="" />
        Sign up with Google
      </Button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Signup;