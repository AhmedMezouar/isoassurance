<template>
  <div class="hello relative content">
    <Header2></Header2>
    <div  class="flex justify-center flex-col items-center pt-6" style="margin-inline: auto; width:var(--inso-w)">
      <div class="mainconti"  id="" style="overflow: ">
        <!-- style="filter: blur(10px);  pointer-events: none;"-->
        <div class="flex-wrap" style="width: 100%;padding-inline: 30px;">
          <div>
            <div class="container">
              <div class="row d-flex justify-content-center align-items">
                <div class="col-6">
                  <p class="title3" style="color: black; background-color: #fff; border-radius: 30px 0px 30px 0px; padding: 15px;">Le membre ISO Assurance bénéficie de plusieurs avantages
                  «confort et remises sur les tarifs» sur les services
                  offerts par nos établissements de santé conventionnées.</p>
                </div>
                <div class="col-3">
                  <p class="thistt">
                    <img :src="'/inso-pics/' + flag"
                      style="border-radius: 100%;display: inline;width: 40px;" alt="">
                       Les Hôtels
                  </p>
                </div>
                <div class="col-3 support">
                    <div class="flex justify-around py-1 flex-col items-center">
                      <a href="tel:+213556000023"
                        class="lg:text-start text-center lg:font-normal font-semibold cursor-pointer iso-hover" style="font-size: 18px !important;">ISO ASSURANCE Will Guide
                        you</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" style="margin-top: 30px !important;">
              <div class="row d-flex justify-content-center align-items hotel-seacrh">
                <div class="col-6">
                  <input type="text" class="btnData contr search form-control" placeholder="Rechercher ..."
                        @keyup.stop="handleInput($event); gotores($event)"
                        @click="fct()" name="search" id="search" ref="searchtxt" >
                      </div>
                <div class="col-2">
                  <div class="">
                    <div class="relative">
                      <button class="btnData countrytts lg:text-lg text-sm pl-3 w-full overflow-hidden"
                        style="padding-right: 35px" :class="[country != 'country' ? 'choosedData' : '']" @click="
                          dropd1 = !dropd1;
                        dropd2 = false;
                        ">
                        <span v-show="country === 'country'">{{
                          $store.getters.getT("country")
                        }}</span>
                        <div v-show="cc.word === country" v-for="(cc, index) in countries" :key="cc"
                          @click="changeMyCountry(cc.word, index)" class="flex items-center cursor-pointer">
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
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="relative w-3/4 2xl:w-full">
                    <select name="wilaya" id="willaya" :class="[country != 'country' ? 'choosedData' : '']"
                      @change="changeWilaya($event)" class="text-center w-full btnData lg:text-lg text-sm">
                      <option value="" selected disabled>
                        {{ $store.getters.getT("wilaya") }}
                      </option>
                      <option v-for="cc, in wilaya" :key="cc" :value="cc.value">
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
        </div>
        <div
          class="filtering flex lg:flex-nowrap flex-wrap justify-between mt-10 items-center flex-col-reverse lg:flex-row"
          style="width: 100%;">
        </div>
        <hotelindexComponent></hotelindexComponent>
        <div class="container hospitalsList">
          <div class="row">
              <div class="col-12" v-for="(hotel, index) in getHotels" :key="index" @mouseover="hoverMarker(index)" @mouseleave="leaveMarker(index)">
                <div class="hotel-desktop">
                  <div class="hotel-desktop-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <img
                        :src="hotel.image.length > 0 ? 'https://admin-assurance-private.assuranceiso.com/web/images/' + hotel.image : '/inso-pics/Myplaceholder.jpg'"
                        class="" style="OBJECT-FIT: contain;background: rgb(0 0 0/.15);" />
                      </div>
                      <div class="col-sm-9">
                        <div class="row roo">
                          <div class="col-sm-9">
                            <span class="name-hotel">{{ hotel.name }}</span><br>
                            <span class="desc-hotel">
                              {{hotel.country?hotel.country:''}}
                              {{ hotel.country && hotel.wilaya?'-':'' }}
                              {{hotel.wilaya?hotel.wilaya:''}}  
                            </span><br>
                          </div>
                          
                          
                          <div class="row button-vers btn-hotel">
                            <div class="col-sm-4">
                              <a  :href="'Tel:'+ hotel.phone_number" class="btn-hotel-desktop" style="">
                                <svg class="hotel-svg" width="20px" height="20px" viewBox="0 0 24 24" fill="#479BD8" xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_15_529)">
                                    <path d="M2.01394 6.87134C1.34749 10.0618 3.85967 13.8597 7.01471 17.0147C10.1698 20.1698 13.9676 22.682 17.1581 22.0155C19.782 21.4674 21.1215 20.0697 21.8754 18.8788C22.1355 18.4678 22.0042 17.9344 21.6143 17.6436L17.9224 14.8897C17.5243 14.5928 16.9685 14.633 16.6174 14.9842L14.6577 16.9438C14.6577 16.9438 12.7529 16.3246 10.2288 13.8006C7.70482 11.2766 7.08564 9.37175 7.08564 9.37175L9.04529 7.4121C9.39648 7.06091 9.43671 6.5052 9.13975 6.10709L6.38585 2.4151C6.09505 2.02525 5.56163 1.89395 5.15068 2.15407C3.9597 2.90794 2.56203 4.24747 2.01394 6.87134Z"/>
                                  </g>
                                </svg> Appeler </a>
                            </div>
                            <div class="col-sm-4">
                              <a  target="_blank" :href="hotel.address_url" class="btn-hotel-desktop">
                                <svg class="hotel-svg" fill="#479BD8" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
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
                                </svg>Localisation</a>
                            </div>
                            <div class="col-sm-4">
                              <a :href="hotel.site" target="_blank" class="btn-hotel-desktop">
                                <svg class="hotel-svg" width="20px" height="20px" fill="#479BD8" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                      <g id="icon" fill="#479BD8" transform="translate(64.000000, 64.000000)">
                                          <path d="M64,32 C64,49.664 49.664,64 32,64 C14.336,64 -4.26325641e-14,49.664 -4.26325641e-14,32 C-4.26325641e-14,14.336 14.336,-4.26325641e-14 32,-4.26325641e-14 C49.664,-4.26325641e-14 64,14.336 64,32 Z M224,32 C224,49.664 209.664,64 192,64 C174.336,64 160,49.664 160,32 C160,14.336 174.336,-4.26325641e-14 192,-4.26325641e-14 C209.664,-4.26325641e-14 224,14.336 224,32 Z M64,352 C64,369.664 49.664,384 32,384 C14.336,384 -4.26325641e-14,369.664 -4.26325641e-14,352 C-4.26325641e-14,334.336 14.336,320 32,320 C49.664,320 64,334.336 64,352 Z M224,352 C224,369.664 209.664,384 192,384 C174.336,384 160,369.664 160,352 C160,334.336 174.336,320 192,320 C209.664,320 224,334.336 224,352 Z M64,192 C64,209.664 49.664,224 32,224 C14.336,224 -4.26325641e-14,209.664 -4.26325641e-14,192 C-4.26325641e-14,174.336 14.336,160 32,160 C49.664,160 64,174.336 64,192 Z M224,192 C224,209.664 209.664,224 192,224 C174.336,224 160,209.664 160,192 C160,174.336 174.336,160 192,160 C209.664,160 224,174.336 224,192 Z M384,32 C384,49.664 369.664,64 352,64 C334.336,64 320,49.664 320,32 C320,14.336 334.336,-4.26325641e-14 352,-4.26325641e-14 C369.664,-4.26325641e-14 384,14.336 384,32 Z M384,352 C384,369.664 369.664,384 352,384 C334.336,384 320,369.664 320,352 C320,334.336 334.336,320 352,320 C369.664,320 384,334.336 384,352 Z M384,192 C384,209.664 369.664,224 352,224 C334.336,224 320,209.664 320,192 C320,174.336 334.336,160 352,160 C369.664,160 384,174.336 384,192 Z" id="Combined-Shape"></path>
                                      </g>
                                  </g>
                              </svg>Web</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <SearchUser></SearchUser>
      <!-- FOOTER -->


    </div>
    <div class="lg:pt-12 pt-0" style="padding-top: 50px;background-color: white;">
      <ContactUs></ContactUs>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>
