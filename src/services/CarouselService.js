//import axios from "axios";

/*const apiClient = axios.create({
  baseURL: process.env.VUE_APP_APIURL,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});*/

export default {
 async getCarousels() {
    return ["c1.jpg", "c2.jpg", "c3.jpg"];
  },

};
