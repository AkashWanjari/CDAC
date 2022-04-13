import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
return (
  
<Carousel variant="dark" style={{marginLeft:"200px",marginRight:"200px"}}  >
  <Carousel.Item >
    <img
      className="d-block w-100 "
      src={require("./img/img1.jpg")}
      alt=""
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("./img/img2.jpg")}
      alt=""
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={require("./img/img3.jpg")}
      alt=""
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
}
