function fetchUnivs(store, wilaya, nextPage = 1,name) {
  //let nbrToShow = 6;
  if (window.innerWidth > 750) {
   // nbrToShow = 10;
  }
  store
    .dispatch("univ/fetchUniversities", {
      wilaya,
      nextPage,
      name
    })
    .then(() => {})
    .catch(() => {
      console.log("There was a problem creating your event");
    });

  store
    .dispatch("univ/setCordinates")
    .then(() => {})
    .catch(() => {
      console.log("There was a problem creating your event");
    });
}
function fetchUnivsByParams(
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

  fetchUnivs(
    store,
    store.state.univ.wilaya,
    nextPage,
    name
  );
}
export { fetchUnivs, fetchUnivsByParams };
