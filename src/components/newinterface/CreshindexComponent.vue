
<template>
  <!-- Ambulance-->
  <div id="clinique-tablette" class="clin d-flex justify-content-center">
    <div id="clinique--2" style="overflow: hidden;">
      <div class="row">
        <!-- FILTRAGE -->
        <div class="col-12">
          <h3 class="phone-title-haut">
            <img :src="'/inso-pics/' + flag" style="border-radius: 100%;display: inline;width: 30px;" alt="">
            Les Creches
          </h3>
        </div>
        <div class="col-12">
          <div class="card card-special">
            <div class="card-body">
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
                    </button>
                  </div>
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
                <!--<div class=" col-6" >
                          <div @click="
                          dropd1 = !dropd1;
                        dropd2 = false;
                        " class="absolute right-2 h-full top-0 items-center justify-center px-3 flex z-0 cursor-pointer">
                          
                        </div>
                          <ul v-show="dropd1" class="absolute p-2 bg-white shadow-sm z-20 w-full">
                          <li style="cursor: not-allowed !important" class="flex py-2" @click="changeMyCountry('country')">
                            {{ $store.getters.getT("country") }}
                          </li>

                          <li v-for="(cc, index) in countries" :key="cc" @click="changeMyCountry(cc.word, index)"
                            class="flex py-2 items-center cursor-pointer">
                            <img :src="'/' + cc.flag" class="mr-2" width="15" />
                            <span v-show="$store.getters.getL === 'en'">{{ cc.en }}</span>
                            <span v-show="$store.getters.getL === 'fr'">{{ cc.fr }}</span>
                            <span v-show="$store.getters.getL === 'ar'">{{ cc.ar }}</span>
                            <span v-show="$store.getters.getL === 'tu'">{{ cc.tu }}</span>
                          </li>
                        </ul>
                      </div>  -->

                <div class=" col-6">
                  <select name="wilaya" class="form-select select-speciale"
                    :class="[country != 'country' ? 'choosedData' : '']" aria-label="Default select example"
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
        </div>
        <!-- FIN-FILTRAGE -->
      </div>
      <div id="mylist" class="monbf">
        <div class="phoneIcnns2">
          <div class="row d-flex justify-content-center">
            <!-- HOPITAL -->
            <div class="col-12" v-for="(hospital, index) in getcreches" :key="index" @mouseover="hoverMarker(index)"
              @mouseleave="leaveMarker(index)">
              <div class="card card-special">
                <div class="card-body">
                  <img id="hotel-mobile"
                    :src="hospital.image.length > 0 ? 'https://admin-assurance-private.assuranceiso.com/web/images/' + hospital.image : '/inso-pics/Myplaceholder.jpg'"
                    alt="">

                  <span class="name-hopital">{{ hospital.name }}</span><br>
                  <span class="desc-hopital">
                    {{ hospital.country ? hospital.country : '' }}
                    {{ hospital.country && hospital.wilaya ? '-' : '' }}
                    {{ hospital.wilaya ? hospital.wilaya : '' }}
                  </span><br>
                  <span class="km-hopital"><img src="/inso-pics/location-svgrepo-com.png" alt="">
                    {{ distance }} km 2,564.58 km
                  </span>
                  <div class="row mx-auto justify-content-center icon-hopital mt-4">

                    <div class="col-6" style="margin-top: -20px;">
                      <a :href="'Tel:' + hospital.phone_number"><span>Appelle</span></a>
                    </div>
                    <div class="col-6" style="margin-top: -20px;">
                      <a target="_blank" :href="hospital.address_url"><span>Direction</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- HOPITAL -->

          </div>

        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped></style>
<script>
import {
  fetchCrechByParams,
  fetchCrech,
  setCrechCountry,
  setCrecheWilaya,
  getMarkers,
  setCenter,
  mark_marker,
  leave_marker
} from "../../composable/index";

import { mapMutations } from "vuex";

export default {
  components: {
  },
  data() {
    return {
      mapCenter: {
        lat: null,
        lng: null,
      },
      search: false,
      focust: false,
      typeData: "map",
      lat: "",
      long: "",
      nextPage: 1,
      creches: [],
      markers: [],
      moreExists: false,
      country: "Algerie",
      wilaya: [],
      wila: "Alger",
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
      this.getcreches;
      getMarkers(this.$store, "cresh");
      return this.$store.state.cresh.markers;
    },
    getcreches() {
      return this.$store.state.cresh.creches;
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
      if (key != "country") {
        this.country = key;
        this.getCountryWilaya();
        setCrechCountry(this.$store, this.country, this.nextPage);
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
      setCrechCountry(this.$store, country, this.nextPage);
      const { lat, long } = this.$store.getters.getCountryById(
        this.country
      ).name;
      setCenter(this.$store, lat, long);
      this.getHospitals;
      this.getMarkers;
    },
    changeWilaya(event) {
      const wilaya = event.target.value;
      setCrecheWilaya(this.$store, wilaya, this.nextPage);
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
      fetchCrechByParams(this.$store, this.nextPage, speciaName);
    },
    handleInput(e) {
      let speciaName = e.target.value;
      fetchCrechByParams(this.$store, this.nextPage, speciaName);
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
        this.getMarkers
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
      /*}*/
    },
    loadMore() {
      try {
        this.nextPage++;
        fetchCrech(
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
    }

  },
  created() {

    this.getCountryWilaya();
    setCrechCountry(this.$store, this.country, this.nextPage);

    this.getLocation(() => {
      fetchCrech(
        this.$store,
        "",
        this.long,
        this.lat,
        this.nextPage,

      );
    });
    this.getMarkers
  },

};
</script>
  
  
  