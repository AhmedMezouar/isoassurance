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
  filterByParams(url,nextPage,data) {
      return apiClient.post(`/api/${url}/filter?page=${nextPage}`, data);
  },
};
