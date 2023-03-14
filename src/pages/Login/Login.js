import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [signInWithEmailAndPassword, user, loading, error] =
     useSignInWithEmailAndPassword(auth);
    
     const navigate=useNavigate();
     const location=useLocation();
     const from=location.state?.from?.pathname || '/';
     const handleEmail=(event)=>{
       setEmail(event.target.value);
     }
     const handlePassword=(event)=>{
       setPassword(event.target.value);
     }
     if(user){
      //  navigate(from,{replace:true})
     }
     if(loading){
       <Spinner
         style={{ height: "50px" }}
         className="w-50"
         animation="border"
         variant="success"
       />;
     }
     const handleLogin=async(event)=>{
       event.preventDefault();
      await signInWithEmailAndPassword(email,password);
      const { data } = await axios.post("https://ware-house-u1xf.onrender.com/login",{email});
      localStorage.setItem('accessToken',data.accessToken);
      navigate(from, { replace: true });
        
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

          <Button
            variant="success"
            type="submit"
            size="lg"
            className="my-3 rounded-pill"
          >
            Log In
          </Button>
        </Form>
      </div>
      <div>
        <p class=" mt-4  text-danger">
          {error?.message }
        </p>
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