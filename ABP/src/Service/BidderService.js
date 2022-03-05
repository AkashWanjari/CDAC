import axios from 'axios'
const API_BASE_URL = "http://localhost:7777/api/Bidding";
class BidderService  {

    addBidd(bid) {
return axios.post(API_BASE_URL+"/addBid",bid);
    }
}

export default new BidderService()