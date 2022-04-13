import React, { useEffect, useState } from 'react'
import "../Login and Register/Login.css"
import FarmerService from '../../Service/FarmerService';
import { useNavigate } from 'react-router-dom';
import { Col, Row, ToastContainer} from 'react-bootstrap';
import { Alert } from 'bootstrap';
import "./Add.css"

function AddProduct() {
  const [pname, setPname] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [endBDate, setEndbdate] = useState("");
  const [fname, setfname] = useState("");
  const [discription, setdescription] = useState('')
  const [img, setFile] = useState();
  const [fileName, setFileName] = useState("");
  let id = JSON.parse(localStorage.getItem("id"));
  const onChangePicture = e => {

    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);
  };
  let name = JSON.stringify(localStorage.getItem("name"));
  const newname = name.replace(/"/g, "");
 
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};

  function handleSubmit(event) {
    event.preventDefault();
   
   
    setfname(newname);
    console.log(fname)
    console.log(id)


    let product = {
      pname,
      minPrice,
      quantity,
      endBDate,
      img,

      discription,
      fname
    };




    FarmerService.addProduct(product).then(res => {
      console.log(res);
      console.log(res.data);



    })
    // console.log("inside add");

  }

  

  return (
    

    <>
    
      <h3>ADD PRODUCT</h3>
      <Row>
        <Col md={1}>
          <img src={img} width="300" height="400"></img>
        </Col>
        <Col md={11}>
          <div className="Login" style={{ padding: "0px 0px 0px 0px" }}>

            <form onSubmit={handleSubmit} >


              <div className="form-floating mt-2">

                <input type="text" className="form-control" placeholder="Enter Product name" value={pname} onChange={(e) =>{setPname(e.target.value);setfname(newname);}} />
<label>Enter Product name</label>
              </div>

              

              <div className="form-floating mt-2">

                <input type="number" className="form-control" placeholder="Enter Base price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
             <label>Enter Base price</label>
              </div>

              <div className="form-floating mt-2">

                <input type="number" className="form-control" placeholder="Enter quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <label>Enter quantity</label>   </div>

              <div className="form-floating mt-2">


                <input type="date" className="form-control" placeholder="Select EndDate" min={disablePastDate()} value={endBDate} onChange={(e) => { setEndbdate(e.target.value); }} />
                <label>Select EndDate</label>        </div>

              <div className="form-floating mt-2">
               

                <input type="file" className="form-control" multiple onChange={(onChangePicture)} />
                <label>Select Image</label>
              </div>

              <div className="form-floating mt-2">
              <input type="text" className="form-control" placeholder="Enter all details" value={discription} onChange={(e) => setdescription(e.target.value)} />
              <label>Enter all details</label>  </div>
        

          <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={ () => alert("ADD Sucessfully")}>ADD</button>
          

        </form>
        


      </div>

    </Col>


  </Row >
  </>
  )
}

export default AddProduct