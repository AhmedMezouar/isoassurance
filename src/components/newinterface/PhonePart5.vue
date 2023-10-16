<template>
    <div class="phoneIcnns my-4">
        <div class="flex">
          <div class="row d-flex justify-content-center align-items-center">
            <!--<div class="col-12">
              <button @click="goAmbulance()" type="button" class="btn btn-primary btn-amb d-flex align-items-center justify-content-center">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="row">
                    <div class="col-sm-12">
                      <p class="t3">{{$store.getters.getT("Commander Ambulance")}}</p>
                    </div>
                    <div class="col-sm-12">
                      <i class="icon_ fas fa-ambulance phone-icon"></i> 
                    </div>
                  </div>
                </div>
              </button>
              </div>-->
              <div class="col-12 amb" id="">
                <div class="row d-flex justify-content-center align-items-center">
                  <div class="col-12 d-flex justify-content-center align-items-center">
                    <h1 style="font-size: 22px;">COMMANDER AMBULANCE</h1>
                  </div>
                  <div class="col-12">
                    <label for="name" class="text-gray-700">Date de réservation</label> 
                    <input required style="padding-right: 50px; padding-left: 50px;" type="date" class="text-black block w-full rounded-md input-text" name="name" ref="name" placeholder="Entrer Date de réservation" id="name">
                  </div>
                  <div class="col-12">
                    <label for="name" class="text-gray-700">Heure de réservation</label> 
                    <input required style="padding-right: 50px; padding-left: 50px;" type="time" class="text-black block w-full rounded-md input-text" name="name" ref="name" placeholder="Entrer l'heure de réservation" id="name">
                  </div>
                  <div class="col-12">
                    <label for="name" class="text-gray-700">L'adresse de départ</label> 
                    <input required type="text" class="text-black block w-full rounded-md input-text" name="name" ref="name" placeholder="Entrer l'adresse de départ" id="name">
                  </div>
                  <div class="col-12">
                    <label for="name" class="text-gray-700">L'hôpitale d'arrivé</label> 
                    <input required type="text" class="text-black block w-full rounded-md input-text" name="name" ref="name" placeholder="Entrer l'adresse d'arrivé" id="name">
                  </div>
                  <div class="col-12">
                    <form>
                        <button @click="goChoix()" class="hosdatabtn btn-boots"> 
                            PRENDRE RENDEZ-VOUS
                        </button>
                        <button @click="goAnalyse()" class="hosdatabtn btn-boots btn-choix-plus"> 
                          Analyse à Domicile
                        </button>
                        
                    </form>
                  </div>
                </div>
            </div>
            </div>
            
        </div>
    </div>
</template>
<style>
.input-text {
  border-color: black;
  border: 2px solid grey !important;
  height: 40px !important;
  width: 320px !important;
  border-radius: 10px;
  padding-left: 10px;
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
    font-size: 22px;
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
export default {
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
}
}
</script>