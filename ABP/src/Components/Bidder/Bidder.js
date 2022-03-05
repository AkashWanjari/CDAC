import React,{useEffect,useState} from 'react';
 import FarmerService from '../../Service/FarmerService';
 import { Col, Container, ListGroup, ListGroupItem,Row,Card } from "react-bootstrap";
 import {CardBody} from "reactstrap"
import View from './View';



 function Bidder() {

  const [product ,setProduct]=useState('')
 
 useEffect(() => {
     
         FarmerService.getProduct().then(res=>{
             setProduct(res.data);
             console.log(res.data);
         })
     
 }, [])

    function view(){
        var x = document.getElementById("view");
       
    
    
        if (x.style.display === "none") {
          x.style.display = "block";
         
        } else {
          x.style.display = "none";
       
        }
    
        
    }

  return (
    <Container>
                  <Card className='my-2 bg-warning'>
            <CardBody>
<h1 style={{textAlign: "center"}}>P R O D U C T - I N F O</h1>
</CardBody>
          </Card>
            <Row>
                <Col md={2}>
                <ListGroup>
            <ListGroupItem onClick={view} >ALL Product</ListGroupItem>
            <ListGroupItem >MY CART</ListGroupItem>
            
        </ListGroup>
                </Col>
        <Col md={10}>
            <div id='view' style={{display:"none"}}> 
            {product.length >0 ? product.map((data)=>
            <View productdata={data}/> ) : "no Product to bid"}
            
            </div>
            </Col>
            </Row>
</Container>
  )
}

export default Bidder