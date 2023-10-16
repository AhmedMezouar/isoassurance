import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_APIURL,
  withCredentials: false, // This is the default
  headers: {
    "Content-Type": "multipart/form-data"
  },
});
export default{
    async requestCard(req){
        await apiClient.post('api/request-user',req)
        
    },
    async requestPartner(req){
      console.log(req)
      await apiClient.post('api/partner/create',req)
      
  },
}