<template>
  <div id="specHos" class="w-full mt-4 relative overflow-hidden bg-black" style="direction:ltr !important;">
    <div class="text-center w-full text-white py-2 specTitle">
      <h6 class="specialities MainTitle lg:text-3xl text-lg font-medium">{{$store.getters.getT("Specialities")}}</h6>
    </div>
    <div class="widthMain-1 specs" style="padding-top: 28px;width: calc(var(--inso-w) + 10%);">
      <div ref="hsp" @mousedown="grappThis($event)" @mousemove="moveSlider($event)" @mouseup="stopgrapping()" :class="grapped?'abtc':''" class="flex justify-between cursor-grab select-none flex-nowrap overflow-x-auto scrollbar-hide trans">
        <button class="specMoveBtns hidden lg:inline hover:scale-105 -right-5" @click="goright()">
          <img src="/inso-pics/arrow.svg" style="transform: scaleX(-1);" alt="">
        </button>
        <button class="specMoveBtns hidden lg:inline hover:scale-105 -left-5 first-letter" @click="goleft()">
          <img src="/inso-pics/arrow.svg" alt="">
        </button>
        <SpecCart v-for="item in getSpecialities" :key="item.id" :item="item"></SpecCart>
      </div>
    </div>
  </div>
</template>
<script>
import {
  fetchSpecialities,
} from "../../composable/index";
import SpecCart from "./SpecCart.vue";
export default {
    data() {
        return {
            showAll: false,
            specialties: this.$store.state.specialties,
            loading: true,
            error: null,
            nextPage: 1,
            dx: 0,
            grapped: false,
        };
    },
    methods: {
        WhatToShow() {
            this.showAll = !this.showAll;
        },
        goleft() {
            this.$refs.hsp.scrollLeft -= this.$refs.hsp.clientWidth / 2;
        },
        goright() {
            this.$refs.hsp.scrollLeft += this.$refs.hsp.clientWidth / 2;
        },
        grappThis(event) {
            this.grapped = true;
            this.dx = event.clientX;
        },
        moveSlider(event) {
            if (this.grapped) {
                this.$refs.hsp.scrollLeft += this.dx - event.clientX;
            }
        },
        stopgrapping() {
            this.grapped = false;
        },
    },
    computed: {
        getSpecialities() {
          console.log(this.$store.state.speciality.specialities)
            return this.$store.state.speciality.specialities;
        },
        getgradiencol(color) {
            return "linear-gradient(225deg, " + color + " 0%, black 150%)";
            //return `linear-gradient(225deg, `+e+` 0%, black 150%)`
        }
    },
    created() {
        fetchSpecialities(this.$store);
    },
    components: { SpecCart }
};
</script>
