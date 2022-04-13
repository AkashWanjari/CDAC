import React,{useEffect,useState,useRef} from 'react'
import BidderService from '../../Service/BidderService'
const MyCart = ({productdata}) => {
const [higeshbid, sethigeshbid] = useState('')
const [pid, setPid] = useState('')


    
  
useEffect(() => {
  setPid(productdata.pid);
  BidderService.getHighestbid(pid).then(res=>{
    console.log(res.data)
    sethigeshbid(res.data)})
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

  return (
    <>

<div className="card text-white bg-secondary   mb-3" style={{  maxWidth: "28rem"}}>
{timerDays==0 &&timerHours==0 && timerMinutes==0 && timerSeconds==0? <div style={{display:"inline-block",textAlign:"right"}}>&#128308;</div>:<div style={{display:"inline-block",textAlign:"right"}}>&#128994;</div> }

  <div className="card-text" ><h1 style={{display:"inline-block"}}>{productdata.pname}</h1>  

  </div>
  <div className="card-body text-white">
    {/* <h5 className="card-title">{productdata.pname}</h5> */}
    <p className="card-text">  Quantity {productdata.quantity}<hr/>
     Your BID {productdata.bid_price}<hr/>
     
      Highest bid <b>{higeshbid} </b></p>
  </div>
  <div className="card-footer bg-transparent border-success">Ends On {productdata.endBDate} </div>
</div>

    
    </>
  )
}

export default MyCart