import React ,{useState} from 'react'
import BidderService from '../../Service/BidderService'
import {Card,Button} from 'react-bootstrap'

const View =  ({productdata}) => {

const [bid_price, setbidprice] = useState('')
// const [buyerId, setbuyerId] = useState()
const [pid, setpid] = useState('')

setpid(productdata.pid);
// setbuyerId();
let bidding={
  pid,
  bid_price,
  // buyerId

}
const bid=()=>{
  BidderService.addBidd(bidding).then(res=>{
    console.log(res.data)
  })
}


  return (
      <>
      
    <Card style={{ width: '25rem' }} >
  {/* <Card.Img variant="top" src={img} /> */}
  <Card.Body>
    <Card.Title>{productdata.pname}</Card.Title>
    <Card.Text>
        Quantity :- {productdata.quantity}<br/>
        BID ENDS ON {productdata.endBDate}<br/>
        Higest BID :-{productdata.higestBid}
      
    </Card.Text>
    
    <input type="number" className="form-control" value={bid} onChange={(e) => setbidprice(e.target.value) } minLength={productdata.minPrice} />

        <Button variant="primary" onClick={bid}>BID</Button>
  </Card.Body>
</Card>

<hr/>
</>
  )
}

export default View