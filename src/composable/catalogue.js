function fetchHospitals(
  store, 
  nextPage = 1, 
  long, 
  lat, 
  name, 
  country, wilaya) {
  //let nbrToShow = 6;
  if (window.innerWidth > 750) {
   // nbrToShow = 10;
  }
  
  store
    .dispatch("catalogue/fetchHospitals", {
      nextPage: nextPage,
      long: "",
      lat: "",
      name,
      country,
      wilaya,
    })
    .then(() => {})
    .catch(() => {
      console.log("There was a problem creating your event");
    });
  store
    .dispatch("catalogue/setCordinates", lat, long)
    .then(() => {})
    .catch(() => {
      console.log("There was a problem creating your event");
    });
}
function fetchHospitalsByParams(
  store,
  nextPage = 1,
  name,
) {
  store
    .dispatch("speciality/setSpecialityName", name)
    .then(() => {

    })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
  fetchHospitals(
    store,
    nextPage,
    store.state.catalogue.long,
    store.state.catalogue.lat,
    name,
    store.state.catalogue.country,
    store.state.catalogue.wilaya
  );
}
export { fetchHospitals, fetchHospitalsByParams };
