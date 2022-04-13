import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import logo from '../logo.svg';
import { BrowserRouter as Router,  Route, Link ,Routes} from "react-router-dom";
import Login from './Login and Register/LoginNew';
import SignUp from './Login and Register/Singup1';
import BSignUp from './Login and Register/bsignup';
import CarCARD from './CarCARD'
import Farmer from './Farmer/Menus'
import AddProduct from './Farmer/AddProduct'
import ViewProduct from './Farmer/ViewProduct';
import Bidder from './Bidder/Bidder';
import "./header.css";
import Admin from './Admin/Admin'
export default function Header() {

 
  
  return (
    <>
     <Router>
    <br/> <br/>  <br/>  <br/>  <br/>  <br/> <br/>
    {/* for background color  for navbar add  bg="dark" */}
         <Navbar  collapseOnSelect expand="lg"   style={{fontSize: "20px" ,fontWeight:"bold" }} fixed="top"    >

  <Container>
  <Navbar.Brand>
          
          <img src={logo}  style={{width:100, marginTop: -7 ,backgroundColor:"white",borderRadius:"50%"}} />
          
        </Navbar.Brand>
        <Nav>
          
    <Navbar.Brand href="../" style={{ textEmphasisColor:"white",textAlign:"center" }}>Agriculture <br/> Bidding<br/>  Portal</Navbar.Brand>
    </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className="me-auto">
      <Nav.Link href="../">Home</Nav.Link>
      <Nav.Link href="#aboutus">About Us</Nav.Link>
      
    </Nav>
   
    <Nav >
      
    <NavDropdown  title="Log In/Sign Up" id="collasible-nav-dropdown">
    <Link className="nav-link " to={"/sign-in"}><p style={{color:"black"}}>Sign in</p></Link>
    <Link className="nav-link " to={"/sign-up"}><p style={{color:"black"}}>Farmer Sign up</p></Link>
    <Link className="nav-link" to={"/bsign-up"}><p style={{color:"black"}}>Bidder Sign up</p></Link>
      </NavDropdown> 
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>


<Routes>

            <Route exact path='/' element={<CarCARD/>} />
            <Route path="/sign-in/" element={<Login/>} />
            <Route path="/sign-in/farmer" element={<Farmer/>} />
            <Route path="/sign-in/bidder" element={<Bidder/>} />
            <Route path="/sign-up/Login/farmer" element={<Farmer/>} />
            <Route path="/bsign-up/Login/bidder" element={<Bidder/>} />
            <Route path="/sign-up/Login" element={<Login/>} />
            <Route path="/bsign-up/Login" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/bsign-up" element={<BSignUp/>} />
            <Route path="/viewProduct" element={<ViewProduct/>} exact></Route>
          <Route path="/addProduct" element={<AddProduct/>} exact></Route> 
          <Route path="/sign-in/admin" element={<Admin/>} />
          
            

           
          
          </Routes>
</Router>
</>
  );
}
