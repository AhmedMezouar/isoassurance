<template>
    <div class="phoneIcnns my-4">
        <div class="flex icnss">
            <div class="col-12" v-for="(hospital, index) in getHospitals" :key="index" @mouseover="hoverMarker(index)" @mouseleave="leaveMarker(index)">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <img
                            :src="hospital.image.length > 0 ? 'https://admin-assurance-private.assuranceiso.com/web/images/' + hospital.image : '/inso-pics/Myplaceholder.jpg'"
                            class="img-fluid" style="object-fit: contain; background: rgba(0, 0, 0, 0.15); width: 100px; height: 70px;" />
                        </div>
                        <div class="col-6">
                            <P class="tit-1" style="font-weight: bold;">{{ hospital.name }}</p>
                            <p class="tit-2">{{ hospital.name }}</p>
                            <a @click="gotolinks(hospital.link, index)" class="btn-primary">S'avoir plus</a>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    
    <!--
        <div class="col-sm-9 col-12">
                        <div class="row roo4">
                          <div class="col-12">
                            <h5 class="card-title" style="font-weight: bold;">{{ hospital.name }}</h5>
                          </div>
                          <div class="col-12">
                            <p class="card-title card-title-2">{{ hospital.name }}</p>
                          </div>
                          <div class="row button-vers">
                            <div class="col-md-4 col-12" style="font-size: 14px !important;">
                              <a @click="gotolinks(hospital.link, index)" class="btn-primary">
                                Appeler</a>
                            </div>
                            <div class="col-md-4 col-12" style="font-size: 14px !important;">
                              <a @click="gotolinks(hospital.link, index)" class="btn-primary">
                                Localisation</a>
                            </div>
                            <div class="col-md-4 col-12" style="font-size: 14px !important;">
                              <a @click="gotolinks(hospital.link, index)" class="btn-primary">
                                <i class="fas fa-microsoft-word word-icon"></i>
                                Site-Web</a>
                            </div>
                          </div>
                        </div>
                      </div>
    -->
</template>
<style scoped>
.card {
    margin-top:20px;
    margin-left: 15px;
    width: 100%;
    font-size: 9px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card:hover {
    border: 2px solid #1e85f1;
    height: auto !important;
}
.btn-primary {
    padding: 2px 12px 2px 12px;
    font-size: 8px;
}
.tit-1 {
    margin-top: 10px;
}
.tit-2 {
    margin-top: -12px;
}
</style>
<script>
import {
  fetchHospitalsByParams,
  fetchHospitals,
  SetCountry,
  SetWilaya,
  getMarkers,
  setCenter ,mark_marker ,leave_marker
} 
from "../../composable/index";
import { mapMutations } from "vuex";


export default {
  data() {
    return {
      typeData: "map",
      mapCenter: {
        lat: null,
        lng: null,
      },
      lat: "",
      long: "",
      nextPage: 1,
      hospitals: [],
      markers: [],
      moreExists: false,
      country: "",
      wilaya: [],
      countries: [],
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
      showHosMap: true,
      search: false,
      focust: false,
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
      getMarkers(this.$store);
      return this.$store.state.catalogue.markers;
    },
    getHospitals() {

      return this.$store.state.catalogue.hospitals;
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

    ...mapMutations([
      "SET_showModal", // map `this.increment()` to `this.$store.commit('increment')`

      // `mapMutations` also supports payloads:
      "SET_typeModal", // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
    showInsoModal(index) {
      /* mark_marker(index) */
      this.$store.commit("SET_typeModal", { index, typeModal: "hospital" });
    },
    hoverMarker(index){
      if(this.showHosMap){
        mark_marker(index)
      }
    },
    leaveMarker(index){
      leave_marker(index)
    },
    getCountryWilaya() {
      this.countries = this.$store.getters.getCountries;
      if (this.country != "") {
        this.wilaya = this.$store.getters.getCountryById(this.country).wilaya;
      }
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
    changeMyCountry(key) {
      this.dropd2 = false;
      this.dropd1 = false;
      if (key != "") {
        this.country = key;
        this.getCountryWilaya();
        SetCountry(this.$store, this.country, this.nextPage);
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
      SetCountry(this.$store, country, this.nextPage);
      const { lat, long } = this.$store.getters.getCountryById(
        this.country
      ).name;
      setCenter(this.$store, lat, long);
      this.getHospitals;
      this.getMarkers;
    },
    changeWilaya(event) {
      const wilaya = event.target.value;
      SetWilaya(this.$store, wilaya, this.nextPage);
      this.getHospitals;
      this.getMarkers;

      const { lat, long } = this.$store.getters.getWilayaById(
        this.country,
        wilaya
      );
      setCenter(this.$store, lat, long);
    },
    WhatToShow() {
      this.showAll = !this.showAll;
    },
    getRestrictedHospital(speciaName) {
      fetchHospitalsByParams(this.$store, this.nextPage, speciaName);
    },
    handleInput(e) {
      let speciaName = e.target.value;
      fetchHospitalsByParams(this.$store, this.nextPage, speciaName);
      this.getHospitals;
      this.getMarkers;
    },
    getLocation(closure) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.long = position.coords.longitude;
            this.lat = position.coords.latitude;
            this.mapCenter.lat = position.coords.latitude;
            this.mapCenter.lng = position.coords.longitude;
            this.locationErrorMessage = "";
            setCenter(
              this.$store,
              position.coords.latitude,
              position.coords.longitude
            );
            /*  localStorage.setItem("storedData", {
                long: position.coords.longitude,
                lat: position.coords.latitude,
              });*/
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
      /*}*/
    },
    loadMore() {
      try {
        this.nextPage++;
        fetchHospitals(
          this.$store,
          this.nextPage,
          this.long,
          this.lat,
          this.getSpecialityName,
          "",
          ""
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

};
</script>