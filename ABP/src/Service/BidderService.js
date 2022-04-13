import axios from 'axios'
const API_BASE_URL = "http://localhost:7777/api/Bidding";
class BidderService {

    addBidd(bid) {
        return axios.post(API_BASE_URL + "/addBid", bid);
    }
    getBidd(bidderid) {
        return axios.get(API_BASE_URL + "/getBiddingsOnId", { params: { usrid: bidderid } });
    }

    getHighestbid(pid) {
        return axios.get(API_BASE_URL + "/getBiddshighest", { params: { usrid: pid } });
    }

    getWinner(higestbid, pid) {
        return axios.get(API_BASE_URL + "/findWinner", { params: { price: higestbid, pid: pid } })
    }
}

export default new BidderService()