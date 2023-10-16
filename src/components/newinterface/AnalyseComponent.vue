<template>
  <!-- Partenaire-->
  <MyHeader></MyHeader>
 
  <!-- Ambulance-->
  <div class="thiscntnr" >
  <div id="" style="overflow: hidden;">
    <div id="ambulanceDetails">
        <div class="widthMain large-amb">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-8 amb" id="">
                <div class="row d-flex justify-content-center align-items-center">
                  <div class="col-12 d-flex justify-content-center align-items-center">
                    <h1>ANALYSE A DOMICILE</h1>
                  </div>
                  <div class="col-8 mb-2">
                    <label for="name" class="text-gray-700 label-text da">Date d'analyse</label>  
                    <input required style="padding-right: 50px; padding-left: 50px;" type="date" class="text-black block w-full rounded-md input-text" name="name" ref="name" placeholder="Entrer D'analyse" id="name">
                  </div>
                  <div class="col-4"></div>
                  <div class="col-8 mb-2">
                    <label for="name" class="text-gray-700 label-text da">Heure d'analyse</label> 
                    <input required style="padding-right: 50px; padding-left: 50px;" type="time" class="text-black block w-full rounded-md input-text" name="name" ref="name" placeholder="Entrer l'heure d'analyse" id="name">
                  </div>
                  <div class="col-4"></div>
                  <!--<div class="col-6">
                    <label for="name" class="text-gray-700">Ordenance</label> 
                    <input required type="file" class="text-black block w-full rounded-md input-file" name="name" ref="name" placeholder="Entrer l'adresse d'arrivé" id="name">
                  </div>-->
                  <div class="col-8">
                  <div class="items-center justify-center w-full">
                    <label for="name" class="text-gray-700">Ordenance</label> 
                      <label for="dropzone-file" class="flex flex-col items-center justify-center w-full input-file h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div class="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16" style="width: 70px !important; height: 70px !important;">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                              </svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400" style="text-align: center;"><span class="font-semibold" style="color: #1e85f1 !important; font-size: 22px;">Click to upload</span><br>or drag and drop</p>
                              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or PDF</p>
                          </div>
                          <input id="dropzone-file" type="file" class="hidden" />
                      </label>
                  </div> 
                </div>
                  <div class="col-4"></div>
                  <div class="col-12">
                    <form>
                        <button @click="goChoix()" class="hosdatabtn btn-boots"> 
                            PRENDRE RENDEZ-VOUS
                        </button>
                    </form>
                  </div>
                </div>
              </div>
            <div class="col-3">
              <button @click="goAmbulance()" type="button" class="btn btn-primary btn-prim3 d-flex align-items-center justify-content-center">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="row">
                    <div class="col-sm-12">
                      <p class="t">{{$store.getters.getT("Commander Ambulance")}}</p>
                    </div>
                    <div class="col-sm-12">
                      <i class="icon_ fas fa-ambulance phone-icon"></i> <!-- Icône d'ambulance -->
                    </div>
                  </div>
                </div>
              </button>
              </div>
            </div>
        </div>
    </div>
    
  </div>
  <PhonePart4></PhonePart4>
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
  .btn-p2 {
    background-color: #1e85f1 !important;
  }
  .btn-p2 {
    color: #1e85f1 !important; 
    background-color: transparent;
  }
  .btn-primary:hover {
    color: #1e85f1 !important; 
    background-color: transparent;
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
 import MyHeader from "../../components/header/MyHeader.vue";
 import PhonePart4 from './PhonePart4.vue';

export default{
  components: {
    MyHeader,
    PhonePart4,
},
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