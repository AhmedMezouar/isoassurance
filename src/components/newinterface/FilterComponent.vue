
<template>
  <!-- FILTRAGE -->
  <div class="card card-special">
    <div class="card-body">
      <p>FILTER</p>
          <div class="row">
            <div class=" col-12 mb-2">
          <input type="text" class="btnData contr search form-control afficher" placeholder="Rechercher ..."
          @keyup.stop="handleInput($event); gotores($event)"
          @click="fct()" name="search" id="search" ref="searchtxt" >                      
        </div>
      </div>
      <div class="row" style="font-size: 12px; position: relative;">
        <div class="col-6 mb-2">
                  <div @click="
                  dropd1 = !dropd1;
                dropd2 = false;
                " class="">
<button class="form-select select-speciale">
                    <span v-show="country === ''">
                      {{ $store.getters.getT("country") }}
                    </span>
                    <div v-show="cc.word === country" v-for="cc in countries" :key="cc"
                      @click="changeMyCountry(cc.word)" class="flex items-center cursor-pointer">
                      <span v-show="$store.getters.getL === 'en'">{{
                        cc.en
                      }}</span>
                      <span v-show="$store.getters.getL === 'fr'">{{
                        cc.fr
                      }}</span>
                      <span v-show="$store.getters.getL === 'ar'">{{
                        cc.ar
                      }}</span>
                      <span v-show="$store.getters.getL === 'tu'">{{
                        cc.tu
                      }}</span>
                    </div>
                  </button>                        </div>
                <ul v-show="dropd1" class="absolute p-2 bg-white shadow-sm z-20 list-pays">
                  

                  <li v-for="(cc, index) in countries" :key="cc" @click="changeMyCountry(cc.word, index)"
                    class="li-pays">
                    <span v-show="$store.getters.getL === 'en'">{{ cc.en }}</span>
                    <span v-show="$store.getters.getL === 'fr'">{{ cc.fr }}</span>
                    <span v-show="$store.getters.getL === 'ar'">{{ cc.ar }}</span>
                    <span v-show="$store.getters.getL === 'tu'">{{ cc.tu }}</span>
                  </li>
                </ul>
              </div>

        <div class=" col-6">
          <select name="wilaya" class="form-select select-speciale" :class="[country != 'country' ? 'choosedData' : '']" aria-label="Default select example"
          @change="changeWilaya($event)">
            <option value="" selected disabled>{{ $store.getters.getT("wilaya") }}</option>
            <option v-for="cc, in wilaya" :key="cc" :value="cc.value">
              <span v-if="$store.getters.getL === 'ar'">{{
                cc.ar_name
              }}</span>
              <span v-else>{{ cc.fr_name }}</span>
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <style scoped>
  
  </style>
  <script>
import {
  fetchHospitalsByParams,
  fetchHospitals,
  SetCountry,
  SetWilaya,
  getMarkers,
  setCenter,leave_marker,mark_marker
} from "../../composable/index";

export default {
  components: {
    
  },
  data() {
    return {
      mapCenter: {
        lat: null,
        lng: null,
      },
      currentPosition: null,
      distance: "",

      typeData: "map",
      search: false,
      focust: false,
      lat: "",
      long: "",
      nextPage: 1,
      hospitals: [],
      markers: [],
      moreExists: false,
      country: "Algerie",
      wilaya: [],
      wila: "Alger",
      countries: [{
          word: "Algerie",
          fr: "Algerie",
          en: "Algeria",
          ar: "الجزائر",
          tu: "Cezayir",
          lat: 36.74442239909969,
          long: 3.0726561299136623,
          flag: "inso-pics/dz.png",
        }, 
        {
          word: "Tunisie",
          fr: "Tunisie",
          en: "Tunisia",
          ar: "تونس",
          tu: "Tunus",
          lat: 33.892166,
          long: 9.561555,
          flag: "inso-pics/tunisie.png",
        },
        {
          word:"Turc",
          fr: "Turc",
          en: "Turc",
          ar: "تركيا",
          tu: "Turc",
          lat: 40.945711799603615,
          long: 29.21994356201801,
          flag: "inso-pics/tu.png",
        },],
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
      flag: "dz.png",
      flags: [
        "dz.png",
        "tunisie.png",
        "tu.png",

      ],
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
      getMarkers(this.$store, "catalogue");
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
    hoverMarker(index) {
      mark_marker(index)
    },
    leaveMarker(index) {
      leave_marker(index)
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
    gotolinks(link, index = 0) {
      if (typeof link === "undefined" || link.length == 0) {
        this.$store.commit("SET_typeModal", { index, typeModal: "hospital" });
      } else {
        if (!link.includes('https://')) {
          link = 'https://' + link
        }
        window.open(link);
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
    getCountryWilaya() {
      //this.countries = this.$store.getters.getCountries;
      if (this.country != "country") {
        this.wilaya = this.$store.getters.getCountryById(this.country).wilaya;
      }
    },
    changeMyCountry(key, index = 0) {
      this.flag = this.flags[index]
      this.dropd2 = false;
      this.dropd1 = false;
      if (key != "country") {
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
    degToRad(deg) {
      return deg * (Math.PI / 180);
    },
    loadMore() {
      try {
        this.nextPage++;
        fetchHospitals(
          this.$store,
          this.nextPage,
          this.long,
          this.lat,
          this.getSpecialityName
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
    },
    
  
  },
  created() {

    this.getCountryWilaya();
    SetCountry(this.$store, this.country, this.nextPage);

    this.getLocation(() => {
      fetchHospitals(
        this.$store,
        this.nextPage,
        this.long,
        this.lat,
        this.getSpecialityName,
        this.country,
        ""
      );
    });
  },

};
  </script>
  
  
  