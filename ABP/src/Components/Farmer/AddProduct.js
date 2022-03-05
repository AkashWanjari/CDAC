import React ,{useState} from 'react'
import "../Login and Register/Login.css"
import FarmerService from '../../Service/FarmerService';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [pname, setPname] = useState("");
  const [min_price, setMinPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [endBDate, setEndbdate] = useState("");
  // const [img,setImg] = useState(" ");
  const [img, setFile] = useState();
  const [fileName, setFileName] = useState("");
  
  const onChangePicture = e => {
   
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);
  };

const navigate =useNavigate();
  function handleSubmit(event){
    event.preventDefault();
    // const img = new FormData();
    //     img.append("file", file);
    //     img.append("fileName", fileName);

    let product = {
      pname,
      min_price,
     quantity,
      endBDate,
      img
    };
    


console.log(img);
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
               
    
     <input type="date" className="form-control" placeholder="Select EndDate"  value={endBDate}  onChange={(e) => setEndbdate(e.target.value)}  />
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