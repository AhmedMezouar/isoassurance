<template>
  <div class="hello relative content" id="landing">
    <MyHeader></MyHeader> 
    <div class="flex justify-center flex-col items-center ">
      <HomeInso></HomeInso>
      <div class="min-h-screen bg-inso flex flex-col w-full">
        <div class="lg:px-0 px-2">
          <!--<IsoOffer></IsoOffer>-->
          <NewOffer></NewOffer>
          <OfferindexComponent></OfferindexComponent>
          <SpecHospital></SpecHospital>
          <HospitalInso></HospitalInso>
          <OpportunityIso></OpportunityIso>
          
        </div>
      </div>
      <RequestCart></RequestCart>

      <!-- Our client-->
      <OurClients></OurClients>
      <PartenaireSection></PartenaireSection>
    <!--  Download App Section & Contact Us With Phone Nbr-->
    <ContactUs></ContactUs>
    <!-- FOOTER -->
    
    <MyFooter></MyFooter>
  </div>
  <SearchUser></SearchUser>
</div>
<div
  id="userCard"
  class="hidden bg-white m-4 flex-wrap p-8"
  style="box-shadow: 0px 1px 2px rgb(0 0 0/0.16); border-radius: 70px"
>
  <div class="w-full flex justify-start">
    <button @click="goLanding()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="36.841"
        viewBox="0 0 39.297 36.841"
      >
        <path
          id="undo_FILL0_wght400_GRAD0_opsz48"
          d="M33.052,44.841H15.368V41.157H33.113a10.548,10.548,0,0,0,7.4-2.855,9.249,9.249,0,0,0,3.1-7.092,9.249,
9.249,0,0,0-3.1-7.092,10.548,10.548,0,0,0-7.4-2.855H15l7,7-2.579,2.579L8,19.421,19.421,8,22,10.579l-7,
7H33.052a14.2,14.2,0,0,1,10.039,3.93,12.749,12.749,0,0,1,4.206,9.7,12.749,12.749,0,0,1-4.206,9.7A14.2,
14.2,0,0,1,33.052,44.841Z"
          transform="translate(-8 -8)"
          fill="#515151"
        />
      </svg>
    </button>
  </div>
  <div class="w-4/5 text-center mx-auto">
    <span class="text-center text-3xl" style="color: #1e9eff">
      Code Number : {{ $store.getters.getuserInfoDAta.uuid }}
    </span>
    <div class="flex mt-8">
      <div class="w-1/2 bgf">{{ $store.getters.getuserInfoDAta.name }}</div>
      <div class="w-1/2 bgf">
        {{ $store.getters.getuserInfoDAta.surname }}
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2 bgf">
        {{ $store.getters.getuserInfoDAta.phone_number }}
      </div>
      <div class="w-1/2 bgf">{{ $store.getters.getuserInfoDAta.type }}</div>
    </div>
    <div class="flex">
      <div class="w-full bgf">
        {{ $store.getters.getuserInfoDAta.addresse }}
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2 bgf">{{ $store.getters.getuserInfoDAta.city }}</div>
      <div class="w-1/2 bgf">
        {{ $store.getters.getuserInfoDAta.code_postal }}
      </div>
    </div>
  </div>
</div>
</template>
<script>
//import IsoOffer from "./MainContant/IsoOffer.vue";
import MyHeader from "./header/MyHeader.vue";
import MyFooter from "./footer/MyFooter.vue"
import HomeInso from "./MainContant/HomeInso.vue";
import HospitalInso from "./MainContant/HospitalInso.vue";
import SearchUser from "./MainContant/IsoModal.vue";
import SpecHospital from "./MainContant/SpecHospital.vue";
import { mapMutations } from "vuex";
import OurClients from "./MainContant/OurClients.vue";
import OpportunityIso from "./MainContant/OpportunityIso.vue";
import ContactUs from "./MainContant/ContactUs.vue";
import PartenaireSection from "./MainContant/PartenaireSection.vue";
import RequestCart from"./MainContant/RequestCart.vue";
import OfferindexComponent from "./newinterface/OfferindexComponent.vue";
import NewOffer from "./MainContant/NewOffer.vue";
export default {
components: {
    MyHeader,
    HomeInso,
    HospitalInso,
    SpecHospital,
    SearchUser,
    OurClients,
    //IsoOffer,
    OpportunityIso,
    MyFooter,
    ContactUs,
    PartenaireSection,
    RequestCart,
    OfferindexComponent,
    NewOffer
},
name: "LandingPage",
props: {
  msg: String,
},
data() {
  return {
    dx: 0,
    grapped: false,
  };
},
methods: {
  showInsoModal() {
    this.$store.commit("SET_typeModal", { index: 0, typeModal: "card" });
  },
  changeLang(lang) {
    console.log('changed')
    this.$store.commit("SET_lang", lang);
  },
  grappThis(event) {
    this.grapped = true;
    this.dx = event.clientX;
  },
  moveSlider(event) {
    if (this.grapped) {
      this.$refs.ourc.scrollLeft += this.dx - event.clientX;
    }
  },
  stopgrapping() {
    this.grapped = false;
  },
  ...mapMutations([
    // `mapMutations` also supports payloads:
    "SET_showUserCard", // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
  ]),
  hideLanding() {
    this.$store.commit("SET_showUserCard", true);
  },
  scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  
  goLanding() {
    this.$store.commit("SET_showUserCard", false);
  },
},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
.content{
background: url("../../public/inso-pics/visite-background.png");
background-size: 100%;
overflow: hidden;
}
.content{
 background: url("../../public/inso-pics/visite-background.png");
  background-size: 100%;
}
</style>
