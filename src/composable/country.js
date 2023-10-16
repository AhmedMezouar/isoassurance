import { fetchHospitalsByParams } from "./catalogue";
import { fetchAgencyByParams } from "./agency";
function SetCountry(store, country, nextPage) {
  store
    .dispatch("catalogue/setCountry", country)
    .then(() => {})
    .catch(() => {
      console.log("There was a problem creating your event");
    });
  fetchHospitalsByParams(store, nextPage, null);
}
function SetCountryAgency(store, country, nextPage) {
  store
    .dispatch("agency/setCountry", country)
    .then(() => {})
    .catch(() => {
      console.log("There was a problem creating your event");
    });
    fetchAgencyByParams(store, nextPage);
}
export  { SetCountry,SetCountryAgency };
