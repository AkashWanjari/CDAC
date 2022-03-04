import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Service from "../../Service/Service";
import Carousel from "../Carousel"
import { useNavigate } from "react-router-dom";

export default function LoginNew() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
   

  }

  const navigate =useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    let user ={email, password};
    console.log('user =>' +JSON.stringify(user));
    Service.postUser(user).then(res=>{
      console.log(res.data)
      let path= `farmer`
      navigate(path);
   
    
            
        })
    }
  

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" id="buttonval"  type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
     
    </div>

    
  );
}