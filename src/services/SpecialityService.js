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
  getSpecialities() {
    return apiClient.get("/api/speciality");
  },
  getSpecialityById(id) {
    if (id) return apiClient.get("/api/speciality/" + id);
  },
};
