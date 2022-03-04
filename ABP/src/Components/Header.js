import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
// import agri  from './img/agridept.png'
import logo from '../logo.svg';
import { BrowserRouter as Router,  Route, Link ,Routes,Version1Layout,Version2Layout} from "react-router-dom";
import Login from './Login and Register/LoginNew';
import SignUp from './Login and Register/Singup1';
import BSignUp from './Login and Register/bsignup';
import Card from './Card'
import Carousel from './Carousel'
import Farmer from './Farmer/Menus'
import AddProduct from './Farmer/AddProduct'
import DeleteProduct from './Farmer/DeleteProduct';
import ViewProduct from './Farmer/ViewProduct';
import EditProduct from "./Farmer/EditProduct"
export default function Header() {
  
  return (
    <>
     <Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Container>
  <Navbar.Brand>
          
          <img src={logo} style={{width:100, marginTop: -7 ,backgroundColor:"white",borderRadius:"50%"}} />
          
        </Navbar.Brand>
        <Nav>
          
    <Navbar.Brand href="#home" style={{ textEmphasisColor:"white",textAlign:"center" }}>Agriculture <br/> Bidding<br/>  Portal</Navbar.Brand>
    </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className="me-auto">
      <Nav.Link href="../App.js">Home</Nav.Link>
      <Nav.Link href="#pricing">About Us</Nav.Link>
      
    </Nav>
   
    <Nav>
    <NavDropdown title="Log In/Sign Up" id="collasible-nav-dropdown">
    <Link className="nav-link " to={"/sign-in"}><p style={{color:"black"}}>Sign in</p></Link>
    <Link className="nav-link " to={"/sign-up"}><p style={{color:"black"}}>Farmer Sign up</p></Link>
    <Link className="nav-link" to={"/bsign-up"}><p style={{color:"black"}}>Bidder Sign up</p></Link>
      </NavDropdown> 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


{/* <img src={agri} alt="agri" /> */}
<Routes>

            <Route exact path='/' element={<Carousel/>} />
            <Route path="/sign-in/" element={<Login/>} />
            <Route path="/sign-in/farmer" element={<Farmer/>} />

  
          
            <Route path="/sign-up/Login" element={<Login/>} />
            <Route path="/bsign-up/Login" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/bsign-up" element={<BSignUp/>} />
            

           <Route path="/viewProduct" element={<ViewProduct/>} exact></Route>
          <Route path="/addProduct" element={<AddProduct/>} exact></Route> 
          <Route path="/editProduct" element={<EditProduct/>} exact></Route>
          <Route path="/DeleteProduct" element={<DeleteProduct/>} exact></Route> 
          
          </Routes>
</Router>
</>
  );
}
