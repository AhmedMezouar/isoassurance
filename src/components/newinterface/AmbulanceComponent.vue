
<template>
  <!-- Partenaire-->
  <MyHeader></MyHeader>

  <!-- Ambulance-->
  <div class="thiscntnr" >
  <div id="" style="overflow: hidden;">
    <div id="ambulanceDetails">
        <div class="widthMain large-amb"> 
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-3">
              <button @click="goAnalyse()" type="button" class="btn btn-primary btn-prim3 d-flex align-items-center justify-content-center">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="row">
                    <div class="col-sm-12">
                      <p class="t">{{$store.getters.getT("Analyse a domicile")}}</p>
                    </div>
                    <div class="col-sm-12">
                      <i class="icon_ fas fa-user-md phone-icon"></i> <!-- Icône d'analyse -->
                    </div>
                  </div>
                </div>
              </button>
            </div>
              <div class="col-8 amb amb2" id="">
                <div class="row d-flex justify-content-center align-items-center">
                  <div class="col-12 d-flex justify-content-center align-items-center">
                    <h1>COMMANDER AMBULANCE</h1>
                  </div>
                  <div class="col-6">
                    <label for="name" class="text-gray-700">Date de réservation</label> 
                    <input required style="padding-right: 50px; padding-left: 50px;" type="date" class="text-black block w-full rounded-md input-text" name="name" ref="name" placeholder="Entrer Date de réservation" id="name">
                  </div>
                  <div class="col-6">
                    <label for="name" class="text-gray-700">Heure de réservation</label> 
                    <input required style="padding-right: 50px; padding-left: 50px;" type="time" class="text-black block w-full rounded-md input-text" name="name" ref="name" placeholder="Entrer l'heure de réservation" id="name">
                  </div>
                  <div class="col-12">
                    <label for="name" class="text-gray-700">L'adresse de départ</label> 
                    <input required type="text" class="text-black block w-full rounded-md input-text" name="name" ref="name" placeholder="Entrer l'adresse de départ" id="name">
                  </div>
                  <div class="col-sm-0"></div>
                  <div class="col-8">
                    <label for="name" class="text-gray-700">L'hôpitale d'arrivé</label> 
                    <select name="name" id="select-hopital" class="text-black block w-full rounded-md input-text">
                      <option>Option 01</option>
                      <option>Option 01</option>
                      <option>Option 01</option>
                      <option>Option 01</option>
                    </select>
                  </div>
                  <div class="col-sm-4"></div>
                  <div class="col-9">
                    <form>
                        <button @click="goChoix()" class="hosdatabtn btn-boots"> 
                            PRENDRE RENDEZ-VOUS
                        </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    
  </div>
  <PhonePart5></PhonePart5>
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
  ::-webkit-datetime-edit-fields-wrapper {
  background: #fafff6; 
  border-radius:10px;
  padding-left:20px !important;
  padding-right: 20px !important;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
}
::-webkit-calendar-picker-indicator {
  padding-left: 30%;
  opacity:1;
  font-size:2rem;
  transition:all ease 400ms;
  transform:scale(1);
  margin-left:5px;
}
  </style>
  <script>
import MyHeader from "../../components/header/MyHeader.vue";
import PhonePart5 from "./PhonePart5.vue";

export default{
  components: {
    MyHeader,
    PhonePart5,
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
  },
  }
  </script>
  
  
  