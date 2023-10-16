<template>
<!-- Partenaire-->
<MyHeader></MyHeader>

<!-- Ambulance-->
<div class="thiscntnr" >
<div id="" style="overflow: hidden;">
  <div id="ambulanceDetails">
      <div class="">
        <div>
          <div class="row d-flex justify-content-center align-items-center">
            
            <div class="col-6">
              <button @click="goAmbulance()" type="button" class="btn btn-primary btn-prim2 d-flex align-items-center justify-content-center">
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
            <div class="col-6">
              <button @click="goAnalyse()" type="button" class="btn btn-primary btn-prim2 d-flex align-items-center justify-content-center">
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
          </div>
        </div>
      </div>
  </div>
  <PhonePart3></PhonePart3>
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
.foorm {
  width: 100%;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
}
.btnNew2:hover {
  background-color: #1e85f1;
  color: white;
}
.btn-primary {
  width: 300px !important;
  height: 400px;
  color: #1e85f1 !important; 
  background-color: white !important; 
  border: 2px solid #1e85f1 !important;
  border-radius: 20px !important;
  box-shadow: 2px 2px 4px #888888;
}
.btn-primary:hover {
  background-color: #1e85f1 !important;
  color: white !important;
}
.t {
  font-size: 40px !important;
  padding-bottom: 40px;
  font-weight: bold !important;
  text-transform: uppercase;
}
</style>
<script>
import MyHeader from "../../components/header/MyHeader.vue";
import PhonePart3 from './PhonePart3.vue';

export default{
  components: {
    MyHeader,
    PhonePart3,
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