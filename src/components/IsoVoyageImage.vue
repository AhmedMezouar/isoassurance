<template>
  <div class="hello relative content">
    <Header2></Header2>
    
    <div class="container" id="voyage-image">
      <div class="row list-image">
        <div class="col-12">
          <h1 class="title-voyage-detail mt-8 mb-4">
            Voyage "Omra & Dubai & Turkey & Jordan & Egypte & Malysia & Tunisie"
          </h1>
        </div>
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1633546707050-88e2b545831c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
          <img
            src="https://www.bouger-voyager.com/wp-content/uploads/2020/06/Pyramides-dEgypte.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
          <img
            src="https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9yZGFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://media.routard.com/image/95/9/fb-egypte.1571959.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src="https://images.unsplash.com/photo-1623621534850-d325a1980c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4142&q=80"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="https://images.unsplash.com/photo-1559554498-7a9eb7587782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHR1cmtleXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="https://s30876.pcdn.co/wp-content/uploads/Malaysia2-e1634207099694.jpg.optimal.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1591291459549-ccc48d2db3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVuaXNpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src="https://images.unsplash.com/photo-1606364036548-7615410a1c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFseWFzaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
          <img
            src="https://img-4.linternaute.com/5ivhqDTaUQraOdiQ-IMLslpN70A=/1080x/smart/58bd9433b96a4bbcb5b9db9a8dd4909c/ccmcms-linternaute/11436008.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
          <img
            src="https://i0.wp.com/www.tsa-algerie.com/wp-content/uploads/fly-images/237885/drapeau-tunisie-9999x9999-c.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
          <img
            src="https://cdn.travelsafe-abroad.com/wp-content/uploads/esmonde-yong-9B08uduMyY-unsplash-2.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
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
    goPhotos(){
    let route1 = this.$router.resolve('/voyageImage');
    window.open(route1.href);
    },
    goDetails(){
    let route1 = this.$router.resolve('/voyageDetail');
    window.open(route1.href);
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
.list-image {
  padding-block: 30px;
}
</style>
<!--  <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
        
        
        
        
        
        <div class="col-6">
          <img src="https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035_1280.jpg" alt="..." class="img-thumbnail">
        </div>
        <div class="col-3">
          <img src="https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035_1280.jpg" alt="..." class="img-thumbnail">
        </div>
        <div class="col-3">          
          <img src="https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035_1280.jpg" alt="..." class="img-thumbnail">
        </div>
        <div class="col-3">
          <img src="https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035_1280.jpg" alt="..." class="img-thumbnail">
        </div>
        <div class="col-3">
          <img src="https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035_1280.jpg" alt="..." class="img-thumbnail">
        </div>
        <div class="col-6">
          <img src="https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035_1280.jpg" alt="..." class="img-thumbnail">
        </div> -->