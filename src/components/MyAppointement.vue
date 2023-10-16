<template>
  <div>
    <NavBar @custom-change="searchAccount" />
    <div class="container mx-auto p-4 md:w-11/12 grid grid-cols-1  gap-8">
      <!-- Information card-->
      <div>
        <h1 class="text-xl font-semibold">{{ otherRef.name +' '+otherRef.surname ?otherRef.surname:'' }}</h1>
        <span>CARD |</span> <span class=" text-teal-500">{{ otherRef.uuid?otherRef.uuid:'' }}</span>
      </div>
      <!-- Information perssonal and wives and children-->
      <div class="grid grid-cols-1 md:grid-cols-3 md:grid-flow-col gap-4 gap-x-8   2xl:gap-y-0">
        <PersonalInformation :personal="otherRef" />
        <WifeComponent :couples="couplesRef" />
        <ChildrenComponent :childrens="childrensRef" />
      </div>
      <!-- Information bill-->
      <div>
        <BillComponent @bill-change="billCalculator" 
        :price="priceRef"
        :priceCalculated="priceCalculatedRef" />
      </div>
    </div>
  </div>

</template>

<script setup>
/* eslint-disable */
import PersonalInformation from './doctor/PersonalInformation.vue';
import WifeComponent from './doctor/WifeComponent.vue';
import ChildrenComponent from './doctor/ChildrenComponent.vue';
import BillComponent from './doctor/BillComponent.vue';
import NavBar from './doctor/NavBar.vue'
import { onMounted, ref } from '@vue/runtime-core';
import { useVisiteStore } from "@/pinia/useVisite";
import { useRouter, useRoute } from 'vue-router'
import { reactive, computed } from 'vue'
const router=useRouter()

const appointement = useVisiteStore();
const isAuthentificated= appointement.checkIsAuthenticated()
if(isAuthentificated==false){ router.push('/visite/login') }
//part declarations
 const childrensRef=ref([])
 const couplesRef=ref([])
 const pourcentRef=ref(0)
 const otherRef=ref({})
 const priceRef=ref(0)
 const priceCalculatedRef=ref(0)
 const isAuthentificatedRef=ref(false)

//methodes

const searchAccount=async (uuid)=>{

 const account = await fetch(`https://backend.assuranceiso.com/api/account/findByUuid/${uuid}`).then((r) => r.json());

 const {childrens,couples,pourcent,...other}=account

 childrensRef.value=childrens.length > 0?childrens:[]
 couplesRef.value=couples.length > 0?couples:[]
 pourcentRef.value=pourcent
 otherRef.value=other
 //part  store intialization
appointement.addPersonalInfromation(other)
appointement.addOriginalChildrens(childrens)
appointement.addOriginalCouples(couples)
}

const billCalculator=(price)=>{
 const priceCalculated=price-(price*(pourcentRef.value/100))
 priceCalculatedRef.value=priceCalculated
 priceRef.value=price
}

</script>

<style>
.rectangle-viste {
  height: 330px;
}
@media screen and (max-width: 600px) {
  .rectangle-viste {
  height: 440px !important;
  padding-bottom: 100px !important;

}
}
</style>