<template> 
  <div class="hello relative content">
    <Header2></Header2>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item carousel-item-phone active">
          </div>
        </div>
      </div>
    </div>
    <div id="voyage" class="container">
      <div class="row mb-8">
        <div class="col-md-1 mt-4 img-flam">
          
          <svg viewBox="0 0 98 118" data-testid="svg-flame" class="css-ahd5xm-Icon e197ppqn0">
            <path fill="url(#pattern0)" d="M1 0h95v118H1z"></path>
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_499_9759" transform="scale(.01053 .00847)"></use>
              </pattern>
              <image id="image0_499_9759" xlink:href="data:image/png;base64,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">
              </image>
            </defs>
          </svg>
          
        </div>
        <div class="col-md-5 mt-4 prime">
          <p class="title-eco"><b>PRIME</b><br>MEILLEURES OFFRES<br><span class="eco">Économisez et visitez ces destinations de rêve!</span></p>
        </div>
        <div class="col-md-6 mt-4 col-input">
          <div class="form-floating mb-3" @click="downloadPDF()">
            <a href="" class="dow-btn" @click="downloadPDF()">Télécharger PDF VISA</a>
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <div class="carte">
            <div class="row g-0">
              <!-- Version mobile-->
              <div class="col-12 img-card">
                <div class="row">
                  <div class="col-6 img-11-mobile-div img-omra"></div>
                  <div class="col-6 img-11-mobile-div img-dubai"></div>
                </div>
              </div>
              <!-- Version mobile-->
              <div class="col-md-3 img-omra img-11"></div>
              <div class="col-md-6">
                  <div class="info-card">
                      <h5 class="titre-voyage">Omra & Dubai</h5>

                      <span class="reduction">Par facilité</span><br>
                      <span class="">Durée de voyage 23 Jours</span><br>
                      <span class="ancien-prix">419 000.00 DA</span>
                      <span class="nouveau-prix">369 000.00 DA</span>
                      <button class="btn-consultation" @click="goDetails()">Consulter</button>
                  </div>
              </div>
              <div class="col-md-3 img-dubai img-11"></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <div class="carte">
            <div class="row g-0">
              <!-- Version mobile-->
              <div class="col-12 img-card">
                <div class="row">
                  <div class="col-6 img-11-mobile-div img-omra"></div>
                  <div class="col-6 img-11-mobile-div img-turkey"></div>
                </div>
              </div>
              <!-- Version mobile-->
              <div class="col-md-3 img-omra img-11"></div>
              <div class="col-md-6">
                  <div class="info-card">
                      <h5 class="titre-voyage">Omra & Turkey</h5>

                      <span class="reduction">Par facilité</span><br>
                      <span class="">Durée de voyage 23 Jours</span><br>
                      <span class="ancien-prix">394 000.00 DA</span>
                      <span class="nouveau-prix">354 000.00 DA</span>
                      <button class="btn-consultation" @click="goTurkey()">Consulter</button>
                  </div>
              </div>
              <div class="col-md-3 img-turkey img-11"></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <div class="carte">
            <div class="row g-0">
              <!-- Version mobile-->
              <div class="col-12 img-card">
                <div class="row">
                  <div class="col-6 img-11-mobile-div img-omra"></div>
                  <div class="col-6 img-11-mobile-div img-jordan"></div>
                </div>
              </div>
              <!-- Version mobile-->
              <div class="col-md-3 img-omra img-11"></div>
              <div class="col-md-6">
                  <div class="info-card">
                      <h5 class="titre-voyage">Omra & Jordan</h5>

                      <span class="reduction">Par facilité</span><br>
                      <span class="">Durée de voyage 23 Jours</span><br>
                      <span class="ancien-prix">465 000.00 DA</span>
                      <span class="nouveau-prix">425 000.00 DA</span>
                      <button class="btn-consultation" @click="goJordan()">Consulter</button>
                  </div>
              </div>
              <div class="col-md-3 img-jordan img-11"></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <div class="carte">
            <div class="row g-0">
              <!-- Version mobile-->
              <div class="col-12 img-card">
                <div class="row">
                  <div class="col-6 img-11-mobile-div img-omra"></div>
                  <div class="col-6 img-11-mobile-div img-egypte"></div>
                </div>
              </div>
              <!-- Version mobile-->
              <div class="col-md-3 img-omra img-11"></div>
              <div class="col-md-6">
                  <div class="info-card">
                      <h5 class="titre-voyage">Omra & Egypte</h5>

                      <span class="reduction">Par facilité</span><br>
                      <span class="">Durée de voyage 23 Jours</span><br>
                      <span class="ancien-prix">424 000.00 DA</span>
                      <span class="nouveau-prix">384 000.00 DA</span>
                      <button class="btn-consultation" @click="goEgypte()">Consulter</button>
                  </div>
              </div>
              <div class="col-md-3 img-egypte img-11"></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <div class="carte">
            <div class="row g-0">
              <!-- Version mobile-->
              <div class="col-12 img-card">
                <div class="row">
                  <div class="col-6 img-11-mobile-div img-omra"></div>
                  <div class="col-6 img-11-mobile-div img-malysia"></div>
                </div>
              </div>
              <!-- Version mobile-->
              <div class="col-md-3 img-omra img-11"></div>
              <div class="col-md-6">
                  <div class="info-card">
                      <h5 class="titre-voyage">Omra & Malysia</h5>

                      <span class="reduction">Par facilité</span><br>
                      <span class="">Durée de voyage 25 Jours</span><br>
                      <span class="ancien-prix">549 000.00 DA</span>
                      <span class="nouveau-prix">499 000.00 DA</span>
                      <button class="btn-consultation" @click="goMalysia()">Consulter</button>
                  </div>
              </div>
              <div class="col-md-3 img-malysia img-11"></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <div class="carte">
            <div class="row g-0">
              <!-- Version mobile-->
              <div class="col-12 img-card">
                <div class="row">
                  <div class="col-6 img-11-mobile-div img-omra"></div>
                  <div class="col-6 img-11-mobile-div img-tunisie"></div>
                </div>
              </div>
              <!-- Version mobile-->
              <div class="col-md-3 img-omra img-11"></div>
              <div class="col-md-6">
                  <div class="info-card">
                      <h5 class="titre-voyage">Omra & Tunisie</h5>

                      <span class="reduction">Par facilité</span><br>
                      <span class="">Durée de voyage 23 Jours</span><br>
                      <span class="ancien-prix">359 000.00 DA</span>
                      <span class="nouveau-prix">319 000.00 DA</span>
                      <button class="btn-consultation" @click="goTunisie()">Consulter</button>
                  </div>
              </div>
              <div class="col-md-3 img-tunisie img-11"></div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4">
          <button class="btn-more">Charger plus d'offres</button>
        </div>
      </div>
    </div>
  </div>
  <MyFooter></MyFooter>
