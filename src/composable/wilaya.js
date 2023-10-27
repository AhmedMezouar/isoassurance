import { fetchHospitalsByParams } from "./catalogue";
import { fetchAgencyByParams } from "./agency";
import { fetchHotelsByParams } from "./hotel";
import { fetchUnivsByParams } from "./univ";
function setHospitalWilaya(store, wilaya, nextPage) {
  store
    .dispatch("catalogue/setWilaya", wilaya)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
  fetchHospitalsByParams(store, nextPage, null);
}

function setUniversityWilaya(store, wilaya, nextPage) {
  store
    .dispatch("univ/setWilaya", wilaya)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem setting wilaya of universities");
    });
  fetchUnivsByParams(store, nextPage, null);
}

function setHotelWilaya(store, wilaya, nextPage) {
  store
    .dispatch("hotel/setWilaya", wilaya)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem setting wilaya of hotel");
    });
  fetchHotelsByParams(store, nextPage, null);
}
function SetWilayaAgency(store, wilaya, nextPage) {
  store
    .dispatch("agency/setWilaya", wilaya)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem setting wilaya of hotel");
    });
  fetchAgencyByParams(store, nextPage, null);
}
export { setHospitalWilaya, SetWilayaAgency,setHotelWilaya ,setUniversityWilaya};
