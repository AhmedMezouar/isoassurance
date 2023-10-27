import { fetchHospitalsByParams } from "./catalogue";
import { fetchAgencyByParams } from "./agency";
import { fetchHotelsByParams } from "./hotel";
import { fetchUnivsByParams } from "./univ";
function setHospitalCountry(store, country, nextPage) {
  store
    .dispatch("catalogue/setCountry", country)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
  fetchHospitalsByParams(store, nextPage, null);
}
function setUniversityCountry(store, country, nextPage) {
  store
    .dispatch("univ/setCountry", country)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem setting country of hotel");
    });
  fetchUnivsByParams(store, nextPage, null);
}

function setHotelCountry(store, country, nextPage) {
  store
    .dispatch("hotel/setCountry", country)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem setting country of hotel");
    });
  fetchHotelsByParams(store, nextPage, null);
}
function SetCountryAgency(store, country, nextPage) {
  store
    .dispatch("agency/setCountry", country)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
  fetchAgencyByParams(store, nextPage);
}
export { setHospitalCountry, SetCountryAgency, setHotelCountry,setUniversityCountry };