</template>
<script>
/* eslint-disable */
import {
  fetchAgencyByParams,
  fetchAgency,
  SetCountryAgency,
  SetWilayaAgency,
  getMarkers,
  setCenter, mark_marker, leave_marker
} from "../composable/index";
import { GoogleMap, GMapInfoWindow } from "vue3-google-map";
import GmapCustomMarker from "vue3-gmap-custom-marker";
import { mapMutations } from "vuex";
import Header2 from "./header/MyHeader2.vue"
import MyFooter from "./footer/MyFooter.vue"
import ContactUs from "./MainContant/ContactUs.vue"
import SearchUser from "./MainContant/IsoModal.vue"

export default {
  components: {
    GoogleMap,
    "gmap-custom-marker": GmapCustomMarker,
    GMapInfoWindow,
    Header2,
    ContactUs,
    MyFooter,
    SearchUser
  },
  data() {
    return {
      search: false,
      focust: false,
      typeData: "map",
      lat: "",
      long: "",
      nextPage: 1,
      hospitals: [],
      markers: [],
      moreExists: false,
      country: "Algerie",
      wilaya: [],
      countries: [
        {
          fr: "Algerie",
          word: "Algerie",
          en: "Algeria",
          ar: "الجزائر",
          tu: "Cezayir",
          lat: 36.74442239909969,
          long: 3.0726561299136623,
          flag: "inso-pics/dz.png",
        }
      ],
      dropd1: false,
      dropd2: false,
      destination: {},
      path: [],
      flightPath: null,
      infoWindowPos: null,
      infoContent: null,
      currentMidx: null,
      infoWinOpen: false,
      closeModal: false,
      filter: false,
    };
  },
  computed: {
    getCenter: {

      get() {
        return {
          lat: this.$store.state.map.lat,
          lng: this.$store.state.map.long,
        };
      },
      set() {
        this.markers.push({
          lat: this.$store.state.map.lat,
          lng: this.$store.state.map.long,
        });
      },
    },
    getFlightPath: {
      get() {
        return this.flightPath
      },
      set(value) {
        this.flightPath = value
      },
    },
    
    getMarkers() {
      this.getHospitals;
      getMarkers(this.$store, "agency");
      return this.$store.state.agency.markers;
    },
    getHospitals() {
      return this.$store.state.agency.hospitals;
    },
    getSpecialityName() {
      return this.$store.state.speciality.specialityName;
    },
    getSpecialities() {
      return this.$store.state.speciality.specialities;
    },
    tillOpnned() {
      return this.closeModal
    },
  },

  methods: {
    downloadPDF() {
      // L'URL vers votre fichier PDF (assurez-vous que le chemin est correct)
      const pdfURL = 'https://drive.google.com/file/d/1acgTeW2ZVzYJ5nH-Snq8HzIqOA8rHhPc/view?usp=sharing';

      // Créez un élément <a> pour déclencher le téléchargement
      const link = document.createElement('a');
      link.href = pdfURL;
      link.target = '_blank'; // Pour ouvrir dans une nouvelle fenêtre/tab
      link.download = 'Prix_Service_Eljouri_Travel_Mise_a_Jours_05.07.2023.pdf-3.pdf'; // Nom du fichier lors du téléchargement
      link.style.display = 'none'; // Masquer le lien

      // Ajoutez l'élément <a> à la page et déclenchez le clic pour le téléchargement
      document.body.appendChild(link);
      link.click();

      // Supprimez l'élément <a> de la page
      document.body.removeChild(link);
    },
    goPhotos(){
    let route1 = this.$router.resolve('/voyageImage');
    window.open(route1.href);
    },
    goDetails(){
      let route2 = this.$router.resolve('/voyageDetail');
      window.open(route2.href);
    },
    goTurkey(){
      let route2 = this.$router.resolve('/voyageTurkey');
      window.open(route2.href);
    },
    goJordan(){
      let route2 = this.$router.resolve('/voyageJordan');
      window.open(route2.href);
    },
    goEgypte(){
      let route2 = this.$router.resolve('/voyageEgypte');
      window.open(route2.href);
    },
    goMalysia(){
      let route2 = this.$router.resolve('/voyageMalysia');
      window.open(route2.href);
    },
    goTunisie(){
      let route2 = this.$router.resolve('/voyageTunisie');
      window.open(route2.href);
    },
    hoverMarker(index) {
      mark_marker(index)
    },
    leaveMarker(index) {
      leave_marker(index)
    },
    geocodeLatLng(lat, lng) {
      const geocoder = new google.maps.Geocoder();
      const latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };

      return new Promise((resolve, reject) => {
        geocoder.geocode({ location: latlng }, (results, status) => {
          if (status === "OK") {
            if (results[0]) {
              resolve(results[0].formatted_address);
            } else {
              reject("No results found");
            }
          } else {
            reject("Geocoder failed due to: " + status);
          }
        });
      });
    },

    toggleInfoWindow: function (marker, idx) {

      this.infoWindowPos = marker;

      if (this.infoWindowPos) {
        this.infoWinOpen = !this.infoWinOpen;
        this.currentMidx = idx;
        this.closeModal = false;
      }
    },
    openSelected: function (index) {
      if (index == this.currentMidx) {
        if (!this.closeModal) {
          return true
        } else {
          return false;
        }

      }
      return false
    },
    close: function () {
      this.closeModal = true;
    },
    closeit() {
      this.$refs.searchtxt.value = null;
      this.focust = false;
      this.hideSearch()
    },
    showSearch() {
      this.search = true
    },
    hideSearch() {
      !this.focust ? this.search = false : this.search
    },
    fct() {
      this.showSearch()
      this.focust = true
    },

    ...mapMutations([
      "SET_showModal", // map `this.increment()` to `this.$store.commit('increment')`

      // `mapMutations` also supports payloads:
      "SET_typeModal", // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
    showInsoModal(e) {
      window.open(e);
    },
    getCountryWilaya() {
      //this.countries = this.$store.getters.getCountries;
      if (this.country != "country") {
        this.wilaya = this.$store.getters.getCountryById(this.country).wilaya;
      }
    },
    changeMyCountry(key) {
      this.dropd2 = false;
      this.dropd1 = false;
      if (key != "country") {
        this.country = key;
        this.getCountryWilaya();
        SetCountryAgency(this.$store, this.country, this.nextPage);
        const { lat, long } = this.$store.getters.getCountryById(
          this.country
        ).name;

        setCenter(this.$store, lat, long);
        this.getHospitals;
        this.getMark;
      }
    },
    changeCountry(event) {
      this.dropd2 = false;
      this.dropd1 = false;
      const country = event.target.value;
      this.country = country;
      this.getCountryWilaya();
      SetCountryAgency(this.$store, country, this.nextPage);
      const { lat, long } = this.$store.getters.getCountryById(
        this.country
      ).name;
      //setCenter(this.$store, lat, long);
      this.getHospitals;
      this.getMarkers;
    },
    changeWilaya(event) {
      const wilaya = event.target.value;
      SetWilayaAgency(this.$store, wilaya, this.nextPage);
      fetchAgency(
        this.$store,
        wilaya,
      );
      this.getHospitals;
      this.getMarkers;

      this.$store.getters.getWilayaById(
        this.country,
        wilaya
      );
      //setCenter(this.$store, lat, long);
    },
    WhatToShow() {
      this.showAll = !this.showAll;
    },
    getRestrictedHospital(speciaName) {
      fetchAgencyByParams(this.$store, this.nextPage, speciaName);
    },
    handleInput(e) {
      let speciaName = e.target.value;
      fetchAgencyByParams(this.$store, this.nextPage, speciaName);
    },
    getLocation(closure) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.long = position.coords.longitude;
            this.lat = position.coords.latitude;
            this.locationErrorMessage = "";
            setCenter(
              this.$store,
              position.coords.latitude,
              position.coords.longitude
            );


            closure();
          },
          (error) => {
            if (error.code === 1) {
              this.locationErrorMessage = "Please allow location access.";
            } else {
              console.log(error)
            }
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
      /*}*/
    },
    loadMore() {
      try {
        this.nextPage++;
        fetchAgency(
          this.$store,
          "Alger",
        );
        this.moreExists = true;
      } catch (error) {
        this.moreExists = false;
      }
    },
    mark(event) {
      this.destination = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      this.drawDirection();
    },
    drawDirection() {
      this.path = [this.getCenter, this.destination];
      this.filePath = {
        path: [
          this.getCenter, this.destination
        ],
        geodesic: false,
        strokeColor: "#22c7e5",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      };
      this.getFlightPath = this.filePath;
    },
    openInfoWindowTemplate(position) {
      const { lat, lng, address } = position
      this.infoWindow.position = { lat: lat, lng: lng }
      this.infoWindow.template = `<b>${address}</b>`

      this.infoWindow.isFractionalZoomEnabled = true
      this.infoWindow.open = true
    }

  },
  created() {
    this.getCountryWilaya()
    SetCountryAgency(this.$store, this.country, this.nextPage);
    this.getLocation(() => {
      fetchAgency(
        this.$store,
        "",
        36.74442239909969,
        3.0726561299136623
      );
    });
    this.getMarkers

  },

};
</script>


