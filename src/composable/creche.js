function fetchCrech(store, wilaya="Alger",long,lat, nextPage = 1) {
    //let nbrToShow = 6;
    if (window.innerWidth > 750) {
     // nbrToShow = 10;
    }
    
    store
      .dispatch("cresh/fetchCrech", {
        wilaya,
        nextPage
      })
      .then(() => {})
      .catch(() => {
        console.log("There was a problem creating your event");
      });
  
    store
      .dispatch("cresh/setCordinates",lat,long)
      .then(() => {})
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
  
    fetchCrech(
      store,
      store.state.crech.wilaya,
      store.state.crech.long,
      store.state.crech.lat,
      nextPage,
    );
  }
  export { fetchCrech, fetchCrechByParams };
  