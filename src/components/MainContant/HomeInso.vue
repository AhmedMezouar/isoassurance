<template>
  <div :class="moved?'moved':''" class="homeSlider">
  <div class="homesliderElement sliderElement" :class="$store.getters.getL==='ar'?'ar':''" @click="moveSlider($event)" style="display:flex;min-width: 100%">
    <img class="fam__img" alt="familly" src="/inso-pics/f1.png" />
    <div class="fam__txt" style="">
      <h5 class="h5" style="font-weight: 600;">
        {{ $store.getters.getT("best For you") }}
      </h5>
      <h4 class="h4">{{ $store.getters.getT("and your family too") }}</h4>
      <small class="sliderTxt">{{ $store.getters.getT("Choisissez qui peut réaliser vos rêves et ceux de votre famille, choisissez ISO ASSURANCE.") }} 
        <br style="line-height: .5;"><br style="line-height: .5;">{{ $store.getters.getT("Après les voyages, ISO rejoint le domaine des assurances.\n ISO ASSURANCE propose des services visant plusieurs secteurs d’activité « santé, voyages, crèches et garderies, universités et agences d’assurance ».  ") }}
        <br style="line-height: .5;"><br style="line-height: .5;">{{ $store.getters.getT("Nous sommes présents en Algérie et à l’étranger.") }}
      </small>
      <div class="flex">
        <a href="#madfl" class="signBtn">{{ $store.getters.getT("I'm registering") }}</a>
        <button class="plusBtn mlrtazrdf" @click="abtus">{{ $store.getters.getT("know more") }}</button>
      </div>
    </div>
  </div>
  <div class="homesliderElement mlxcv" @click="moveSlider($event)" style="display:flex;min-width: 100%;">
    <div class="fam__txt">
      
      <h1 class="h1 greet" style="text-transform: capitalize;">
        <i>Hi Dear</i>
        <span>

        </span>
      </h1>
      <h6 class="h6">{{ $store.getters.getT("Lifetime Insurance") }}</h6>
      <small class="sliderTxt">{{ $store.getters.getT("Après les voyages, ISO rejoint le domaine des assurances.ISO ASSURANCE propose des services visant plusieurs secteurs d’activité (santé, voyages, crèches et garderies, universités et agences d’assurance. ") }}</small>
      <div class="phoneAps">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxDGThU-uf8FVGZLA-u3LFbNNqjRah_qGhQ&usqp=CAU" alt="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzb7K02mWDA5QcK3avJwadF6TsLEYnZBtirqquEbZCFyRuPE1kNbrQkBKc8Bgf1T-42w&usqp=CAU" alt="">
      </div>
      <div style="display: flex;">
        <a href="#madfl" class="signBtn" >{{ $store.getters.getT("I'm registering") }}</a>
        <button class="plusBtn mlrtazrdf" @click="abtus">{{ $store.getters.getT("know more") }}</button>
      </div>
      
    </div>
    <img class="fam__img" alt="bm" src="/inso-pics/bm.png">
  </div>
  <div style="position: absolute;bottom: 0;width: 100%;display: flex;justify-content: center;">
    <button class="goleft sldrBtn" @click="moveSlider($event)"></button>
    <button class="goright sldrBtn" @click="moveSlider($event)"></button>
  </div>
</div>
</template>
<script>
import { useVisiteStore } from "@/pinia/useVisite"
export default {
  data() {
    return {
      appointement:null,
      moved:false
    };
  },
  computed:{
    authenticated(){
                return this.appointement.checkIsAuthenticated();
            },
  },
  methods: {
    moveSlider(event){
      event.target.classList[0]==='goright'?this.moved=true:this.moved=false
      event.target.classList[0]==='homesliderElement'?this.moved=!this.moved:this.moved;
      //homesliderElement
    },
    abtus(){
      document.getElementById('slider-0').click()
      document.getElementById('HomeContainer').scrollIntoView({ behavior: "smooth" });
    },
    gologin(){
        if (this.authenticated) {
            this.$router.push('/visite') 
        } else {
            this.$router.push('/visite/login') 
        }
    },
  },
  created(){
    this.appointement = useVisiteStore();
  }
};
</script>
<style>
  .mlrtazrdf:hover{
    color:#1e85f1 !important;
  }
</style>
