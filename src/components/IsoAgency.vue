<template>
  <div class="hello relative content">
    <Header2></Header2>
    <div class="flex justify-center flex-col items-center pt-6">
      <div class="ndzklpsdl">
        <div class="mainconti" style="filter: blur(10px);  pointer-events: none;">
          <div class="flex flex-wrap" style="width: 100%;padding-inline: 30px;">
            <div class="lg:w-1/2 w-full lg:flex-row flex-row-reverse flex lg:pr-14">
              <div class="m-2 aspect-square">
                <div class="detailsCard">
                  <div class=" aspect-square">
                    <img class="w-1/2" style="margin-inline: auto;" src="/inso-pics/handshake.svg" alt="">
                    <div class="title">{{ $store.getters.getT("agency") }}</div>
                  </div>
                </div>
              </div>
              <div class="m-2">
                <div>
                  <p class="mb-3 thistt"><img src="/inso-pics/dz.png"
                      style="border-radius: 100%;display: inline;width: 40px;" alt=""> Agence Algerie</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere fuga deleniti cumque
                    distinctio doloremque ratione deserunt architecto vitae placeat beatae cupiditate assumenda repellat
                    facilis doloribus in, explicabo sed possimus.</p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2 w-full px-2 lg:mt-0 mt-8 lg:text-start text-center lg:px-14">
              <p class="h5 ttle">iso assurance gives you</p>
              <p class="h4 ttle2">{{ $store.getters.getT("this opportunity") }}</p>
              <p>{{ $store.getters.getT('opportunityAgency') }}</p>
            </div>
          </div>
          <div
            class="filtering flex lg:flex-nowrap flex-wrap justify-between mt-10 items-center flex-col-reverse lg:flex-row"
            style="width: 100%;">
            <div class="py-4 sticky z-10 flex items-center">
              <div class="countrytts">
                <div class="relative">
                  <button class="btnData countrytts lg:text-lg text-sm pl-3 w-full overflow-hidden"
                    style="padding-right: 35px" :class="[country != 'country' ? 'choosedData' : '']" @click="
                      dropd1 = !dropd1;
                    dropd2 = false;
                    ">
                    <span v-show="country === 'country'">{{
                      $store.getters.getT("country")
                    }}</span>
                    <div v-show="cc.word === country" v-for="cc in countries" :key="cc" @click="changeMyCountry(cc.word)"
                      class="flex items-center cursor-pointer">
                      <img :src="'/' + cc.flag" class="mr-2" width="15" />
                      <span v-show="$store.getters.getL === 'en'">{{ cc.en }}</span>
                      <span v-show="$store.getters.getL === 'fr'">{{ cc.fr }}</span>
                      <span v-show="$store.getters.getL === 'ar'">{{ cc.ar }}</span>
                      <span v-show="$store.getters.getL === 'tu'">{{ cc.tu }}</span>
                    </div>
                  </button>
                  <div @click="
                    dropd1 = !dropd1;
                  dropd2 = false;
                  " class="absolute right-2 h-full top-0 items-center justify-center px-3 flex z-0 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="5" viewBox="0 0 23 10">
                      <path id="Polygone_1" fill="#707070" data-name="Polygone 1"
                        d="M10.844.571a1,1,0,0,1,1.312,0l8.826,7.675A1,1,0,0,1,20.326,10H2.674a1,1,0,0,1-.656-1.755Z"
                        transform="translate(23 10) rotate(180)" />
                    </svg>
                  </div>
                  <ul v-show="dropd1" class="absolute p-2 bg-white shadow-sm z-20 w-full">
                    <li style="cursor: not-allowed !important" class="flex py-2" @click="changeMyCountry('country')">
                      {{ $store.getters.getT("country") }}
                    </li>

                    <li v-for="cc in countries" :key="cc" @click="changeMyCountry(cc.word)"
                      class="flex py-2 items-center cursor-pointer">
                      <img :src="'/' + cc.flag" class="mr-2" width="15" />
                      <span v-show="$store.getters.getL === 'en'">{{ cc.en }}</span>
                      <span v-show="$store.getters.getL === 'fr'">{{ cc.fr }}</span>
                      <span v-show="$store.getters.getL === 'ar'">{{ cc.ar }}</span>
                      <span v-show="$store.getters.getL === 'tu'">{{ cc.tu }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="relative w-3/4 2xl:w-full">
                  <select name="wilaya" id="willaya" :class="[country != 'country' ? 'choosedData' : '']"
                    @change="changeWilaya($event)" class="text-center w-full btnData lg:text-lg text-sm">
                    <option value="" selected disabled>
                      {{ $store.getters.getT("wilaya") }}
                    </option>
                    <option v-for="cc in wilaya" :key="cc" :value="cc.value">
                      <span v-if="$store.getters.getL === 'ar'">{{
                        cc.ar_name
                      }}</span>
                      <span v-else>{{ cc.fr_name }}</span>
                    </option>
                  </select>
                  <div style="pointer-events: none"
                    class="absolute right-0 h-full top-0 items-center justify-center px-3 flex z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="5" viewBox="0 0 23 10">
                      <path fill="#707070" id="Polygone_1" data-name="Polygone 1"
                        d="M10.844.571a1,1,0,0,1,1.312,0l8.826,7.675A1,1,0,0,1,20.326,10H2.674a1,1,0,0,1-.656-1.755Z"
                        transform="translate(23 10) rotate(180)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="aaqsze pb-1">
              <img class="lg:mx-5 mx-2 2xl:w-8 w-5" src="/inso-pics/asss.png" alt=""
                style="height: auto;object-fit: contain;">
              <div>
                <div class="flex justify-around 2xl:py-1 flex-col items-center h-full">
                  <p class="isohelpttl">YOU THINK THAT YOU NEED SUPPORT?</p>
                  <a href="tel:+213556000023"
                    class="lg:text-start text-center lg:font-normal font-semibold cursor-pointer">ISO ASSURANCE Will Guide
                    you</a>
                </div>

              </div>
              <img class="lg:mx-5 mx-2 2xl:w-8 w-5" src="/inso-pics/logo-visit-phone.png" alt=""
                style="height: auto;object-fit: contain;">
            </div>
          </div>
          <div class="hospitalsList">
            <div v-for="(hospital, index) in getHospitals" :key="index" class="my-3 mtgv" @mouseover="hoverMarker(index)" @mouseleave="leaveMarker(index)">
              <div class="hosimg">
                <img
                  :src="hospital.image.length > 0 ? 'https://admin-assurance-private.assuranceiso.com/web/images/' + hospital.image : '/inso-pics/Myplaceholder.jpg'"
                  class="aspect-square w-full" style="OBJECT-FIT: contain;" />
              </div>
              <div class="hosdata">
                <div>
                  <p class="hosdatatitle">{{ hospital.name }}</p>
                </div>
                <button @click="showInsoModal(hospital.address_url)" class="plusBtn hosdatabtn"
                  style="font-size: 9px;white-space: nowrap;margin: 0px;">
                  s'avoir plus
                </button>
              </div>
            </div>
          </div>
          <!-- Map Section-->
          <div class="mapouter">
            <div class="gmap_canvas">
              <div class="srchbyloc">
                {{ $store.getters.getT("or just search by location") }}
              </div>
              <div class="absolute lg:top-16 left-8 flex right-0 z-10 trths">
                <div class="flex location" :class="[filter ? 'showLocation' : '']">
                  <div class="icon" @click="filter = !filter">
                    <img src="/inso-pics/reglage_icon.svg" alt="">
                  </div>
                  <div class="relative w-fit h-auto">
                    <button :class="[
                      country != '' ? 'choosedData' : 'notSelected',
                    ]" class="btnData md:text-lg text-sm pl-3 mapDrop" style="padding-right: 20px" @click="dropd2 = !dropd2;dropd1 = false;">
                      <span v-show="country === ''">
                        {{ $store.getters.getT("country") }}
                      </span>
                      <div v-show="cc.word === country" v-for="cc in countries" :key="cc"
                        @click="changeMyCountry(cc.word)" class="flex items-center cursor-pointer">
                        <img :src="'/' + cc.flag" class="mr-2" width="15" />
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
                    <div style="pointer-events: none"
                      class="absolute right-0 h-full top-0 items-center justify-center px-3 flex z-0" @click="
                        dropd2 = !dropd2;
                      dropd1 = false;
                      ">
                      <svg :class="[
                        country != '' ? 'choosedData' : 'notSelected',
                      ]" xmlns="http://www.w3.org/2000/svg" width="15" height="5" viewBox="0 0 23 10"
                        class="fill-white lg:inline hidden">
                        <path id="Polygone_1" data-name="Polygone 1"
                          d="M10.844.571a1,1,0,0,1,1.312,0l8.826,7.675A1,1,0,0,1,20.326,10H2.674a1,1,0,0,1-.656-1.755Z"
                          transform="translate(23 10) rotate(180)" />
                      </svg>
                    </div>
                    <ul v-show="dropd2" class="absolute p-2 bg-white shadow-sm z-20">
                      <li style="cursor: not-allowed !important" class="flex py-2 justify-end"
                        @click="changeMyCountry('country')">
                        {{ $store.getters.getT("country") }}
                      </li>
                      <li v-for="cc in countries" :key="cc" @click="changeMyCountry(cc.word)"
                        class="flex py-2 items-center cursor-pointer">
                        <img :src="'/' + cc.flag" class="mx-2" width="15" />
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
                      </li>
                    </ul>
                  </div>
                  <div class="relative">
                    <select :class="[country != '' ? 'choosedData' : 'notSelected']" name="wilaya"
                      @change="changeWilaya($event)" class="mapDrop md:text-lg text-sm text-center pr-6 overflow-ellipsis"
                      style="z-index: 1;padding:0px" id="willaya">
                      <option value="" selected disabled>
                        {{ $store.getters.getT("wilaya") }}
                      </option>
                      <option v-for="(cc, index) in wilaya" :key="cc" :value="cc.fr_name"
                        :selected="index == 15 ? true : false">
                        <span v-if="$store.getters.getL === 'ar'">{{
                          cc.ar_name
                        }}</span>
                        <span v-else>{{ cc.fr_name }}</span>
                      </option>
                    </select>
                    <div style="pointer-events: none"
                      class="absolute right-0 h-full top-0 items-center justify-center px-3 flex z-10">
                      <svg :class="[
                        country != 'country' ? 'choosedData' : 'notSelected',
                      ]" class="fill-white" xmlns="http://www.w3.org/2000/svg" width="15" height="5"
                        viewBox="0 0 23 10">
                        <path id="Polygone_1" data-name="Polygone 1"
                          d="M10.844.571a1,1,0,0,1,1.312,0l8.826,7.675A1,1,0,0,1,20.326,10H2.674a1,1,0,0,1-.656-1.755Z"
                          transform="translate(23 10) rotate(180)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/2">
                  <div class="relative hidden w-fit searchsection"
                    style="margin-inline: 5px;border-radius: 20px;background: rgba(255, 255, 255, .77);">
                    <div class="searchtxt"><input style="background-color: transparent;" type="text" name="search"
                        id="search" placeholder="Search ..." @keyup.stop="handleInput($event)"
                        class="w-full py-1.5 px-4 placeholder:text-slate-400" /></div>
                    <div class="flex items-center searchicon">
                      <svg class="h-7 w-7" fill="#3B3B3B" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="relative searchBox mr-3 ml-3" @mouseover="showSearch()" @mouseleave="hideSearch()">
                    <div class="searchBar" :class="search ? 'searchBarShow' : ''">
                      <input ref="searchtxt" type="text" name="search" id="search"
                        placeholder="Search by speciality name..." @keyup.stop="handleInput($event);" @click="fct()"
                        style="opacity: 0.77;height: 100%;"
                        class="rounded-full w-full py-0 px-4 placeholder:text-slate-400 text-sm 2xl:text-xl" />
                    </div>
                    <div class="searchBnt" @click="closeit()">
                      <svg v-if="!search" class="h-6 w-6" fill="#0000008c" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"></path>
                      </svg>
                      <span v-else class="material-symbols-outlined">
                        <img src="/inso-pics/cancel_FILL-1.svg" alt="">
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <GoogleMap id="gmap_canvas" api-key="AIzaSyDSqALzVX0HeTwWrrLiHUn_LlWBhmp6cEU"
                style="direction:ltr !important;width: 100%; height: 100%" :center="getCenter" :zoom="12.5"
                mapId="bfcd2a1ab34b8b7c" :clickableIcons="true" :mapTypeControl="false" :streetViewControl="false"
                :disableDefaultUI="true" v-if="getMarkers.length
                  > 0" @click="mark">
                <gmap-custom-marker class="hoverMarker"
                  :style="[openSelected(index) ? { 'z-index': '100' } : { 'z-index': '50' }]"
                  v-for="(position, index) in getMarkers" :key="index" :marker="position">
                  <GMapInfoWindow v-if="openSelected(index)" :options="infoOptions" :position="infoWindowPos">
                    <div ref="modalInfo">
                      <div :id="index">
                        <div class="pb-4 pt-4 modal-map-info"
                          style="margin-top:30px;margin-left:-60px;background-color:#fff;width:200px">
                          <div class="flex justify-end mr-2">
                            <button style="font-size:18px" @click="close" class="hover:text-blue-700"
                              id="closeModalInfo">&times;</button>
                          </div>
                          <div>
                            <div>
                              <div class="m-2"><span style="font-weight: bold;display:flex;justify-content:center">
                                  {{ position.address_displayed }}</span>

                              </div>
                            </div>
                            <div class="m-2" style="display:flex;justify-content:center;width:100%;">
                              <button class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                style="background:#22C7E5;">
                                <a :href="position.address_url" target="_blank">
                                  Ouvrir sur map
                                </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GMapInfoWindow>
                  <img @click="toggleInfoWindow(position, index)" width="30" height="30" :id="'mark_' + index"
                    src="http://admin-assurance-private.assuranceiso.com/web/marker.png" />
                  <my-component></my-component>
                </gmap-custom-marker>
                <gmap-custom-marker :marker="getCenter" class="thisCenter">
                  <img width="30" height="30" src="http://admin-assurance-private.assuranceiso.com/web/location.png" />
                  <my-component></my-component>
                </gmap-custom-marker>
              </GoogleMap>
              <GoogleMap id="gmap_canvas" mapId="bfcd2a1ab34b8b7c" api-key="AIzaSyDSqALzVX0HeTwWrrLiHUn_LlWBhmp6cEU"
                style="width: 100%; height: 100%" :center="getCenter" :zoom="12.5" :mapTypeControl="false"
                :streetViewControl="false" v-if="getMarkers.length == 0">
              </GoogleMap>
            </div>
          </div>
          <!-- End Map Section-->
        </div>
      </div>
      <SearchUser></SearchUser>
      <div class="lg:pt-12 pt-0 w-full" style="padding-top: 50px;background-color: white;">
        <ContactUs></ContactUs>
      </div>
      <!-- FOOTER -->

      <MyFooter></MyFooter>
    </div>
  </div>
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainconti {
  padding-top: 30px;
}

