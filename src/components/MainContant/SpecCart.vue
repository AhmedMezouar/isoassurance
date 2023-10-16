<template>
    <div style="border-radius: 20px" class="item specCir p-3 py-0 text-center">
      <div class="aspect-square select-none lg:rounded-3xl w-full h-auto relative" style="background-size: cover; background-repeat: no-repeat;aspect-ratio: 9/12; border-radius: 20px;background-image: url('https://admin-assurance-private.assuranceiso.com/web/images/{{item.image}}')" :style='{ backgroundImage: `url(https://admin-assurance-private.assuranceiso.com/web/images/${item.image})`}'>
        <div class="itemBand1" :style='{backgroundImage: item.secondaryColor.length>0? "linear-gradient(225deg, "+item.color+" 0%, "+item.secondaryColor+" 150%)": "linear-gradient(225deg, "+item.color+" 0%, black 150%)"}'></div>
      </div>
      <div class="itemBand2" >
          <div class="wlppr" :style='{backgroundImage: item.secondaryColor.length>0? "linear-gradient(225deg, "+item.color+" 0%, "+item.secondaryColor+" 150%)": "linear-gradient(225deg, "+item.color+" 0%, black 150%)"}'></div>
          <div style="position: relative;z-index: 20;padding:10px;padding-block: 40px;">
              <div class="itemBand2imgholder">
                  <img style="max-width: 50%;" :src="'https://admin-assurance-private.assuranceiso.com/web/images/'+item.icon" alt="">
              </div>
              <p class="specName" style="font-weight: 600;font-size: small;">{{ item.name }}</p>
              <p class="specDescipt" style="font-size: 10px;">
                {{ item.description }}
              </p>
              <button :style="{ backgroundColor: bgcol ,color:col}" @mouseover="hovercard" @mouseout="leavecol" class="spcseemr" @click="getRestrictedHospital(item.name);scrollToHospital()">
                {{ $store.getters.getT("seemore") }}
              </button>
          </div>
      </div>
    </div>
</template>
<script>
    import {
  fetchHospitalsByParams,
} from "../../composable/index";
    export default{
        props: ['item'],
        methods:{
            scrollToHospital() {
                window.scrollTo(0, document.getElementById("hospital").offsetTop);
            },
            getRestrictedHospital(speciaName) {
                fetchHospitalsByParams(this.$store, this.nextPage, speciaName);
            },
            hovercard(){
              this.bgcol="white"
              this.col=this.item.color
            },
            leavecol(){
              this.bgcol='transparent'
              this.col="white"
            }
        },
        data(){
            return {
                black:'black',
                bgcol:"transparent",
                col:"white"
              }
        }
    }
</script>
<style>
.wlppr{
    position: relative;
}
    .item:hover .itemBand2{
  margin-top: -135%;
}
.item:hover .itemBand2>.wlppr{
  opacity: 1;
}
</style>