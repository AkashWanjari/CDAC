import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from "react-bootstrap/Button";
import "./Login.css";
import Service from "../../Service/Service";
import Carousel from "../Carousel"
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LoginNew() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logindata, setlogindata] = useState([])

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
      setlogindata(res.data)
      if(res.data.length == 0){
       toast.error("invalid username and password");
      }else{
        toast("login sucessfully");
      }
logindata.map((dat)=>{
  
  if(res.data.length > 0 && dat.type === "farmer"){
    localStorage.setItem("id",dat.id);
    localStorage.setItem("name",dat.fname);
    // let path= `farmer`
    navigate(`farmer`);
    
    }
    else if(res.data.length > 0 && dat.type === "bidder"){
      localStorage.setItem("id",dat.id);
      localStorage.setItem("name",dat.fname);
     
      let path= `bidder`
    navigate(path);
   
    }
    else if(res.data.length > 0 && dat.type === "admin"){
      // localStorage.setItem("id",dat.id);
      localStorage.setItem("name",dat.fname);
      
      // console.log(dat.fname)

     
      let path= `admin`
    navigate(path);
   
    }
    else if(res.data.length == 0){
      console.log("error")
    }
   
    })   
        }).catch(error => console.error('(1) Inside error:', error))

        
    }
  

  return (
    <>
    <ToastContainer/>
    <div className="Login">
      
      <Form onSubmit={handleSubmit}>
      <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com"   
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password"   
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
  </FloatingLabel>


        <Button block size="lg" id="buttonval"  type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      
    </div>

    </>
  );
}