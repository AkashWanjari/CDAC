import React from "react";
import { Col, Container, ListGroup, ListGroupItem,Row,Card } from "react-bootstrap";
import {CardBody} from "reactstrap"
import './Menu.css';
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
const Menus = () => {

    function addproduct(){
        var x = document.getElementById("addproduct");
       
    
       
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("Delete").style.display="none";
          document.getElementById("view").style.display="none";
          document.getElementById("edit").style.display="none";
          
        } else {
          x.style.display = "none";
        
        }
    
        
    }

    function edit(){
        var x = document.getElementById("edit");
       
    
    
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("Delete").style.display="none";
          document.getElementById("view").style.display="none";
          document.getElementById("addproduct").style.display="none";
        } else {
          x.style.display = "none";
        
        }
    
        
    }

    function Delete(){
        var x = document.getElementById("Delete");
       
    
    
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("addproduct").style.display="none";
          document.getElementById("view").style.display="none";
          document.getElementById("edit").style.display="none";
        } else {
          x.style.display = "none";
        
        }
    
        
    }

    function view(){
        var x = document.getElementById("view");
       
    
    
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("Delete").style.display="none";
          document.getElementById("addproduct").style.display="none";
        } else {
          x.style.display = "none";
       
        }
    
        
    }

    return(
        <Container>
                  <Card className='my-2 bg-warning'>
            <CardBody>
<h1 style={{textAlign: "center"}}>Product Details</h1>
</CardBody>
          </Card>
            <Row>
                <Col md={2}>
                <ListGroup>
            <ListGroupItem onClick={Delete} >Delete Product</ListGroupItem>
            <ListGroupItem onClick={edit}>Edit Product</ListGroupItem>
            <ListGroupItem onClick={addproduct}>Add Product</ListGroupItem>
            <ListGroupItem onClick={view}>View Product</ListGroupItem>
        </ListGroup>
                </Col>
        <Col md={10}>

        <div id="addproduct">
        <AddProduct/>
        </div>
        
        <div id="Delete" >
        <DeleteProduct/>
        </div>
     
        <div id="edit">
        <EditProduct/>
        </div>
        
        <div id="view">
        <ViewProduct/>
        </div>
        </Col>
            </Row>
       
        </Container>
    )
}
export default Menus;