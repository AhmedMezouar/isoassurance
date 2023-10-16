  function fetchSpecialities(store) {
      store
        .dispatch("speciality/fetchSpecialities")
        .then(() => {})
        .catch(() => {
          console.log("There was a problem creating your event");
        });
        }
export { fetchSpecialities };