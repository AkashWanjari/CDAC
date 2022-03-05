import axios from 'axios';

const API_BASE_URL = "http://localhost:7777/api/product";

class FarmerService {

      getProduct(){
        return axios.get(API_BASE_URL+"/GetFarmerDetails");
    
}
  
     addProduct(product){
        return axios.post(API_BASE_URL +'/addProduct',product);
    }

    viewProduct(usrid){
        return axios.get(API_BASE_URL+'/getProductsUsingFarmerId',usrid);
    }
}

export default new FarmerService()