<style>
.btn-more {
  display: flex;
  margin: auto;
  border: 1.5px solid #c76a0d; 
  color: #c76a0d;
  padding-inline: 30px;
  padding-block: 10px;
  border-radius: 50px;
}
.btn-more:hover {
  background-color: #c76a0d;
  color: white;
  box-shadow: 1px 2px 4px #888;
  font-weight: 700;
}
.col-input {
  display: flex;
  justify-content: end;
  align-items: end;
}
.form-floating {
  font-size: 12px;
}
b {
  font-size: 45px;
}
.title-eco {
  text-align: left;
  font-size: 35px;
  line-height: .9cm;

}
.eco {
  color: rgb(183, 0, 0);
  font-size: 16px;

}
.css-ahd5xm-Icon {
  height: 90px;
  width: 100px;
}
#pattern0 {
  height: 90px;
  width: 100px;
}
.info-card {
  text-align: center;
}
.titre-voyage {
  display: block;
  color: #555;
  padding-top: 10px;
}
.desc-voyage {
  display: block;
  font-size: 14px;
  color: #777;
  margin-top: -10px;
  margin-bottom: 20px;
}
.reduction {
  display: block;
  width: 50%;
  padding-block: 5px; 
  border-radius: 50px;
  color: white; 
  font-weight: 600;
  text-align: center;
  margin: auto;
  background-image: linear-gradient(180deg, #007942 0%, #00b24a 100%);
}
.ancien-prix {
  display: block;
  float: center;
  text-decoration: line-through;
  color: #999;
}
.nouveau-prix {
  display: block;
  float: center;
  color: #ff5733;
  font-weight: bold;
  font-size: 18px;
}
.btn-consultation {
  display: block;
  color: #ef9337;
  border-radius: 10px;
  border: 1px solid #ef9337;
  width: 80%;
  margin: auto;
  padding-inline: 20px;
  padding-block: 10px;
}
.btn-consultation:hover {
  background-image: linear-gradient(240deg, #ea9d38 0, #ef9337 8.33%, #f48738 16.67%, #f77a3a 25%, #f96b3d 33.33%, #fa5a41 41.67%, #f94646 50%, #f72c4c 58.33%, #f40054 66.67%, #f0005d 75%, #eb0068 83.33%, #e40074 91.67%, #db0081 100%);
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;

}
.carte {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  border-radius: 10px;
  padding-block: 10px;
}
.carte:hover {
  border: 1px solid #ef9337;
  cursor: pointer;
}

.d-block {
  height: 450px;
} 
#nav-tabs-2 {
  margin-top: -500px !important;
  margin-bottom: 400px;
  height: 50px;
}
.nav-link {
  background-color: rgba(231, 231, 231, 0.775) !important;
  margin-right: 10px;
  color: rgb(75, 75, 75) !important;
}
.nav-link.active {
  background-color: rgb(255, 255, 255) !important;
  color: #009f28 !important;
  font-weight: bold;
}
.nav-link:hover {
  background-color: rgb(255, 255, 255) !important;
}
.tab-content {
  background-color: white;
  padding-inline: 15px;
  padding-block: 20px;
}
.img-card {
  display: none;
}
@media screen and (max-width: 768px){
  .img-11 {
    display: none;
  }
  .img-card {
    display: block;
  }
  .img-card img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
  }
  .img-11-mobile-div {
    width: 100%;
  }
  .title-eco {
    text-align: center;
  }
  .eco {
    display: none;
  }
  .img-flam {
    padding-right: 20px;
  }
}
</style>
