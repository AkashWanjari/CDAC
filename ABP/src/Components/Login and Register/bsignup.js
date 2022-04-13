import React ,{useState} from 'react'
import "./Login.css"
import Service from '../../Service/Service';
import { useNavigate } from 'react-router-dom';
import { Label } from 'reactstrap';
function Bsignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [address, setAddress] = useState("");
  const [idproof, setIdproof] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
 

  function validateForm() {
    return  password == confirmpassword 
    && email.length>0
     && password.length>0 ;
      

  }

  const navigate =useNavigate();
  function handleSubmit(event){
    event.preventDefault();
    
    const user = {
      fname,
      email,
      address,
      idproof,
      password,
      type:"bidder"
    };

    Service.addUser(user).then(res => {
      console.log(res);
      console.log(res.data);
      let path=`Login`;
navigate(path); 
      
    })
  
  }

  return (
    <div className="Login">

<form onSubmit={handleSubmit} >
                <h3>Bidder Register</h3>


                <div className="form-floating ">
                    
                     <input type="text" className="form-control"  placeholder="Enter Full name" value={fname}  onChange={(e) => setFname(e.target.value)} />
                  <label >Enter Full name</label>
                </div>

                

                <div className="form-floating mt-2">
                    
                    
                  <input type="email" className="form-control" placeholder="Enter email"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
                  <label >Enter email</label>
                </div>

                <div className="form-floating mt-2">
                    
                    <input type="text" className="form-control" placeholder="Enter address" value={address}  onChange={(e) => setAddress(e.target.value)} />
                    <label >Enter address</label>
                </div>

                <div className="form-floating mt-2">
               
    <select className="form-control" required>
        <option value="" >Select Id Proof</option>
        <option value ="adhar">Adhar Card</option>
        <option value ="pan">Pan Card</option>
        <option value ="voterid">Voter ID</option> 
     </select>
     <input type="text" className="form-control" placeholder="Enter Id number" value={idproof}  onChange={(e) => setIdproof(e.target.value)}  />
              <label>Enter ID number  below</label>
                </div>

                <div className="form-floating mt-2">
                    
                    <input type="password" className="form-control" placeholder="Enter password" value={password}  onChange={(e) => setPassword(e.target.value)} />
               <label>Enter password</label>
                </div>

                <div className="form-floating mt-2">
                    
                    <input type="password" className="form-control" placeholder="Confirm Password" value={confirmpassword}  onChange={(e) => setConfirmPassword(e.target.value)} />
                <label>Confirm Password</label>
                </div>

             
                <button type="submit" className="btn btn-dark btn-lg btn-block" disabled={!validateForm()}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="">log in?</a>
                </p>
                
            </form>


    </div>
  )
}

export default Bsignup