import React ,{useState,useEffect,useRef}from "react";
import FarmerService from "../../Service/FarmerService";
import { Card, Button } from 'react-bootstrap'
import BidderService from "../../Service/BidderService";

 const ViewProduct=({productdata})=>{
     
let id = JSON.parse(localStorage.getItem("id"));


const [pid, setpid] = useState('')
const [Higestbid, setHigestbid] = useState('')
const [winner, setwinner] = useState('')


const del = () => {
    setpid(productdata.pid);
    console.log(productdata.pid)

    
    FarmerService.delProduct(productdata.pid)
      .then(res => {
        console.log(res.data)
      })

      
  }
  useEffect(() => {
    setpid(productdata.pid);
  BidderService.getHighestbid(pid).then(res=>{
    // console.log(res.data)
    setHigestbid(res.data)})

    BidderService.getWinner(Higestbid[0],pid).then(res=>{
setwinner(res.data);
    })
})
const [timerDays, setTimerDays] = useState('00');
const [timerHours, setTimerHours] = useState('00');
const [timerMinutes, setTimerMinutes] = useState('00');
const [timerSeconds, setTimerSeconds] = useState('00');

let interval = useRef()

const startTimer = () => {
  const countdownDate = new Date(productdata.endBDate).getTime();
  console.log(countdownDate)
  interval = setInterval(()=> {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if(distance < 0) {
      clearInterval(interval.current)
    } else {
      setTimerDays(days)
      setTimerHours(hours)
      setTimerMinutes(minutes)
      setTimerSeconds(seconds)
    }
    
  }, 1000)
}

useEffect(()=> {
  const someref = interval.current
  startTimer()
  return ()=> {
    clearInterval(someref)
  }
}, [])
  
     return(
        <div className="card text-white bg-transparent  border-primary mb-3" style={{ maxWidth: "540px" }} >
                  {timerDays==0 &&timerHours==0 && timerMinutes==0 && timerSeconds==0? <div style={{color:"red"}}>BID EXPIRED &#10060;</div>:<div className="card-header  text-danger" style={{width:"400px"}}>{timerDays} Days:{timerHours} Hours :{timerMinutes} Minutes :{timerSeconds} Seconds Remaining</div> }

            <div class="row no-gutters">
              <div>Current Winner-{winner}</div>
              <div class="col-md-4">
                <img src={productdata.img} class="card-img" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{productdata.pid} - {productdata.pname}</h5>
                  <p class="card-text"> Quantity :- {productdata.quantity}<br />
                    BID ENDS ON {productdata.endBDate}<br />
                    Highest BID :-{Higestbid}<br />
                    Base price :-{productdata.minPrice}<br/>
                    About :-{productdata.discription}
                  </p>
                  
                    
    
                  
                  <Button variant="primary" onClick={del}  >Delete</Button>
                </div>
              </div>
            </div>
          </div>

     )
 }
 
 export default ViewProduct;