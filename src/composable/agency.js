function fetchAgency(store, wilaya="Alger",lat,long, nextPage = 1) {
    //let nbrToShow = 6;
    if (window.innerWidth > 750) {
     // nbrToShow = 10;
    }
    
    store
      .dispatch("agency/fetchAgency", {
        wilaya,
        nextPage
      })
      .then(() => {})
      .catch(() => {
        console.log("There was a problem creating your event");
      });
  
    store
      .dispatch("agency/setCordinates", lat, long)
      .then(() => {})
      .catch(() => {
        console.log("There was a problem creating your event");
      });
  }
  function fetchAgencyByParams(
    store,
    nextPage = 1,
  ) {
    store
    fetchAgency(
      store,
      store.state.agency.wilaya,
      store.state.agency.lat,
      store.state.agency.long,
      nextPage,
    );
  }
  export { fetchAgency, fetchAgencyByParams };
  