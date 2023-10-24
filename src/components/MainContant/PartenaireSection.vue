<template>
      <!-- Partenaire-->
      
  <div class="partenairContainer" id="partenairContainer">
    <div class="mxcbd">
      <p class="h5 partnr">{{$store.getters.getT("+1000 partners")}}</p>
      <p class="h4 partnrSub" >{{$store.getters.getT("TAKELOOK")}}</p>
    </div>
    <div class="algmap">
      <img src="/inso-pics/algeria_map.png" alt="">
    </div>
    <div class="partenair">
      <p class="h5 partnr">{{$store.getters.getT("+1000 partners")}}</p>
      <p class="h4 partnrSub" >{{$store.getters.getT("TAKELOOK")}}</p>
      <p class="partnrTxt">{{$store.getters.getT("bePartner")}}</p>
      <div class="flex" style="justify-content: flex-end;">
        <button @click="showInsoModal()"  class="signBtn">{{$store.getters.getT("be a partner")}}</button>
      </div>
    </div>
  </div>
  <!-- Ambulance-->
<div class="thiscntnr">
  <div id="ambulance" style="overflow: hidden;">
    <div id="ambulanceDetails">
        <div class="widthMain button-reserve">
          <p class="amb__title h5">{{$store.getters.getT("ambulance +")}}</p>
          <p class="mb__sub h4">{{$store.getters.getT("and analyzes at home")}}</p>
          <p class="amb__txt">
            {{$store.getters.getT("Pour votre confort et bien-être, ISO ASSURANCE met à votre disposition des véhicules médicalisés pour votre transport et assure des prises de sang pour des examens médicaux à domicile, à travers le territoire national.")}}
          </p>
          <button id="reserve" @click="goReservation()" class="btnNew" style="font-weight: bold;">
              Réserver maintenant 
          </button>
          
        <div class="flex">
          <a href="#" class="signBtn" style="margin-block: 10px;text-align: center;margin-inline: auto;visibility: hidden;">
            {{$store.getters.getT("I'm registering")}}
          </a>
        </div>
        </div>

    </div>
    <PhonePart></PhonePart>
    <div class="flex mzrye">
      <div>
        <img src="/inso-pics/flight.svg" alt="" style="width: 50px;">
        <p>{{$store.getters.getT("care abroad")}}</p>
      </div>
      <div>
        <img src="/inso-pics/Ambulance.svg" alt="" style="width: 70px;padding-top: 20px;">
        <p>{{$store.getters.getT("Ambulance")}}</p>
      </div>
      <div>
        <img src="/inso-pics/heart_beat.svg" alt="" style="width: 60px;padding-top: 30px;">
        <p>
          {{$store.getters.getT("medical analysis")}}
        </p>
      </div>
      <div>
        <img src="/inso-pics/orientation des patients.svg" alt="" style="width: 55px;padding-top: 30px;">
        <p>{{$store.getters.getT("referral of patients")}}</p>
      </div>
      <div>
        <img src="/inso-pics/service de sante.svg" alt="" style="width: 55px;padding-top: 20px;">
        <p>
          {{$store.getters.getT("health Service")}}
        </p>
      </div>
      <div>
        <img src="/inso-pics/soin.svg" alt="" style="width: 50px;">
        <p>
          {{$store.getters.getT("care")}}
        </p>
      </div>
    </div>
  </div>
  <div class="flex icnss">
    <div class="w-2/5 flex" style="justify-content:flex-end">
      <img class="ambicon" :class="$store.getters.getL==='ar'?'ar':''" src="/inso-pics/RightAMB.png" alt="">
    </div>
    <div class="w-2/5">
      <img class="caricon" :class="$store.getters.getL==='ar'?'ar':''" src="/inso-pics/car.png" alt="">
    </div>
  </div>
</div>
</template>
<script>
import PhonePart from './PhonePart.vue';
export default{
  components:{
    PhonePart,
  },
  methods:{
    showInsoModal() {
      this.$store.commit("SET_typeModal", { index: 0, typeModal: "partner" });
    },
    goReservation(){
      this.$router.push('/reserve') 
    },
  }
}
</script>