<template>
<!-- Partenaire-->
<MyHeader></MyHeader>
<!-- Ambulance-->
<div class="thiscntnr" >
<div id="ambulance" style="overflow: hidden;">
  <div id="ambulanceDetails">
      <div class="widthMain">
        <p class="amb__title h5">{{$store.getters.getT("ambulance +")}}</p>
        <p class="mb__sub h4 mb-10">{{$store.getters.getT("and analyzes at home")}}</p>
        
        <form>
            <div class="mb-8 partfield2">
                <label for="name" class="text-gray-700">N° d'assurance</label> 
                <input required type="text" class="text-black block border w-full rounded-md p-2" name="name" ref="name" placeholder="Entrer votre numéro dassurance" id="name">
            </div>
            <button @click="goConfirme()" class="plusBtn btnNew hosdatabtn"> 
                Vérification
            </button>
        </form>
      <div class="flex">
        <a href="#" class="signBtn" style="margin-block: 10px;text-align: center;margin-inline: auto;visibility: hidden;">
          {{$store.getters.getT("I'm registering")}}
        </a>
      </div>
      </div>

  </div>
  <PhonePart2></PhonePart2>
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
.thiscntnr {
    margin-top: 20px;
}
    .partfield2{
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .partfield2 label {
        font-size: 18px;
        font-weight: bold;
    }
    .partfield2 input {
        border-radius: 10px;
        border: 1px solid black;
        width: 50% !important;
        padding: 10px;
    }

    .partfield2 input:hover {
        border: 1px solid blue;
    }
</style>
<script>
import MyHeader from "../../components/header/MyHeader.vue";
import PhonePart2 from './PhonePart2.vue';

export default{
  components: {
    MyHeader,
    PhonePart2,
},
methods:{
  showInsoModal() {
    this.$store.commit("SET_typeModal", { index: 0, typeModal: "partner" });
  },
  goConfirme(){
    this.$router.push('/confirme') 
  },
}
}
</script>