function fetchHotels(store, nextPage = 1, long, lat, name, country , wilaya) {
  //let nbrToShow = 6;
  if (window.innerWidth > 750) {
    // nbrToShow = 10;
  }

  store
    .dispatch("hotel/fetchHotel", {
      nextPage: nextPage,
      long: "",
      lat: "",
      name,
      country:"",
      wilaya,
    })
    .then(() => {})
    .catch(() => {
      console.log("There was a problem creating your event");
    });
  store
    .dispatch("hotel/setCordinates", lat, long)
    .then(() => {})
    .catch(() => {
      console.log("There was a problem creating your event");
    });
}
function fetchHotelsByParams(store, nextPage = 1, name) {
  store 
  .dispatch("hotel/fetchHotel", name)
    .then(() => {

    })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
  fetchHotels(
    store,
    nextPage,
    store.state.hotel.long,
    store.state.hotel.lat,
    name,
    store.state.hotel.country,
    store.state.hotel.wilaya
  );
}
export { fetchHotels, fetchHotelsByParams };