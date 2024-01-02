<template>
  <div>
    <div class="border-2 border-slate-200 rounded-2xl rectangle-viste">
      <!-- part typgoraphy-->
      <div class="flex justify-between p-4">
        <div>
          <span class="text-blue-500 text-sm font-bold">Wife </span>
        </div>
      </div>

      <!-- part checkbox-->
      <div id="wife-section" class="grid grid-cols-1 mx-auto p-4  gap-4">
        <div v-for="(couple, index) in couples" :key="index" class="rounded-sm border-2 border-slate-200 px-4 py-3">
          <div class="flex justify-between w-11/12">
            <span class="text-sm ml-2">{{ couple.name+' '+couple.surname }}</span>
            <!-- switch button-->
            <SwitchComponent @switch-change="assignCouples"  :index="`wife-${index}`" :name="`couples-switch`" :value="couple"  />
          </div>
          <div class="flex items-center  pl-1 gap-2">
            <img src="../../../public/inso-pics/check.png" class=" h-4" alt="">
            <p class="text-sm text-slate-600">{{  calculateAge(couple.birth) }} ans</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import SwitchComponent from '../base/SwitchComponent.vue';
import { useVisiteStore } from "../../pinia/useVisite";
import { ref } from "@vue/runtime-core";
const appointement = useVisiteStore();

const wife = ref();

 const props=defineProps({
    couples:{
        type:Object,
        default:[]
    }
 })
 const calculateAge = (birth) => {
  let now = new Date();
  let year = now.getFullYear();

  // Extracting day, month, and year components from the birth string
  let [day, month, birthYear] = birth.split('/').map(Number);

  // JavaScript Date uses months starting from 0 (January is 0, December is 11)
  // Adjusting the month to start from 0
  month--;

  let birthday = new Date(birthYear, month, day);

  let years = year - birthday.getFullYear();
  birthday.setFullYear(year);

  return now >= birthday ? years : years - 1;
};
 const assignCouples=(wifeElement,isChecked)=>{
  appointement.addCouples(wifeElement,isChecked)
 }

</script>

<style scoped>
</style>