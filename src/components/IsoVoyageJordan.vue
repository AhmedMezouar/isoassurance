<template>
  <div class="hello relative content">
    <Header2></Header2>
    
    <div id="voyage_1" class="container">
      <div class="row mb-8 flex">
        <div class="col-12">
          <h1 class="title-voyage mt-8 mb-4">
            Omra & Jordan
          </h1>
        </div> 
        <div class="col-sm-3 mb-4 gri-img img-omra">
        </div>
        <div class="col-sm-3 mb-4 gri-img img-jordan">
        </div>
        <div class="col-sm-3 mb-4 gri-img img-jordan-1 picture-001">
        </div>
        <div class="col-sm-3 mb-4 gri-img img-jordan-2 picture-001">
        </div>         
        
        <div class="col-12" @click="goPhotos()">
          <button class="btn-more-img">Charger plus des images</button>
        </div>
        <div class="col-12">
          <h1 class="title-voyage-detail mt-8 mb-4">
            Details de voyage Omra & Jordan
          </h1>
        </div>
      </div>
      <div class="row mt-4 mb-8 info-voyage">
        <div class="col-12">
          <h3 style="font-weight: bold;">هل انت من محبي السفر.</h3>
          <span style="text-decoration: underline; font-weight: bold;"> فرصتك للسفر تكمن بين يديك الآن، مع برنامج الدفع بالتقسيط، يمكنك الاختيار من بين مجموعة متنوعة من الرحلات والوجهات السياحية المثيرة، وتقسيم تكلفة الرحلة على فترة تصل إلى 10 أشهر. 
            </span>
        </div>
        <div class="col-md-8 info-card mt-4 detail-voy">
          <p>
            نحن ندرك أن القيود المالية قد تعيق أحيانًا الأفراد عن التمتع الكامل بمزايا السفر، ولمعالجة هذه المشكلة، قمنا بإدخال سياسة جديدة تسمح لعملائنا الكرام بدفع ثمن رحلاتهم على أقساط مريحة.
          </p>
          <p>
            هدفنا هو تشجيعك على استكشاف العالم وتجربة ثقافات جديدة دون عبء الدفع الفوري والكبير، من خلال الاستفادة من خطة التقسيط الخاصة بنا، يمكنك توزيع تكلفة رحلتك على فترة محددة، مما يسهل عليك وضع الميزانية والتخطيط لمغامرتك.          </p>
          <p>
            ونحن نعتقد أن هذه المبادرة لن توفر المرونة المالية فحسب، بل ستشجع أيضًا المزيد من الأشخاص على الشروع في رحلاتهم المرغوبة سواء كنت تخطط لقضاء إجازة عائلية، أو شهر عسل، أو مغامرة منفردة، فإن خطة التقسيط لدينا مصممة لتلبية احتياجاتك.          </p>
          <p>
            للاستفادة من هذه التسهيلات، ما عليك سوى الاتصال بممثلي خدمة العملاء لدينا الذين سيرشدونك خلال العملية، وسوف يساعدونك في اختيار خيار التقسيط الأنسب بناءً على مدة رحلتك وتكلفتها.
             نؤكد لك أن فريقنا سيتعامل مع تفاصيل الدفع الخاصة بك بمنتهى السرية والأمان.
          </p>
          <p>
            في ISO ASSURANCE نحن ملتزمون بتقديم خدمة استثنائية وضمان رضاكم. 
            نحن نؤمن بأن خطة التقسيط الجديدة هذه ستكون ذات فائدة كبيرة لك، لعملائنا الكرام، ونتطلع إلى مساعدتك في تحقيق أحلام السفر الخاصة بك.
          </p>
        </div>
        <div class="col-md-4 info-card mt-4">
          <p style="font-weight: bold;" > التقسيط يكون بالشكل التالي:</p>
          <p>
            يدفع 50 % من تكلفة البرنامج والمبلغ المتبقي يتم قسمته على 10 أشهر كل شهر يتم اقتطاع المبلغ مباشرة من الراتب او عن طريق تحويله في حساب الشركة او نقدا على ان يكون تاريخ الاقتطاع بين 01 الى 05 من كل شهر وعليه يجب ان يكون المبلغ قبل هذا التاريخ.
          </p>
          <p>
            مع إمكانية اهداء احدى الرحلتين للشخص اخر          </p>
          <p style="font-weight: bold;">ملف الاشتراك:</p>
          <p>بطاقة ISO ASSURANCE GOLD</p>
          <p>شهادة الميلاد</p>
          <p>بطاقة الإقامة</p>
          <p>صورتين شمسيتين</p>
          <p>شهادة العمل</p>
          <p>شهادة الآجرى (ان لا يقل الاجر عن 43000 دينار جزائري)</p>
          <p>ملء الاستمارة </p>
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
    goPhotos(){
    let route1 = this.$router.resolve('/voyageImage');
    window.open(route1.href);
    },
    goDetails(){
    let route1 = this.$router.resolve('/voyageDetail');
    window.open(route1.href);
    },
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