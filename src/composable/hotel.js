function fetchHotels(store, nextPage = 1, long, lat, name, country, wilaya) {
  //let nbrToShow = 6;
  if (window.innerWidth > 750) {
    // nbrToShow = 10;
  }
  store
    .dispatch("hotel/fetchHotels", {
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
    .dispatch("hotel/setCordinates", lat, long)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
}

function fetchHotelsByParams(store, nextPage = 1, name) {
  const { country, wilaya, long, lat } = store.state.hotel

  fetchHotels(
    store,
    nextPage,
    long,
    lat,
    name,
    country, wilaya
  );

}

export { fetchHotels, fetchHotelsByParams };
