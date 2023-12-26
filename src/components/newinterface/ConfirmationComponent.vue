<template>
<!-- Partenaire-->
<MyHeader></MyHeader>

<!-- Ambulance-->
<div class="thiscntnr" >
<div id="ambulance" style="overflow: hidden; height: 550px;">
  <div id="ambulanceDetails">
      <div class="widthMain">
        <p class="amb__title h5">{{$store.getters.getT("ambulance +")}}</p>
        <p class="mb__sub h4">{{$store.getters.getT("and analyzes at home")}}</p>
        <div class="img-done">
          <img src="../../assets/done-bg.png" alt="">
        </div>    
        <form>
            <button @click="goChoix()" class="btnhover btnNew-2 hosdatabtn"> 
                Commencer
            </button>
        </form>
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

<style>
.btnhover:hover {
  border: 2px solid white;
  font-size: 18px;
}
.img-done {
  display: flex;
  justify-content: center;
  height: 300px;
}
</style>
<script> 
import MyHeader from "../../components/header/MyHeader.vue";

export default{
  components: {
    MyHeader,
},
methods:{
  showInsoModal() {
    this.$store.commit("SET_typeModal", { index: 0, typeModal: "partner" });
  },
  goChoix(){
    this.$router.push('/choix') 
  },
}
}
</script>