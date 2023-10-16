 function ExtractLocation(closure) {
      if(localStorage.getItem('position')){
        let { long, lat } = localStorage.getItem("position");
        this.long = long;
        this.lat = lat;
      }else{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            (position) => {
                this.long = position.coords.longitude;
                this.lat = position.coords.latitude;
                this.locationErrorMessage = "";
                localStorage.setItem("storedData", {
                  long: position.coords.longitude,
                  lat: position.coords.latitude,
                });
                closure();
            },
            (error) => {
                if (error.code === 1) {
                this.locationErrorMessage = "Please allow location access.";
                }
            }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
        }
      }


export default { ExtractLocation };