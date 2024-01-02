<template>
  <div>
    <div class="border-2 border-slate-200 rounded-2xl rectangle-viste pb-2">
      <!-- part typgoraphy-->
      <div class="flex justify-between p-4">
        <div>
          <span class="text-blue-500 text-sm font-bold">Children </span>
        </div>
      </div>

      <!-- part checkbox-->
      <div id="children-section" class="grid grid-cols-1 mx-auto p-4 gap-2">
        <div v-for="(child, index) in childrens" :key="index" >
          <div v-if="checkAge(child.birth)" class="px-4 py-3 rounded-sm border-2 border-slate-200 ">
            <div class="flex justify-between w-11/12">
              <span class="text-sm ml-2">{{
                child.name + " " + child.surname
              }}</span>
              <!-- switch button-->
              <SwitchComponent
                :index="`child-${index}`"
                :name="`children-switch`"
                :value="child"
                @switch-change="assignChildren"
              />
            </div>
            <div class="flex items-center pl-1 gap-2">
              <img
                src="../../../public/inso-pics/check.png"
                class="h-4"
                alt=""
              />
              <p class="text-sm text-slate-600">{{ calculateAge(child.birth) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import SwitchComponent from "../base/SwitchComponent.vue";
import { useVisiteStore } from "../../pinia/useVisite";
import { ref } from "@vue/runtime-core";

const appointement = useVisiteStore();

const child = ref();
const props = defineProps({
  childrens: {
    type: Object,
    default: [],
  },
});
const assignChildren = (childElement, isChecked) => {
  appointement.addChildren(childElement, isChecked);
};

const calculateAge = (birth) => {
  let now = new Date();
  let year = now.getFullYear();

  let [day, month, birthYear] = birth.split('/').map(Number);
  month--;
  
  let birthday = new Date(birthYear, month, day);
  let years = year - birthday.getFullYear();
  birthday.setFullYear(year);

  return now >= birthday ? years : years - 1;
};
 const assignCouples=(wifeElement,isChecked)=>{
  appointement.addCouples(wifeElement,isChecked)
 }
const checkAge = (birth) => {
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

  let age = now >= birthday ? years : years - 1;
  if (age < 18) {
    return age;
  } else {
    return undefined; // If age is 18 or higher, return undefined
  }
};
</script>

<style scoped></style>
