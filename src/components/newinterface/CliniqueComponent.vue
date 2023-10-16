
<template>
  <!-- Partenaire-->
  
  <!-- Ambulance-->
  <div class="thiscntnr" >
  <div id="" style="overflow: hidden;">
    <div id="ambulanceDetails">
        <div class="widthMain">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-3">
                <button @click="goAnalyse()" type="button" class="btn btn-primary">
                  <div class="d-flex justify-content-center align-items-center">
                    <p class="t">{{$store.getters.getT("Analyse a domicile")}}</p><br>
                    <img src="/inso-pics/heart_beat_b.svg" alt="" style="width: 50%; height:50%; padding-top: 20px; text-align: center;">
                  </div>
                </button>
              </div>
              <div class="col-8 amb" id="">
                <div class="row d-flex justify-content-center align-items-center">
                  <div class="col-12 d-flex justify-content-center align-items-center">
                    <h1>COMMANDER AMBULANCE</h1>
                  </div>
                  <div class="col-6">
                    <label for="name" class="text-gray-700">Date de réservation</label> 
                    <input required type="text" class="text-black block border w-full rounded-md p-2" name="name" ref="name" placeholder="Entrer Date de réservation" id="name">
                  </div>
                  <div class="col-6">
                    <label for="name" class="text-gray-700">Heure de réservation</label> 
                    <input required type="text" class="text-black block border w-full rounded-md p-2" name="name" ref="name" placeholder="Entrer l'heure de réservation" id="name">
                  </div>
                  <div class="col-12">
                    <label for="name" class="text-gray-700">L'adresse de départ</label> 
                    <input required type="text" class="text-black block border w-full rounded-md p-2" name="name" ref="name" placeholder="Entrer l'adresse de départ" id="name">
                  </div>
                  <div class="col-12">
                    <label for="name" class="text-gray-700">L'adresse de d'arrivé</label> 
                    <input required type="text" class="text-black block border w-full rounded-md p-2" name="name" ref="name" placeholder="Entrer l'adresse d'arrivé" id="name">
                  </div>
                  <div class="col-4">
                    <form>
                        <button @click="goChoix()" class="hosdatabtn btn-boots"> 
                            PRENDRE RENDEZ-VOUS
                        </button>
                    </form>
                  </div>
                  <div class="col-8">
                    <div class="w-2/5 img-ambulance">
                      <img :class="$store.getters.getL==='ar'?'ar':''" src="/inso-pics/car.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  .btn-primary {
    width: 100%;
    height: 400px;
    color: #1e85f1 !important; 
    background-color: white !important; 
    border: 2px solid #1e85f1 !important;
    border-radius: 20px !important;
  }
  .btn-primary:hover {
    background-color: #1e85f1 !important;
    color: white !important;
  }
  .t {
    font-size: 30px;
  } 
  .btnNew {
    width: 300px !important;
    margin: 50px 0px 0px 0px !important;
    display: flex !important;
  }
  </style>
  <script>
  export default{
  methods:{
    showInsoModal() {
      this.$store.commit("SET_typeModal", { index: 0, typeModal: "partner" });
    },
    goAmbulance(){
      this.$router.push('/ambulance') 
    },
    goAnalyse(){
      this.$router.push('/analyse') 
    },
  }
  }
  </script>