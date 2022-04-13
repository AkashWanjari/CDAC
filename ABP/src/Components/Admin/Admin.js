import React, { useEffect,useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import AdminService from '../../Service/AdminService'
import Users from './Users'
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
let adminname=JSON.stringify(localStorage.getItem("name"));
console.log(adminname)



function Logout() {
    localStorage.clear();
  
  }

    const [data, setdata] = useState([]);
useEffect(() => {
    
    AdminService.getUsers().then(res=>{
        console.log(res.data);
        setdata(res.data);
    })
})


  return (
      <>
      <Row>
          <Col md={4}>
          </Col>
          <Col md={7}><h1>ADMIN ACCESS ONLY</h1>
          </Col>
          <Col md={1}>            <button style={{background:"Lightblue",borderRadius:"8px",textAlign:"right"}} onClick={Logout}><Link to={"/"} style={{color:"black"}}> Logout</Link></button>

          </Col>
      </Row>
 
      {adminname == "\"admin\"" ?
<>
    {data.length > 0 ? data.map((data) => <Users productdata={data} />) : "no users availble"}</>
    
    :"TO ACESS YOU need to LOGIN as Admin"
  }
    </>
  )
}

export default Admin