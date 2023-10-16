import { fetchHospitalsByParams } from "./catalogue";
import { fetchAgencyByParams } from "./agency";
function SetWilaya(store, wilaya, nextPage) {
  store
    .dispatch("catalogue/setWilaya", wilaya)
    .then(() => {})
    .catch(() => {
      console.log("There was a problem creating your event");
    });
  fetchHospitalsByParams(store, nextPage, null);
}
function SetWilayaAgency(store, wilaya, nextPage) {
  store
    .dispatch("agency/setWilaya", wilaya)
    .then(() => {})
    .catch(() => {
      console.log("There was a problem creating your event");
    });
    fetchAgencyByParams(store, nextPage, null);
}
export { SetWilaya,SetWilayaAgency };
