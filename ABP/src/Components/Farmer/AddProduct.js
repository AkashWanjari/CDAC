import React ,{useState} from 'react'
import "../Login and Register/Login.css"
import FarmerService from '../../Service/FarmerService';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [pname, setPname] = useState("");
  const [min_price, setMinPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [endbdate, setEndbdate] = useState("");
  const [img,setImg] = useState(" ");
  
  const onChangePicture = e => {
   
    setImg(e.target.files[0]);
};

const navigate =useNavigate();
  function handleSubmit(event){
    event.preventDefault();
    
    let product = {
      pname,
      min_price,
     quantity,
      endbdate,
      img
    };

    FarmerService.addProduct(product).then(res => {
      console.log(res);
      console.log(res.data);
let path=`farmer`;
navigate(path); 
      
    })
  
  }

  return (
    <div className="Login">

<form onSubmit={handleSubmit} >
                <h3>ADD Product</h3>

                <div className="form-group">
                    
                     <input type="text" className="form-control" placeholder="Enter Product name" value={pname}  onChange={(e) => setPname(e.target.value)} />
                  
                </div>

                

                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="Enter minprice"  value={min_price}  onChange={(e) => setMinPrice(e.target.value)}/>
                </div>

                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="Enter quantity" value={quantity}  onChange={(e) => setQuantity(e.target.value)} />
                </div>

                <div className="form-group">
               
    
     <input type="date" className="form-control" placeholder="Select EndDate"  value={endbdate}  onChange={(e) => setEndbdate(e.target.value)}  />
                </div>

                <div className="form-group">
                <label>Select Image</label>
    
                <input type="file" className="form-control"  multiple onChange={(onChangePicture)}/>
                </div>

               

             
                <button type="submit" className="btn btn-dark btn-lg btn-block" >ADD</button>
               
            </form>


    </div>
  )
}

export default AddProduct