.hospitalsList {
  padding-inline: 30px;
}

.nnbnj {
  font-size: 11px;
}

@media screen and (max-width: 768px) {
  .app__img {
    width: 100% !important;
  }

  .mapouter {
    aspect-ratio: 2/3;
  }

  .nnbnj {
    font-size: 8px;
  }

  .app__img img {
    margin-top: 0px !important;
    margin-left: 0px !important;
    width: 100% !important;
  }
}
</style>
<style scoped>
.mapouter {
  padding: 30px;
  height: auto;
  aspect-ratio: 2/1;
}

.aaqsze {
  display: flex;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  padding-inline: 10px;
  background-color: white;
  box-shadow: 0px 1px 6px;
  max-width: 65%;
  height: fit-content;
}

.btnData {
  width: fit-content;
  margin-inline: 4px;
}

.hosdatabtn {
  align-self: flex-end;
  cursor: pointer;
  background-color: #1e85f1;
  color: white;
}

.hosdatatitle {
  font-size: 15px;
  text-transform: capitalize;
}

.hosdatatxt {
  font-size: inherit;
}

.mainconti {
  width: 100%;
  background-image: url('../../public/inso-pics/Groupe 3221.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: top;
  background-position-x: right;
  transition: all .5s;
  background-position-x: right;
  overflow: hidden;
  border-radius: 30px;
}

.mainconti:hover {
  background-size: 150%;
}

.detailsCard {
  background-image: linear-gradient(225deg, #2000FF 0%, #00FFB9bf 95%);
  display: flex;
  color: white;
  border-radius: 30px;
  padding: 10px;
  aspect-ratio: 1/1;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  flex-wrap: nowrap;
  overflow: hidden;
  padding-block: 20px;
  width: 120px
}

.hospitalsList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-inline: 30px;
}

.hosdata {
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.hosimg {
  width: 35%;
  min-width: 35%;
}

.hosimg img {
  width: 100% !important;
  object-fit: contain;
}

.mtgv {
  width: 32%;
  display: flex;
  border-color: transparent;
  box-sizing: border-box;
}

.mtgv:hover {
  border-color: rgb(0 0 0 /.2);
}

.btnData {
  border: 1px solid black;
  color: #707070;
  background-color: white !important;
}

#willaya {
  padding-inline: 30px;
}

.mainconti {
  font-size: 12px;
}

.detailsCard>div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 1919px) {
  .mainconti {
    font-size: 19px;
    padding-top: 100px;
  }

  .hosdatatitle {
    font-size: 22px;
  }

  .thistt {
    font-size: 34px;
  }

  .countrytts,
  #willaya {
    font-size: 28px;
    padding-inline: 40px;
    padding-block: 10px;
  }
}

@media screen and (max-width: 768px) {
  .detailsCard {
    width: 80px !important;
  }

  .ttle,
  .ttle2 {
    margin-inline: auto;
    text-align: center;
  }

  .mtgv {
    width: calc(50% - 8px);
    padding: 5px;
  }

  .aaqsze {
    max-width: 97%;
  }

  .hosimg {
    min-width: 100%;
    width: 100%;
  }

  .hosdatatitle {
    font-size: 13px;
  }

  .ttle2 {
    color: #707070;
  }

  .mainconti {
    font-size: 10px;
  }

  .hospitalsList {
    height: 100vw;
  }
}

@media screen and (max-width: 1200px) {
  .mainconti {
    background-size: cover;
  }
}
</style>
