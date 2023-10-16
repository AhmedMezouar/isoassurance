
<template>
  <!-- Ambulance-->
  <div id="clinique-tablette" class="clin d-flex justify-content-center" >
    <div id="clinique--2" style="overflow: hidden;">
      <div class="row">
        <!-- FILTRAGE -->
          <div class="col-12">
            <h3 class="phone-title-haut">
              <img :src="'/inso-pics/' + flag"
                style="border-radius: 100%;display: inline;width: 30px;" alt="">
                Les Cliniques
            </h3>  
          </div>
          <div class=" col-12 mb-2">
                <input type="text" class="btnData contr search form-control" placeholder="Rechercher ..."
                @keyup.stop="handleInput($event)"
                  name="search" id="search" ref="searchtxt" style="width: 100% !important;">                      
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
          <div class=" col-6">
            <select name="wilaya" class="form-select select-speciale" :class="[country != 'country' ? 'choosedData' : '']" aria-label="Default select example"
            @change="changeWilaya($event)" 
            >
              <option value="" selected disabled>{{ $store.getters.getT("wilaya") }}</option>
              <option v-for="cc, in wilaya" :key="cc" :value="cc.value">
                <span v-if="$store.getters.getL === 'ar'">{{
                  cc.ar_name
                }}</span>
                <span v-else>{{ cc.fr_name }}</span>
              </option>
            </select>
          </div>
        <!-- FIN-FILTRAGE --> 
      </div>
      <div id="mylist" class="monbf">
          <div class="phoneIcnns2"> 
            <div class="row d-flex justify-content-center">
              <!-- HOPITAL --> 
              <div class="col-12 col-md-6" v-for="(hospital, index) in getHospitals" :key="index" @mouseover="hoverMarker(index)" @mouseleave="leaveMarker(index)">
                <div class="card card-special">
                  <div class="card-body">
                    <img :src="hospital.image.length > 0 ? 'https://admin-assurance-private.assuranceiso.com/web/images/' + hospital.image : '/inso-pics/Myplaceholder.jpg'" alt=""> 
                                       
                    <span class="name-hopital">{{ hospital.name }}</span><br>
                    <span class="desc-hopital">
                      {{hospital.country?hospital.country:''}}
                      {{ hospital.country && hospital.wilaya?'-':'' }}
                      {{hospital.wilaya?hospital.wilaya:''}}  
                    </span><br>
                    <span class="km-hopital" ><img src="/inso-pics/location-svgrepo-com.png" alt=""> 
                      {{ distance }} km 2,564.58 km
                    </span>
                    <div class="row mx-auto justify-content-center icon-hopital mt-4">
                      <div class="col-4">
                        <a :href="'Tel:'+ hospital.phone_number">
                          <svg class="svg-svg" width="50px" height="50px" viewBox="0 0 24 24" fill="#479BD8" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_15_529)">
                            <path d="M2.01394 6.87134C1.34749 10.0618 3.85967 13.8597 7.01471 17.0147C10.1698 20.1698 13.9676 22.682 17.1581 22.0155C19.782 21.4674 21.1215 20.0697 21.8754 18.8788C22.1355 18.4678 22.0042 17.9344 21.6143 17.6436L17.9224 14.8897C17.5243 14.5928 16.9685 14.633 16.6174 14.9842L14.6577 16.9438C14.6577 16.9438 12.7529 16.3246 10.2288 13.8006C7.70482 11.2766 7.08564 9.37175 7.08564 9.37175L9.04529 7.4121C9.39648 7.06091 9.43671 6.5052 9.13975 6.10709L6.38585 2.4151C6.09505 2.02525 5.56163 1.89395 5.15068 2.15407C3.9597 2.90794 2.56203 4.24747 2.01394 6.87134Z"/>
                          </g>
                        </svg>
                      </a>                 
                      </div>
                      <div class="col-4">
                        <a target="_blank" :href="hospital.address_url">
                          <svg class="svg-svg" fill="#479BD8" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                          viewBox="0 0 315 315" xml:space="preserve">
                          <g>
                            <g>
                              <g>
                                <path d="M157.5,0C93.319,0,41.103,52.215,41.103,116.397c0,62.138,106.113,190.466,110.63,195.898
                                  c1.425,1.713,3.538,2.705,5.767,2.705c2.228,0,4.342-0.991,5.767-2.705c4.518-5.433,110.63-133.76,110.63-195.898
                                  C273.897,52.215,221.682,0,157.5,0z M157.5,295.598c-9.409-11.749-28.958-36.781-48.303-65.397
                                  c-34.734-51.379-53.094-90.732-53.094-113.804C56.103,60.486,101.59,15,157.5,15c55.91,0,101.397,45.486,101.397,101.397
                                  c0,23.071-18.359,62.424-53.094,113.804C186.457,258.817,166.909,283.849,157.5,295.598z"/>
                                <path d="M195.657,213.956c-3.432-2.319-8.095-1.415-10.413,2.017c-10.121,14.982-21.459,30.684-33.699,46.67
                                  c-2.518,3.289-1.894,7.996,1.395,10.514c1.36,1.042,2.963,1.546,4.554,1.546c2.254,0,4.484-1.013,5.96-2.941
                                  c12.42-16.22,23.933-32.165,34.219-47.392C199.992,220.938,199.09,216.275,195.657,213.956z"/>
                                <path d="M157.5,57.5C123.589,57.5,96,85.089,96,119s27.589,61.5,61.5,61.5S219,152.911,219,119S191.411,57.5,157.5,57.5z
                                  M157.5,165.5c-25.64,0-46.5-20.86-46.5-46.5s20.86-46.5,46.5-46.5c25.641,0,46.5,20.86,46.5,46.5S183.141,165.5,157.5,165.5z"/>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </a>              
                      </div>
                      <div class="col-4" @click="gotolinks(hospital.link, index)">
                        <svg class="svg-svg" width="50px" height="50px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>apps</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="icon" fill="#479BD8" transform="translate(64.000000, 64.000000)">
                                    <path d="M64,32 C64,49.664 49.664,64 32,64 C14.336,64 -4.26325641e-14,49.664 -4.26325641e-14,32 C-4.26325641e-14,14.336 14.336,-4.26325641e-14 32,-4.26325641e-14 C49.664,-4.26325641e-14 64,14.336 64,32 Z M224,32 C224,49.664 209.664,64 192,64 C174.336,64 160,49.664 160,32 C160,14.336 174.336,-4.26325641e-14 192,-4.26325641e-14 C209.664,-4.26325641e-14 224,14.336 224,32 Z M64,352 C64,369.664 49.664,384 32,384 C14.336,384 -4.26325641e-14,369.664 -4.26325641e-14,352 C-4.26325641e-14,334.336 14.336,320 32,320 C49.664,320 64,334.336 64,352 Z M224,352 C224,369.664 209.664,384 192,384 C174.336,384 160,369.664 160,352 C160,334.336 174.336,320 192,320 C209.664,320 224,334.336 224,352 Z M64,192 C64,209.664 49.664,224 32,224 C14.336,224 -4.26325641e-14,209.664 -4.26325641e-14,192 C-4.26325641e-14,174.336 14.336,160 32,160 C49.664,160 64,174.336 64,192 Z M224,192 C224,209.664 209.664,224 192,224 C174.336,224 160,209.664 160,192 C160,174.336 174.336,160 192,160 C209.664,160 224,174.336 224,192 Z M384,32 C384,49.664 369.664,64 352,64 C334.336,64 320,49.664 320,32 C320,14.336 334.336,-4.26325641e-14 352,-4.26325641e-14 C369.664,-4.26325641e-14 384,14.336 384,32 Z M384,352 C384,369.664 369.664,384 352,384 C334.336,384 320,369.664 320,352 C320,334.336 334.336,320 352,320 C369.664,320 384,334.336 384,352 Z M384,192 C384,209.664 369.664,224 352,224 C334.336,224 320,209.664 320,192 C320,174.336 334.336,160 352,160 C369.664,160 384,174.336 384,192 Z" id="Combined-Shape"></path>
                                </g>
                            </g>
                        </svg>            
                      </div>
                      <div class="col-4 mt-2">    
                        <p>Appelle</p>                
                      </div>
                      <div class="col-4 mt-2">
                        <p>Direction</p>          
                      </div>
                      <div class="col-4 mt-2">
                        <p>Details</p>          
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
      countries: [
      {
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
        },
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
  
  
  