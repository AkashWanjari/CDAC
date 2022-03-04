import axios from 'axios';

const API_BASE_URL = "http://localhost:7777/api/v1";

class Service {

    getUser(){
        return axios.get(API_BASE_URL);
    }
  
     postUser(user){
         return axios.post(API_BASE_URL +'/validateUser',user);
     }

     getUserByEmailId(email){
         return axios.get(API_BASE_URL+'/GetUserByEmailId',email);
     }
     addUser(user){
        return axios.post(API_BASE_URL +'/addusr',user);
    }
}

export default new Service()