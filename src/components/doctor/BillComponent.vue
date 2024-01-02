<template>
  <div class="border-2 border-slate-200 rounded-2xl min-h-64 mt-16">
    <div class="mx-auto w-10/12 py-6">
      <!-- part typgoraphy-->
      <div class="flex justify-start">
        <div>
          <span class="text-2xl font-bold text-neutral-900">Payment </span>
        </div>
      </div>

      <!-- part checkout-->
      <div class="flex flex-col md:flex-row justify-start gap-x-24">
        <div class="grid grid-cols-1">
          <p class="text-blue-500 font-medium">Price</p>
          <span class="text-sm text-slate-400">please select your price</span>
          <div class="rounded-xl border-2 border-stone-400 bg-slate-100">
            <input type="number" @input="handleChange" class="px-4 py-1 w-72" />
            <span class="text-lg px-4 py-1 border-l-2 border-stone-400"
              >DZD</span
            >
          </div>
          <span class="text-sm text-slate-400"
            >Note field accept only digits</span
          >
        </div>
        <div class="grid grid-cols-1">
          <p class="text-blue-500 font-medium">Patient pay you</p>
          <span class="text-sm text-slate-400"
            >Automatic profit calculator for our clients</span
          >
          <div class="rounded-xl border-2 border-stone-400 bg-slate-100">
            <input
              type="number"
              :disabled="true"
              class="px-4 py-1 w-72"
              :value="priceCalculated"
            />
            <span class="text-lg px-4 py-1 border-l-2 border-stone-400"
              >DZD</span
            >
          </div>
          <span class="text-sm text-slate-400">&#x2007; </span>
        </div>
      </div>
      <div class="flex justify-center gap-2">
        <button
          class="rounded-xl border-2 border-slate-200 px-4 py-1 text-blue-600 text-xs"
        >
          Cancel
        </button>
        <button
          class="rounded-xl px-4 py-1 bg-blue-600 text-white text-xs"
          @click="submitAppointement"
        >
          Valider
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { useVisiteStore } from "../../pinia/useVisite";
import { toast } from "vue3-toastify";
import axios from "axios";
import "vue3-toastify/dist/index.css";
const props = defineProps({
  priceCalculated: {
    type: Number,
    default: 0,
  },
    price: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits({
  unvalidatedEvent: null, // if we want an event without validation
  customChange: (s) => {
    if (s && typeof s === "string") {
      return true;
    } else {
      console.warn(`Invalid submit event payload!`);
      return false;
    }
  },
});
const handleChange = (event) => {
  emit("billChange", event.target.value.toUpperCase());
};
const submitAppointement = async () => {
  //gathering data
  const appointement = useVisiteStore();
  appointement.addPrice(props.price,props.priceCalculated)
  const visite=appointement.visite
  //call axios
  const apiClient = axios.create({
    baseURL: "https://backend.assuranceiso.com",
    withCredentials: false, // This is the default
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  axios
    .post("https://backend.assuranceiso.com/api/appointement/create", visite)
    .then()
    .then((response) => {
      return response.data;
    });
  //sweet alert
  toast.success("visite terminée", {
    autoClose: 6000,
    closeButton: true,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER,
    theme: toast.THEME.COLORED,
  });
};
</script>

<style></style>
