<template>
  <div id="hospital" class="mt-4 widthMain">
    <div class="infhomder w-full mt-4 overflow-hidden relative bg-white flex flex-wrap"
      style="border-radius: 20px;direction: ltr;">
      <div v-if="typeData === 'map'" class="p-3 mymap">
        <div class="mapouter">
          <div class="gmap_canvas">
            <div class="absolute lg:top-6 left-8 flex right-0 z-10 trths">
              <div class="flex location" :class="[filter ? 'showLocation' : '']">
                <!--<div class="icon" @click="filter = !filter">
                  <img src="/inso-pics/reglage_icon.svg" alt="">
                </div>
                <div class="relative w-fit h-auto">
                  <button :class="[
                    country != '' ? 'choosedData' : 'notSelected',
                  ]" class="btnData md:text-lg text-sm pl-3 mapDrop" style="padding-right: 20px" @click="
                      dropd2 = !dropd2;
                    dropd1 = false;
                    ">
                    <span v-show="country === ''">
                      {{ $store.getters.getT("country") }}
                    </span>
                    <div v-show="cc.word === country" v-for="cc in countries" :key="cc" @click="changeMyCountry(cc.word)"
                      class="flex items-center cursor-pointer">
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
                    ]" class="fill-white" xmlns="http://www.w3.org/2000/svg" width="15" height="5" viewBox="0 0 23 10">
                      <path id="Polygone_1" data-name="Polygone 1"
                        d="M10.844.571a1,1,0,0,1,1.312,0l8.826,7.675A1,1,0,0,1,20.326,10H2.674a1,1,0,0,1-.656-1.755Z"
                        transform="translate(23 10) rotate(180)" />
                    </svg>
                  </div>
                </div>-->
              </div>
              <div class="lg:w-1/2">
                <!--<div class="relative hidden w-fit searchsection"
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
                </div> -->
              </div>
            </div>
            <GoogleMap id="gmap_canvas" api-key="AIzaSyDSqALzVX0HeTwWrrLiHUn_LlWBhmp6cEU"
              style="direction:ltr !important;width: 100%;height: 100%;max-height: calc(100vh - 64px)" :center="getCenter"
              :zoom="12.5" mapId="bfcd2a1ab34b8b7c" :clickableIcons="true" :mapTypeControl="false"
              :streetViewControl="false" :disableDefaultUI="true" v-if="getMarkers.length > 0" @click="mark">

              <gmap-custom-marker v-for="(position, index) in getMarkers" class="hoverMarker"
                :style="[openSelected(index) ? { 'z-index': '100' } : { 'z-index': '50' }]" :key="index"
                :marker="position">

                <GMapInfoWindow v-if="openSelected(index)" :options="infoOptions" :position="infoWindowPos">
                  <div ref="modalInfo">
                    <div :id="index">
                      <div class="pb-4 pt-4 modal-map-info"
                        style="margin-top:30px;margin-left:-60px;background-color:#fff;width:200px">
                        <div class="flex justify-end mr-2">
                          <button style="font-size:18px" @click="close" class="hover:text-blue-700"
                            id="closeModalInfo">&times;</button>
                        </div>
                        <div v-if="position.conv">
                          <div>
                            <div class="m-2">
                              <span style="font-weight: bold;display:flex;justify-content:center">
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
                        <div v-else class="pb-4 pt-4 modal-map-info text-center">
                          <h5>
                            Comming Soon
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </GMapInfoWindow> 
                <img v-else :ref="'mark_' + index" class="mapmarker" :id="'mark_' + index"
                  :style="[position.conv ? { 'opacity': '1' } : { 'opacity': '.55' }]"
                  @click="toggleInfoWindow(position, index)" width="30" height="30"
                  src="http://admin-assurance-private.assuranceiso.com/web/marker.png" />
                <my-component></my-component>
              </gmap-custom-marker>
              <gmap-custom-marker :marker="mapCenter"> 
                <img width="30" height="30" src="http://admin-assurance-private.assuranceiso.com/web/location.png" />
                <my-component></my-component>
              </gmap-custom-marker>
            </GoogleMap>
            <GoogleMap v-else id="gmap_canvas" mapId="bfcd2a1ab34b8b7c" api-key="AIzaSyDSqALzVX0HeTwWrrLiHUn_LlWBhmp6cEU"
              style="width: 100%; height: 100%;max-height: calc(100vh - 64px)" :center="getCenter" :zoom="12.5"
              :mapTypeControl="false" :streetViewControl="false">

            </GoogleMap>
          </div>
        </div>
      </div>
      <div class="monbf" ref="mylist" id="mylist" :style="{ marginRight: showHosMap ? '0%' : '-65%' }">
        <div class="lg:px-8 px-3 py-3 lg:flex hidden justify-end bg-white" style="min-height: 75px;">
          <select name="countries" @change="changeCountry($event)" id="countries" class="hidden">
            <option disabled value="" :selected="'country' === country ? true : false">
              {{ $store.getters.getT("country") }}
            </option>
            <option v-for="cc in countries" :key="cc" :value="cc.en" :selected="cc.en === country ? true : false">
              <span v-if="$store.getters.getL === 'en'">{{ cc.en }}</span>
              <span v-if="$store.getters.getL === 'fr'">{{ cc.fr }}</span>
              <span v-if="$store.getters.getL === 'ar'">{{ cc.ar }}</span>
              <span v-if="$store.getters.getL === 'tu'">{{ cc.tu }}</span>
            </option>
          </select>
          <select name="wilaya" id="willaya" class="hidden">
            <option disabled value="" :selected="'wilaya' === wilaya ? true : false">
              {{ $store.getters.getT("wilaya") }}
            </option>
            <option v-for="(cc, index) in wilaya" :key="cc" :value="cc.id" :selected="index == 15 ? true : false">
              <span v-if="$store.getters.getL === 'ar'">{{ cc.ar_name }}</span>
              <span v-else>{{ cc.fr_name }}</span>
            </option>
          </select>
          <div class="h-full border-l-2 border-white text-transparent hidden">
             
          </div>
          <div class="hidden flex-nowrap overflow-x-auto lg:justify-between lg:w-full items-center">
            <span v-for="speciality in getSpecialities" :key="speciality" class="mr-2 whitespace-nowrap">
              <label @click.self="getRestrictedHospital(speciality.name)" :value="speciality.name" :for="'spec' + item"
                class="specChooseLabel">{{ speciality.name }}</label>
              <input type="radio" name="specia" :id="'spec' + item" class="opacity-0 specChoose" />
            </span>
          </div>
          <button class="listView z-20" id="lisstV" :class="$store.getters.getL === 'ar' ? 'ar' : ''"
            @click="showHosMap = !showHosMap" style="margin-inline-start: auto; writing-mode: vertical-lr !important;">
            {{ $store.getters.getT("Liste View") }}
          </button>
        </div>
        
        <div class="px-2 hosCont 2xl:pt-0 pt-0" :style="{ opacity: showHosMap ? '1' : '0' }"
          style="max-height: 100%;overflow: auto; margin-top: -20px;">
          <div class="container hospitalsList" style="padding-right: 50px; position: relative;">
            <div class="row" style="font-size: 12px;">
              <div class="col-sm-12 list-clinique-fixe">
                <div class="row list-clinique-fixe" style="position: relative;">
                  <div class="col-sm-12 flex justify-center flex-col items-center">
                    <h5 style="color: #1e85f1; font-weight: bold; font-size: 32px;">Liste des Cliniques</h5>
                  </div>
                  <div class="col-4 mb-3 search">
                    <input type="text" class="btnData contr search form-control" placeholder="Rechercher ..."
                      @keyup.stop="handleInput($event); gotores($event)"
                      @click="fct()" name="search" id="search" ref="searchtxt" >
                  </div>
                  <div class="col-4 mb-3 contr" style="color: black !important;">
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
                  <div class="col-4 mb-3 contr">
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
              <div class="col-sm-12 mtgv" v-for="(hospital, index) in getHospitals" :key="index" @mouseover="hoverMarker(index)" @mouseleave="leaveMarker(index)">
                <div class="card card4">
                  <div class="card-body card-body4">
                    <div class="row">
                      <div class="col-sm-3 col-12">
                        <img
                          :src="hospital.image.length > 0 ? 'https://admin-assurance-private.assuranceiso.com/web/images/' + hospital.image : '/inso-pics/Myplaceholder.jpg'"
                          class="img-fluid" style="object-fit: contain; background: rgba(0, 0, 0, 0.15);" />
                      </div>
                      <div class="col-sm-9 col-12">
                        <div class="row roo4">
                          <div class="col-12">
                            <h5 class="card-title" style="font-weight: bold;">{{ hospital.name }}</h5>
                          </div>
                          <div class="col-12">
                            <p class="card-title card-title-2" style="font-size: 14px;">
                              {{hospital.country?hospital.country:''}}
                              {{ hospital.country && hospital.wilaya?'-':'' }}
                              {{hospital.wilaya?hospital.wilaya:''}} 
                          </p>
                          </div>
                          <div class="row button-vers">
                            <div class="col-sm-4">
                            <a  :href="'Tel:'+ hospital.phone_number" class="btn2 btn-primary">
                              Appeler</a>
                          </div>
                          <div class="col-sm-4">
                            <a  target="_blank" :href="hospital.address_url" class="btn2 btn-primary">
                              Localisation</a>
                          </div>
                          <div class="col-sm-4" @click="gotolinks(hospital.link, index)">
                            <a @click="gotolinks(hospital.link, index)" class="btn2 btn-primary">
                              Web</a>
                          </div>
                          <!--
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
                                Web</a>
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            <PhonePart9></PhonePart9>
            
              <!--<div class="col-sm-12 mtgv" v-for="(hospital, index) in getHospitals" :key="index" @mouseover="hoverMarker(index)" @mouseleave="leaveMarker(index)">
                <div class="card card4">
                  <div class="card-body card-body4">
                    <div class="row">
                      <div class="col-sm-3">
                        <img
                        :src="hospital.image.length > 0 ? 'https://admin-assurance-private.assuranceiso.com/web/images/' + hospital.image : '/inso-pics/Myplaceholder.jpg'"
                        class="" style="OBJECT-FIT: contain;background: rgb(0 0 0/.15);" />
                      </div>
                      <div class="col-sm-9">
                        <div class="row roo4">
                          <div class="col-sm-12">
                            <h5 class="card-title" style="font-weight: bold;">{{ hospital.name }}</h5>
                          </div>
                          <div class="col-sm-12">
                            <p class="card-title card-title-2">{{ hospital.name }}</p>
                          </div>
                          <div class="row button-vers">
                            <div class="col-sm-4" style="font-size: 14px !important;">
                              <a @click="gotolinks(hospital.link, index)" class="btn-primary">
                                Appeler</a>
                            </div>
                            <div class="col-sm-4" style="font-size: 14px !important;">
                              <a @click="gotolinks(hospital.link, index)" class="btn-primary">
                                Localisation</a>
                            </div>
                            <div class="col-sm-4" style="font-size: 14px !important;">
                              <a @click="gotolinks(hospital.link, index)" class="btn-primary">
                                <i class="fas fa-microsoft-word word-icon"></i>
                                Site-Web</a>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>-->
          </div>
          <div class="flex justify-end px-8 items-center">
            <button v-if="$store.getters.getLASTPAGE > nextPage" v-on:click="loadMore" class="btnData w-fit mb-2 mx-1">
              {{ $store.getters.getT("Show More") }}
            </button>
            <button v-if="nextPage > 1" v-on:click="loadLess" class="btnData w-fit mb-2 mx-1">
              {{ $store.getters.getT("Show Less") }}
            </button>
          </div>
        </div>

      </div>
    </div>
    <CliniqueindexComponent></CliniqueindexComponent>
  </div>
