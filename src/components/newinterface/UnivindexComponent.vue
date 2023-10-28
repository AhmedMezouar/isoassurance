
<template>
  <!-- Ambulance-->
  <div id="clinique-tablette" class="clin d-flex justify-content-center">
    <div id="clinique--2" style="overflow: hidden;">
      <div class="row">
        <!-- FILTRAGE -->
        <div class="col-12">
          <h3 class="phone-title-haut">
            <img src="/inso-pics/tu.png" style="border-radius: 100%;display: inline;width: 30px;" alt="">
            {{ $store.getters.getT("university") }}
          </h3>
        </div>
        <div class="col-12">
          <div class="card card-special">
            <div class="card-body">
              <div class="row" style="font-size: 12px; position: relative;">
                <div class=" col-12 mb-2">
                  <input type="text" class="btnData contr search form-control" placeholder="Rechercher ..."
                    @keyup.stop="handleInput($event); gotores($event)" @click="fct()" name="search" id="search"
                    ref="searchtxt">
                </div>
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
      <div id="mylist" class="monbf liste-univ">
        <div class="phoneIcnns2" id="univer-tab">
          <div class="row d-flex justify-content-center">
            <!-- HOPITAL -->
            <div class="col-12 col-md-6" v-for="(university, index) in getUniversities" :key="index"
              @mouseover="hoverMarker(index)" @mouseleave="leaveMarker(index)">
              <div class="card card-special">
                <div class="card-body">
                  <img id="hotel-mobile"
                    :src="university.image.length > 0 ? 'https://admin-assurance-private.assuranceiso.com/web/images/' + university.image : '/inso-pics/Myplaceholder.jpg'"
                    alt="">

                  <span class="name-hopital">{{ university.name }}</span><br>
                  <span class="desc-hopital">
                    {{ university.country ? university.country : '' }}
                    {{ university.country && university.wilaya ? '-' : '' }}
                    {{ university.wilaya ? university.wilaya : '' }}
                  </span><br>
                  <span class="km-hopital"><img src="/inso-pics/location-svgrepo-com.png" alt="">
                    {{ distance }} km 2,564.58 km
                  </span>
                  <div class="row mx-auto justify-content-center icon-hopital mt-4">


                    <div class="col-12" @click="gotolinks(university.link, index)" style="margin-top: -30px;">
                      <span>S'avoir plus</span>
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
  fetchUnivs,
  SetCountry,
  setUniversityWilaya,
  getMarkers,
  setCenter,
  leave_marker,
  mark_marker,
  fetchUnivsByParams
} from "../../composable/index";
import { mapMutations } from "vuex";
export default {
  components: {
  },
  data() {
    return {
      search: false,
      focust: false,
      typeData: "map",
      lat: "",
      long: "",
      nextPage: 1,
      universities: [],
      markers: [],
      moreExists: false,
      country: "Turc",
      wilaya: [],
      countries: [
        {
          word: "Turc",
          fr: "Turquie",
          en: "Turkey",
          ar: "تركيا",
          tu: "Turc",
          lat: 40.945711799603615,
          long: 29.21994356201801,
          flag: "inso-pics/tu.png",
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
      this.getUniversities;
      getMarkers(this.$store, "univ");
      return this.$store.state.univ.markers;
    },
    getUniversities() {
      return this.$store.state.univ.universities;
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
      if (typeof e != "undefined") {
        if ((!e.includes('https://')) && (!e.includes('http://'))) {
          e = 'https://' + e
        }
        window.open(e);
      }
      //this.$store.commit("SET_typeModal", { index, typeModal: "hospital" });
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
        SetCountry(this.$store, this.country, this.nextPage);
        const { lat, long } = this.$store.getters.getCountryById(
          this.country
        ).name;

        setCenter(this.$store, lat, long);
        this.getUniversities;
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
      this.getUniversities;
      this.getMarkers;
    },
    changeWilaya(event) {
      const wilaya = event.target.value;
      setUniversityWilaya(this.$store, wilaya, this.nextPage);
      fetchUnivs(
        this.$store,
        wilaya,
      );
      this.get;
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
    getRestrictedUniversity(speciaName) {
      fetchUnivsByParams(this.$store, this.nextPage, speciaName);
    },
    handleInput(e) {
      let speciaName = e.target.value;
      fetchUnivsByParams(this.$store, this.nextPage, speciaName);
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
        fetchUnivs(
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
    setCenter(this.$store, 41.015137, 28.979530)
    this.getCountryWilaya();
    fetchUnivs(
      this.$store,
      "istanbul",
    );
  },

};
</script>
  
  
  