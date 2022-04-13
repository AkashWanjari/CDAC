import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row, Card } from "react-bootstrap";
import { CardBody } from "reactstrap"
import './Menu.css';
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import FarmerService from '../../Service/FarmerService'
import { Link, useNavigate } from 'react-router-dom';

const Menus = () => {
  const [product, setProduct] = useState('')
  const [newName, setnewName] = useState('')

  useEffect(() => {

    let user = JSON.parse(localStorage.getItem("id"));
    let name = JSON.stringify(localStorage.getItem('name'));
    const newname1 = name.replace(/"/g, "");
   
    setnewName(newname1.toLocaleUpperCase());
    FarmerService.getProductbyFarmerid(newname1).then(res => {
      setProduct(res.data)
      console.log(res.data);
    })  })





  function addproduct() {
    var x = document.getElementById("addproduct");



    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("view").style.display = "none";

    } else {
      x.style.display = "none";

    }



}
function Logout() {
  localStorage.clear();
  
}

function view() {
  var x = document.getElementById("view");



  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("addproduct").style.display = "none";
  } else {
    x.style.display = "none";

  }


}

return (
  <Container>
    <Card className='my-2 bg-transparent '>
      <CardBody>
        <h1 style={{ textAlign: "center" }}>Product Details</h1>
      </CardBody>
    </Card>
    <div style={{ textAlign: "right"}}>   <h6 style={{ display:"inline-block" }}>WELCOME {newName}-</h6>  
         <button className='zoom' style={{background:"Lightblue",borderRadius:"8px"}} onClick={Logout}><Link to={"/"} style={{color:"black"}}> Logout</Link></button></div>
            
    <Row>
      <Col md={2}>
        <ListGroup>
          <ListGroupItem  className='zoom' onClick={view}>View Product</ListGroupItem>
          <ListGroupItem  className='zoom' onClick={addproduct}>Add Product</ListGroupItem>

        </ListGroup>
      </Col>
      <Col md={10}>

        <div id="addproduct">
          <AddProduct />
        </div>



        <div id="view">
          {product.length > 0 ? product.map((data) =>
            <ViewProduct productdata={data} />) : "PRODUCT NOT YET ADDED"}
        </div>
      </Col>
    </Row>

  </Container>
)
}
export default Menus;