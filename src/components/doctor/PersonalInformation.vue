<template>
  <div>
    <div class="border-2 border-slate-200 rounded-2xl rectangle-viste">
      <!-- part typgoraphy-->
      <div class="flex justify-between p-4">
        <div>
          <span class="text-blue-500 text-sm font-bold">The insurer </span>
          <span class="text-xs">11 Mars 2023</span>
        </div>
        <button class="btn bg-green-400 text-white text-sm rounded-xl w-24 h-6">
          Active
        </button>
      </div>
      <!-- part image-->
      <div class="flex justify-center rounded-md">
        <img
          class="w-24 h-24 border-4 rounded-full border-slate-400"
          :src="avatar"
          alt=""
        />
      </div>
      <!-- part input-->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2x:grid-cols-2 mx-auto  pt-4 pb-4 xl:pl-4  w-11/12 gap-3">
        <div class="grid grid-cols-1">
          <label class="text-slate-400 text-xs" for="">First Name</label>
          <input
            class=" lg:w-36 xl:w-36 2xl:w-36 border-2   border-slate-400 rounded-lg placeholder:mx-3"
            type="text"
            disabled
            :placeholder="personal.name"
          />
        </div>
        <div class="grid grid-cols-1">
          <label class="text-slate-400 text-xs" for="">Last Name</label>
          <input
            class="xl:w-40 2xl:w-48   border-2 border-slate-400 rounded-lg placeholder:mx-3"
            type="text"
            disabled
            :placeholder="personal.surname"
          />
        </div>
        <div class="grid grid-cols-1">
          <label class="text-slate-400 text-xs" for="">Date of birth</label>
          <input
            class="lg:w-36 xl:w-36 2xl:w-36 border-2 border-slate-400 rounded-lg placeholder:mx-3"
            type="text"
            disabled
            :placeholder="personal.birthdate"
          />
        </div>
        <div class="grid grid-cols-1">
          <label class="text-slate-400 text-xs" for="">Gender</label>
          <input
            class="xl:w-40 2xl:w-48 border-2 border-slate-400 rounded-lg placeholder:mx-3"
            type="text"
            disabled
            :placeholder="personal.gender"
          />
        </div>
      </div>
      <!-- part Button-->
      <div class="bg-slate-100 rounded-b-xl mx-auto">
        <div class="flex">
          <button
            @click="visiteAlone"
            :class="`text-xs text-white  font-medium py-4  rounded-bl-xl w-1/2 ${
              isAlone ? 'bg-blue-600' : 'text-slate-700'
            }`"
          >
            <span class=""> I am the patient </span>
          </button>
          <button
            @click="visiteMember"
            :class="`text-xs font-medium p-2 rounded-br-xl py-4 flex justify-start w-1/2 ${
              isMember ? 'bg-blue-600 text-white' : 'text-slate-700'
            } `"
          >
            <span class="flex justify-items-center"
              >a memeber of my familly</span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { useVisiteStore } from "../../pinia/useVisite";
import { ref } from "@vue/runtime-core";
const isAlone = ref(true);
const isMember = ref(false);
const avatar = ref("");
const appointement = useVisiteStore();
const props = defineProps({
  personal: {
    type: Object,
    default: {},
  },
});

if (appointement.gender == "Homme") {
  avatar.value = "/inso-pics/avatar-man.png";
} else if (appointement.gender == "Femme") {
  avatar.value = "/inso-pics/avatar-woman.png";
}
const visiteAlone = (e) => {
  isAlone.value = true;
  isMember.value = false;
  appointement.createPatientAlone();
  appointement.changeVisteToAloneStatus();
  appointement.visite.patient_identity = [];
};
const visiteMember = (e) => {
  isAlone.value = false;
  isMember.value = true;
  appointement.changeVisteToFamilyStatus();
  appointement.visite.patient_identity = [];
};
</script>

<style scoped>
.buttonMember {
  background: blue;
}
.buttonAlone {
  background: blue;
}
::placeholder{
    text-indent: 15px;
  }
</style>