<script> 
import {
  fetchHotelsByParams,
  fetchHotels,
  setHotelCountry,
  SetWilaya,
  getMarkers,
  setCenter,leave_marker,mark_marker
} from "../composable/index";
import { mapMutations } from "vuex";
import Header2 from "./header/MyHeader2.vue"
import MyFooter from "./footer/MyFooter.vue"
import ContactUs from "./MainContant/ContactUs.vue"
import SearchUser from "./MainContant/IsoModal.vue"
import hotelindexComponent from "./newinterface/HotelindexComponent.vue";
export default {
  components: {
    Header2,
    ContactUs,
    MyFooter,
    SearchUser,
    hotelindexComponent,
},
  data() {
    return {
      mapCenter: {
        lat: null,
        lng: null,
      },
      typeData: "map",
      search: false,
      focust: false,
      lat: "",
      long: "",
      nextPage: 1,
      markers: [],
      moreExists: false,
      country: "Algerie",
      wilaya: [],
      wila: "",
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
      this.hotel;
      getMarkers(this.$store, "hotel");
      return this.$store.state.hotel.markers;
    },
    getHotels() {
      console.log('Hotels',this.$store.state);

      return this.$store.state.hotel.hotels;
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
    gotolinks(link, index = 0) {
      if (typeof link === "undefined" || link.length == 0) {
        this.$store.commit("SET_typeModal", { index, typeModal: "hotel" });
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
      this.countries = this.$store.getters.getCountries;
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
        setHotelCountry(this.$store, this.country, this.nextPage);
        const { lat, long } = this.$store.getters.getCountryById(
          this.country
        ).name;

        setCenter(this.$store, lat, long);
        this.getHotels;
        this.getMark;
      }
    },
    changeCountry(event) {
      this.dropd2 = false;
      this.dropd1 = false;
      const country = event.target.value;
      this.country = country;
      this.getCountryWilaya();
      setHotelCountry(this.$store, country, this.nextPage);
      const { lat, long } = this.$store.getters.getCountryById(
        this.country
      ).name;
      setCenter(this.$store, lat, long);
      this.getHotels;
      this.getMarkers;
    },
    changeWilaya(event) {
      const wilaya = event.target.value;
      SetWilaya(this.$store, wilaya, this.nextPage);
      this.getHotels;
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
    getRestrictedHotel() {
      fetchHotelsByParams(this.$store, this.nextPage);
    },
    handleInput() {
      fetchHotelsByParams(this.$store, this.nextPage);
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
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
      /*}*/
    },
    loadMore() {
      try {
        this.nextPage++;
        fetchHotels(
          this.$store,
          this.nextPage,
          this.long,
          this.lat
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
    setHotelCountry(this.$store, this.country, this.nextPage);
    this.getLocation(() => {
      fetchHotels(
        this.$store,
        this.nextPage,
        this.long,
        this.lat,
        "",
        this.country,
        ""
      );
    });
  },

};
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.support {
  height: 60px;
  background-color: #1e85f1;
  color: white;
  border-radius: 30px 0px 30px 0px;
  line-height: .4em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mapouter {
  padding: 30px !important;
  height: auto !important;
  aspect-ratio: 2/1 !important;
}

#willaya {
  width: 100%;
}

.nnbnj {
  font-size: 10px;
  line-height: 10px;
}
</style>
<style scoped>
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
.btn2 {
  font-size: 12px !important;
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
.search {
  width: 100%;
  border-radius: 20px;
}
.mainconti {
  width: 100%;
  background-image: url('../../public/inso-pics/Groupe 3221__.svg');
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
  border: 2px solid black;
  font-size: 18px !important;
  padding: 10px 50px 10px 50px !important;
  color: #030303;
  background-color: white !important;
}

#willaya {
  padding-inline: 30px;
}

.mainconti {
  font-size: 12px;
}

.hospitalsList {
  padding-inline: 30px;
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
    padding-top: 40px;
  }

  .hosdatatitle {
    font-size: 22px;
  }

  .thistt {
    font-size: 42px;
    font-weight: bold;
  }

  .countrytts,
  #willaya {
    font-size: 28px;
    padding-inline: 40px;
    padding-block: 10px;
  }
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
  