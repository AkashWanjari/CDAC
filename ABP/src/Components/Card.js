import React from 'react'
import { Card,CardGroup,Button,Row,Col } from 'react-bootstrap'
import soya from "./img/SOYA.jpg"
import wheat from "./img/wheat.jpg"
import cotton from "./img/cotton.jpg"
import tomato from "./img/tomato.jpg"
import { toast, ToastContainer } from 'react-toastify'

function CardGrop() {

  

  const input=()=>{

toast.error("LOGIN TO ACCESS")


  }
  return (
      <>
      <br/><br/><br/>
      <ToastContainer/>
      <Row>
        <Col md={6}>
    
      <div className="card text-black  mb-3"  >


        <div style={{color:"red"}}>BID EXPIRED &#10060;</div>

        <div class="row no-gutters">
          <div class="col-md-8">
            <img src={soya} class="card-img"  width={"600px"}/>
          </div>
          <div class="col-md-4">
            <div class="card-body">
              <h5 class="card-title">SOYABEANS</h5>
              <p class="card-text"> Quantity :-  50 quintal<br/>
                
                Highest BID :- Rs. 7000<br />
                Base price :-Rs. 6000
              </p>
              <input type="number" className="form-control"  disabled="false"
                
               />
<br/>
              <Button variant="primary"  onClick={input} >BID</Button>
              <hr/>
             Current Winner ID:<b>42</b>
             <hr/>
              
              <Button variant="secondary"  >Check Current winner</Button>
            </div>
          </div>
        </div>
        <div className="card-footer bg-transparent border-success"><b>About :-</b> </div>

      </div>
</Col>
      <Col md={6}>

      <div className="card text-black  mb-3"  >


<div style={{color:"red"}}>BID EXPIRED &#10060;</div>

<div class="row no-gutters">
  <div class="col-md-8">
    <img src={tomato} class="card-img"  width={"400px"}/>
  </div>
  <div class="col-md-4">
    <div class="card-body">
      <h5 class="card-title">TOMATOES</h5>
      <p class="card-text"> Quantity :- 4 quintal<br/>
        
        Highest BID :- Rs. 4000<br />
        Base price :-Rs. 3000
      </p>
      <input type="number" className="form-control" disabled="false"
        
       />
<br/>
      <Button variant="primary"  onClick={input} >BID</Button>
      <hr/>
     Current Winner:<b></b>
     <hr/>
      
      <Button variant="secondary"  >Check Current winner</Button>
    </div>
  </div>
</div>
<div className="card-footer bg-transparent border-success"><b>About :-</b> </div>

</div>
</Col>

</Row>
<Row>
        <Col md={6}>
    
      <div className="card text-black  mb-3"  >


        <div style={{color:"red"}}>BID EXPIRED &#10060;</div>

        <div class="row no-gutters">
          <div class="col-md-8">
            <img src={cotton} class="card-img"  width={"600px"}/>
          </div>
          <div class="col-md-4">
            <div class="card-body">
              <h5 class="card-title">COTTON</h5>
              <p class="card-text"> Quantity :- 3 quintal <br/>
                
                Highest BID :- Rs.25050<br />
                Base price :-Rs. 23400
              </p>
              <input type="number" className="form-control"  disabled="false"
                
               />
<br/>
              <Button variant="primary"  onClick={input} >BID</Button>
              <hr/>
             Current Winner ID:<b>10</b>
             <hr/>
              
              <Button variant="secondary"  >Check Current winner</Button>
            </div>
          </div>
        </div>
        <div className="card-footer bg-transparent border-success"><b>About :- </b> </div>

      </div>
</Col>
      <Col md={6}>

      <div className="card text-black  mb-3"  >


<div style={{color:"red"}}>BID EXPIRED &#10060;</div>

<div class="row no-gutters">
  <div class="col-md-8">
    <img src={wheat} class="card-img"  width={"600px"}/>
  </div>
  <div class="col-md-4">
    <div class="card-body">
      <h5 class="card-title">WHEAT</h5>
      <p class="card-text"> Quantity :-40 qunital <br/>
        
        Highest BID :-Rs. 4000<br />
        Base price :-Rs. 3000
      </p>
      <input type="number" className="form-control"  disabled="false"
        
       />
<br/>
      <Button variant="primary"   onClick={input}  >BID</Button>
      <hr/>
     Current Winner ID:<b>23</b>
     <hr/>
      
      <Button variant="secondary"  >Check Current winner</Button>
    </div>
  </div>
</div>
<div className="card-footer bg-transparent border-success"><b>About :-</b> </div>

</div>
</Col>

</Row>
  </>
  )
}

export default CardGrop