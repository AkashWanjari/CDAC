import axios from 'axios'
const API_BASE_URL = "http://localhost:7777/api/v1";
class AdminService  {

    getUsers() {
return axios.get(API_BASE_URL+"/GetUsers");
    }
    deletebyid(id){
        return axios.delete(API_BASE_URL+"/delete",{params:{id:id}});
    }
   
}

export default new AdminService()