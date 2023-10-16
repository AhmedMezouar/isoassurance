import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_APIURL,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
 async getUsers() {
    return await apiClient.get("/api/Users");
  },
  async getUserCard(id) {
    console.log(id);
    if (id) return await apiClient.get("/api/account/findByUuid/" + id);
    //return await apiClient.get("/api/46304926-36bb-4c33-85bc-68d7906f8b1d");
  },

};
