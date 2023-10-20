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
        <div v-for="(child, index) in childrens" :key="index">
          <div
            v-if="checkAge(child)"
            class="px-4 py-3 rounded-sm border-2 border-slate-200"
          >
            <div class="flex justify-between w-11/12">
              <span class="text-sm ml-2">{{ child.name }}</span>
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
              <p class="text-sm text-slate-600">{{ age(child.birth) }}</p>
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

const age = (birth) => {
  let birthdate = birth;

  const parts = birthdate.split("/"); // Split the date string into day, month, and year parts

  // Create a new Date object using the parts (note that month in Date object is zero-indexed)
  const birthDate = new Date(parts[2], parts[1] - 1, parts[0]);

  // Get the current date
  const currentDate = new Date();

  // Calculate the age
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Adjust the age if the birth date has not occurred yet this year
  const birthMonth = birthDate.getMonth();
  const currentMonth = currentDate.getMonth();
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age
};
const checkAge = (child) => {
  let birthdate = child.birth;

  const parts = birthdate.split("/"); // Split the date string into day, month, and year parts

  // Create a new Date object using the parts (note that month in Date object is zero-indexed)
  const birthDate = new Date(parts[2], parts[1] - 1, parts[0]);

  // Get the current date
  const currentDate = new Date();

  // Calculate the age
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Adjust the age if the birth date has not occurred yet this year
  const birthMonth = birthDate.getMonth();
  const currentMonth = currentDate.getMonth();
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  console.log("age" + age);

  return age < 18 ? true : false;
};
</script>

<style scoped></style>