</template>

<script>
import {
  fetchHospitalsByParams,
  fetchHospitals,
  setHospitalCountry,
  setHospitalWilaya,
  getMarkers,
  setCenter ,mark_marker ,leave_marker
} 
from "../../composable/index";
import { GoogleMap, GMapInfoWindow } from "vue3-google-map";
import GmapCustomMarker from "vue3-gmap-custom-marker";
import { mapMutations } from "vuex";
import PhonePart9 from "./PhonePart9.vue"
import CliniqueindexComponent from "../newinterface/CliniqueindexComponent.vue";


export default {
  components: { GoogleMap, "gmap-custom-marker": GmapCustomMarker, GMapInfoWindow, PhonePart9, CliniqueindexComponent },
  data() {
    return {
      typeData: "map",
      mapCenter: {
        lat: null,
        lng: null,
      },
      lat: "",
      long: "",
      phone_number:"",
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
      showHosMap: true,
      search: false,
      focust: false,
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
      //this.countries = this.$store.getters.getCountries;
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
        setHospitalCountry(this.$store, this.country, this.nextPage);
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
      setHospitalCountry(this.$store, country, this.nextPage);
      const { lat, long } = this.$store.getters.getCountryById(
        this.country
      ).name;
      setCenter(this.$store, lat, long);
      this.getHospitals;
      this.getMarkers;
    },
    changeWilaya(event) {
      const wilaya = event.target.value;
      setHospitalWilaya(this.$store, wilaya, this.nextPage);
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
  created() {

    this.getCountryWilaya();
    setHospitalCountry(this.$store, this.country, this.nextPage);

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
<style scoped>
.widthMain {
  width: 100%;
}
.search {
  border-radius: 50px;
}
.btnData {
  border: 2px solid black;
  font-size: 18px !important;
  padding: 5px 50px 5px 50px !important;
  color: #030303;
  width: 100%;
  background-color: white !important;
}
.mapouter {
  background-color: transparent;
  padding: 0px;
}
#hospital {
  direction: ltr;
}
</style>
<style>
.searchtxt {
  width: 0px
}

.searchsection:hover .searchtxt {
  width: calc(100% - 40px);
}

.searchicon {
  width: 36px;
  justify-content: center;
}

.location {
  width: 36px;
  overflow: hidden;
}

.showLocation {
  overflow: visible;
  width: fit-content !important;
}

.icon {
  width: 36px;
  height: 36px;
  min-width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.77);
  border-radius: 100%;
}

.icon>img {
  object-fit: contain;
  width: 100%;
  height: auto;
}
</style>
<style src="../../style/HospitalInso.css"></style>
