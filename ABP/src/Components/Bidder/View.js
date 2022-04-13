import React, { useRef,useState, useEffect } from 'react'
import BidderService from '../../Service/BidderService'
import {  Button } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'

const View = ({ productdata }) => {

  const [endBDate, setendBDate] = useState('')
  const [pname, setpname] = useState()
  const [quantity, setquantity] = useState()
  const [minPrice, setminprice] = useState()

  const [bid_price, setbidprice] = useState('')
  const [buyerId, setbuyerId] = useState()
  const [pid, setpid] = useState('')
  const [img, setimg] = useState('')
  const [hbid, sethbid] = useState([])
  const [winner, setwinner] = useState('')
  let id = JSON.parse(localStorage.getItem("id"));
   useEffect(() => {
     console.log(pid)
     BidderService.getHighestbid(pid).then(res=>{
       console.log(res.data)
       sethbid(res.data)

     })
console.log(hbid)



   })


const win=()=>{
  console.log(winner)
  BidderService.getWinner(hbid[0],pid).then(res=>{
    console.log(res.data)
    setwinner(res.data)
    console.log(winner)
  })
  
}
   
  let bidding = {
    pid,
    bid_price,
    buyerId,
    endBDate,
    pname,
    quantity,
    img

  }
  const bid = () => {
    if(bid_price< minPrice){
      toast.error("enter value greater than base price")
    }else{
 
    BidderService.addBidd(bidding).then(res => {
      console.log(res.data)
      console.log(pid)
      toast("bid sucessfully");
    })
  }
  }
  const checkbid = () => {
    return (timerDays==0 &&timerHours==0 && timerMinutes==0 && timerSeconds==0);

    
  }

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

  return (
    <>

<ToastContainer/>
      <div className="card text-black  mb-3" style={{ maxWidth: "740px" }} onMouseMove={(e) => {
        setpid(productdata.pid); setminprice(productdata.minPrice);
        setbuyerId(id); setendBDate(productdata.endBDate); setpname(productdata.pname); setquantity(productdata.quantity)
      }}>


        {timerDays==0 &&timerHours==0 && timerMinutes==0 && timerSeconds==0? <div style={{color:"red"}}>BID EXPIRED &#10060;</div>:<div className="card-header  text-danger" style={{width:"400px"}}>{timerDays} Days:{timerHours} Hours :{timerMinutes} Minutes :{timerSeconds} Seconds Remaining</div> }
              

        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={productdata.img} class="card-img"  width={"800px"}/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{productdata.pid} - {productdata.pname}</h5>
              <p class="card-text"> Quantity :- {productdata.quantity}<br />
                
                Highest BID :-{hbid}<br />
                Base price :-{productdata.minPrice}
              </p>
              <input type="number" className="form-control" value={bid_price} disabled={checkbid()}
                onChange={(e) => {
                  setbidprice(e.target.value);
                }
                } />
<br/>
              <Button variant="primary" onClick={bid} disabled={checkbid()} >BID</Button>
              <hr/>
             Current Winner:<b>{winner}</b>
             <hr/>
              
              <Button variant="secondary" onClick={win}  >Check Current winner</Button>
            </div>
          </div>
        </div>
        <div className="card-footer bg-transparent border-success"><b>About :-</b>{productdata.discription} </div>

      </div>



      <hr />
    </>
  )
}

export default View