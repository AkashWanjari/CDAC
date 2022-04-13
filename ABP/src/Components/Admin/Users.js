import {  Button } from 'react-bootstrap'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AdminService from '../../Service/AdminService'

const Users = ({productdata}) => {
    const del=()=>{
        AdminService.deletebyid(productdata.id).then(res=>{
            console.log(res.data)
            alert("Delete Sucessfully")

        })
    }



  return (
<>

    
    {productdata.type == "farmer" ? 
    <Row>
        <Col md={4}></Col>
    <Col md={2}>
    <div className="card-text" ><div style={{display:"inline-block"}}>{productdata.fname}</div>  </div> </Col>
<Col md={1}>  {productdata.type}
</Col>
<Col md={4}> <Button onClick={del} >DELETE</Button>
</Col>

</Row>: ""}
    
{productdata.type == "bidder" ? 
    <Row>
        <Col md={4}></Col>
    <Col md={2}>
    <div className="card-text" >< div style={{display:"inline-block"}}>{productdata.fname} </div> </div> </Col>
<Col md={1}>  {productdata.type}
</Col>
<Col md={1}> <Button onClick={del}>DELETE</Button>
</Col>

</Row>: ""}










    
<br/>

</>
  )
}

export default Users