import React, { useEffect, useState } from 'react';
import FarmerService from '../../Service/FarmerService';
import { Col, Container, ListGroup, ListGroupItem, Row, Card } from "react-bootstrap";
import { Button, CardBody } from "reactstrap"
import View from './View';
import BidderService from '../../Service/BidderService'
import MyCart from './MyCart';
import { Link, useNavigate } from 'react-router-dom';
import "./Bidder.css"
import { ToastContainer } from 'react-toastify';

function Bidder() {

  const [product, setProduct] = useState([])
  const [bidders, setBidder] = useState([])
  const [buyer_id, setbuyer_id] = useState('')
  const [newName, setname] = useState('')
const [highestBid, sethighestbid] = useState([])

const [newhighestBid, setnewhighestBid] = useState('')

let user = JSON.parse(localStorage.getItem("id"));
    let name = JSON.stringify(localStorage.getItem('name'));
  useEffect(() => {

    
    let newName=name.toLocaleUpperCase();
    console.log(name);
    console.log(user);
    setname(newName);
    setbuyer_id(user);
    FarmerService.getProduct().then(res => {
      setProduct(res.data);
      console.log(res.data);}
      )
      


console.log(highestBid)


bidders.map((data) =>
BidderService.getHighestbid(data).then(res=>
  {
     console.log(res.data) 
    // sethighestbid(res.data)
  
  }
    ))

    


  })

 
  function Logout() {
    localStorage.clear();
  
  }
  function view() {
    var x = document.getElementById("view");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("cart").style.display = "none";

    } else {
      x.style.display = "none";

    }


  }
  function cart() {
    var x = document.getElementById("cart");
    BidderService.getBidd(buyer_id).then(res => {
      setBidder(res.data);
      console.log(res.data);
    })
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("view").style.display = "none";


    } else {
      x.style.display = "none";

    }


  }

  return (
    <Container>

<ToastContainer/>
         <div style={{ textAlign: "right"}}>   <h6 style={{ display:"inline-block" }}>WELCOME {newName} 
         </h6>  
         <button className='zoom' style={{background:"Lightblue",borderRadius:"8px"}} onClick={Logout}><Link to={"/"} style={{color:"black"}}> Logout</Link></button></div>
            
          <Card className='my-2 bg-transparent '>
            <CardBody>
              <h1 style={{ textAlign: "center" }}>P R O D U C T - I N F O</h1>
            </CardBody>
          </Card>
        
      


      <Row>
        <Col md={2}>
          <ListGroup>
            <ListGroupItem className='zoom' onClick={view} >ALL Product</ListGroupItem>
            <ListGroupItem className='zoom' onClick={cart}> MY CART&nbsp;&nbsp;&nbsp;&nbsp; </ListGroupItem>

          </ListGroup>
        </Col>
        <Col md={10}>
          <div id='view' style={{ display: "none" }}>
            {product.length > 0 ? product.map((data) =>
              <View productdata={data } />) : "no Product to bid"}
          </div>
          <div id='cart' style={{ display: "none" }}>
         
            {bidders.length > 0 ? bidders.map((data) => <MyCart productdata={data} />) : "not yet bidd OR LOGIN to view"}

          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Bidder