<template>
    <div id="choix" class="phoneIcnns my-4">
        <div class="flex icnss">
            <div class="row d-flex justify-content-center align-items-center">
            <div class="col-6">
              <button @click="goAmbulance()" type="button" class="btn-phone1 btn-primary d-flex align-items-center justify-content-center">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="row">
                    <div class="col-sm-12">
                      <p class="t2">{{$store.getters.getT("Commander Ambulance")}}</p>
                    </div>
                    <div class="col-sm-12">
                      <i class="icon__ fas fa-ambulance phone-icon"></i> <!-- Icône d'ambulance -->
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="col-6">
              <button @click="goAnalyse()" type="button" class="btn-phone1 btn-primary d-flex align-items-center justify-content-center">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="row">
                    <div class="col-sm-12">
                      <p class="t2">{{$store.getters.getT("Analyse a domicile")}}</p>
                    </div>
                    <div class="col-sm-12">
                      <i class="icon__ fas fa-user-md phone-icon"></i> <!-- Icône d'analyse -->
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
            <div class="flex justify-center">
                <img class="ambicon" src="/inso-pics/RightAMB.png" alt="">
            </div>
             <div>
                <img class="caricon" src="/inso-pics/car.png" alt="">
            </div>
        </div>
    </div>
</template>
<style>
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
    font-size: 18px !important;
}
.icon__ {
    font-size: 50px;
    margin-left: 20px;
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