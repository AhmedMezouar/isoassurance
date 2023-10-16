function  fetchCarousels(store) {
            store
                .dispatch("carousel/fetchCarousels")
                .then(() => {
                })
                .catch(() => {
                    console.log("There was a problem creating your event");
                });
}
export { fetchCarousels };