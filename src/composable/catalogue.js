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
    .then(() => { })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
  store
    .dispatch("catalogue/setCordinates", lat, long)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
}
function fetchHospitalsByParams(
  store,
  nextPage = 1,
  name,
) {
  const { country, wilaya, long, lat } = store.state.catalogue

  fetchHospitals(
    store,
    nextPage,
    long,
    lat,
    name,
    country,
    wilaya
  );
}
export { fetchHospitals, fetchHospitalsByParams };
