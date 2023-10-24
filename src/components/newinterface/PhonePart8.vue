<template>
    <div class="phoneIcnns my-4">
        <div class="flex">
                <div class="row d-flex justify-content-center align-items">
                  <div class="col-2">
                    <p class="thistt">
                      <img :src="'/inso-pics/' + flag"
                      style="border-radius: 100%;display: inline;width: 40px;" alt="">
                      </p>                    
                  </div>
                  <div class="col-8">
                    <p class="thistt">
                       Cliniques/Santé
                    </p>
                  </div>
                  <div class="col-12">
                  <p class="">Le membre ISO Assurance bénéficie de plusieurs avantages
                  «confort et remises sur les tarifs» sur les services
                  offerts par nos établissements de santé conventionnées.</p>
                </div>
                <div class="col-12 contr-hospital">
                  <div class="hospit">
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
                <div class="col-12 contr-hospital">
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
                      
                    </div>
                  </div>                    
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.thistt {
  font-size: 20px;
  text-align: center;
} 
.thistt img {
  width: 200px !important;
  margin-left: 20px;
}
.row {
    padding-left: 20px;
    padding-right: 20px;
}
.btn-phone1 {
    margin-top: 50px;
    display: contents;
    max-width: 160px;
    max-height: 200px;

    display: flex !important;
    justify-content: center !important; 
    align-items: center !important;
}
.t2 {
    font-size: 20px;
}
.icon_ {
    font-size: 50px;
    margin-left: 20px;
}
.btn-amb {
  max-height: 70px;
  max-width: 50% !important;
}
.btn-choix-plus {
  background-color: #1e85f1 !important;
  color: white !important;
  font-weight: bold;
  margin-top: -10px !important;
}
</style>
<script>
import {
  fetchHospitalsByParams,
  fetchHospitals,
  SetCountry,
  SetWilaya,
  setCenter,
} from "../../composable/index";

export default {
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
      hospitals: [],
      markers: [],
      moreExists: false,
      country: "Algerie",
      wilaya: [],
      wila: "Alger",
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
  methods:{
    goChoix(){
    this.$router.push('/choix') 
  },
  goAmbulance(){
    this.$router.push('/ambulance') 
  },
  goAnalyse(){
    this.$router.push('/analyse') 
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
    }
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

}
</script>
<style scoped>
.mapouter{
  padding: 30px;
  height: auto;
  aspect-ratio: 2/1;
}
.ndzklpsdl{
  width:var(--inso-w);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: bottom;
}
.mainconti{
  width:100% !important;
  margin-top: 90px;
  overflow: visible !important;
}
.grad__img{
  aspect-ratio: 1/1;
    height: 300px;
    margin-inline-end: -150px;
    margin-block-start: -150px;
}
.nnbnj{font-size: 11px;}
@media screen and (max-width: 768px)
  {.app__img{
    width: 100% !important;
  }
  .mapouter{
    aspect-ratio: 2/3;
  }
  .grad__img{
    margin-inline-end: 0px;
    margin-block-start: 0px;
    margin-inline: auto;
    padding-bottom: 2.5rem;
    width: 100%;
    background-color: #86c246;
    object-fit: contain;
}
  .detailsCard{
    width: 90px !important;
  }
  .nnbnj{
    font-size: 8px;
  }
  .app__img img{
    margin-top: 0px !important;
    margin-left: 0px !important;
    width: 100% !important;
  }}
</style>
<style scoped>

.aaqsze{
  display: flex;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  padding-inline: 10px;
  background-color: white;
  box-shadow: 0px 1px 6px;
  max-width: 65%;
  height: fit-content;
}
.btnData{
  width:fit-content;
  margin-inline: 4px;
}
.hosdatabtn{
  align-self: flex-end;
  cursor: pointer;
  background-color: #1e85f1;
  color: white;
}
.hosdatatitle{
  font-size: 15px;
  text-transform: capitalize;
}
.hosdatatxt{
  font-size: inherit;
}
.mainconti{
  background-repeat:no-repeat ;
  background-size: 100%;
  background-position-y:top;
  background-position-x:right ;
  transition: all .5s;
  background-position-x: right;
  overflow: hidden;
  border-radius: 30px;
}
.mainconti:hover{
  background-size: 150%;
}
  .detailsCard{
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
    width:120px
  }
  .hospitalsList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-inline: 30px;
    justify-content:space-between
  }
  .hosdata{
    flex-direction: column;
    justify-content:space-between;
    align-items: flex-start;
  }
  .hosimg{
    width: 35%;
    min-width: 35%;
  }
  .hosimg img{
    width:100% !important;
    object-fit: contain;
  }
  .mtgv{
    width: 32%;
    display:flex;
    border-color: transparent;
    box-sizing: border-box;
    height: fit-content;
  }
  .mtgv:hover{
    border-color: rgb(0 0 0 /.2);
  }
.btnData {
  border: 1px solid black;
  color: #707070;
  background-color: white !important;
}
#willaya{
  padding-inline: 30px;
}
.mainconti{
  font-size: 12px;
}
.detailsCard>div{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media screen and (min-width: 1919px){
  .grad__img{margin-block-start: -250px;}
  .mainconti{
    font-size: 19px;
    padding-top: 100px;
  }
  
  .hosdatatitle{
    font-size: 22px;
  }
  .thistt{
    font-size: 34px;
  }
  .countrytts,#willaya{
    font-size: 28px;
    padding-inline: 40px;
    padding-block: 10px;
  }
}
@media screen and (max-width: 768px){
  .mainconti:hover{
    background-size: cover;
  }
  .mainconti{
  background-size: cover;
  background-position-y:top;
  transition: all .5s;
  background-position-x: center;
  overflow: hidden;
  border-radius: 30px;
}
  .ttle,.ttle2{
    margin-inline: auto;
    text-align: center;
  }
  .mtgv{width: calc(50% - 8px);padding: 5px;}
  .aaqsze{max-width: 97%;}
  .hosimg{min-width: 100%;width: 100%;}
  .hosdatatitle{font-size: 13px;}
  .ttle2{
    color: #707070;
  }
  .mainconti{
    font-size: 10px;
    margin-top: 0px;
  }
  .hospitalsList{
      height: 100vw;
    }
}
@media screen and (max-width: 1200px){
  .mainconti {
    background-size: cover;
  }
}
</style>
