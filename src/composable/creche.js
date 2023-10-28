function fetchCrech(store, wilaya = "Alger", long, lat, nextPage = 1) {
  //let nbrToShow = 6;
  if (window.innerWidth > 750) {
    // nbrToShow = 10;
  }
  store
    .dispatch("cresh/fetchCreches", {
      wilaya,
      nextPage
    })
    .then(() => { })
    .catch(() => {
      console.log("There was a problem creating your event");
    });

  store
    .dispatch("cresh/setCoordinates", long, lat)
    .then(() => { })
    .catch(() => {
      console.log("There was a problem creating your event");
    });
}
function fetchCrechByParams(
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

  const { wilaya, long, lat } = store.state.cresh
  fetchCrech(
    store,
    wilaya,
    long,
    lat,
    nextPage,
  );
}
export { fetchCrech, fetchCrechByParams };
