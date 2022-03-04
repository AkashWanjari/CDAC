import React ,{useState} from 'react'
import "./Login.css"
import Service from '../../Service/Service';
import { useNavigate } from 'react-router-dom';

function Singup1() {
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
    
    let user = {
      fname,
      email,
      address,
      idproof,
      password,
      type:"farmer"
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
                <h3>Farmer Register</h3>

                <div className="form-group">
                    
                     <input type="text" className="form-control" placeholder="Enter Full name" value={fname}  onChange={(e) => setFname(e.target.value)} />
                  
                </div>

                

                <div className="form-group">
                    
                    <input type="email" className="form-control" placeholder="Enter email"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="Enter address" value={address}  onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="form-group">
               
    <select className="form-control" required>
        <option value="" >Select Id Proof</option>
        <option value ="adhar">Adhar Card</option>
        <option value ="pan">Pan Card</option>
        <option value ="voterid">Voter ID</option> 
     </select><br/>
     <input type="text" className="form-control" placeholder="Enter Id number" value={idproof}  onChange={(e) => setIdproof(e.target.value)}  />
                </div>

                <div className="form-group">
                    
                    <input type="password" className="form-control" placeholder="Enter password" value={password}  onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    
                    <input type="password" className="form-control" placeholder="Confirm Password" value={confirmpassword}  onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

             
                <button type="submit" className="btn btn-dark btn-lg btn-block" disabled={!validateForm()}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="">log in?</a>
                </p>
            </form>


    </div>
  )
}

export default Singup1