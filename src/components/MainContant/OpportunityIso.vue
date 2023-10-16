<template>
    <div class="flex flex-wrap mlnxwx">
        <div id="HomeContainer" class="relative w-1/2">
          <div class="absolute bottom-0 flex justify-center w-full z-10 py-3">
            <button
              id="slider-0"
              class="p-1.5 m-1 rounded-full"
              @click="changeSlider(0)"
              :class="[slider == 0 ? 'btnBg' : 'btnDes']"
            ></button>
            <button
              id="slider-2"
              class="p-1.5 m-1 rounded-full"
              @click="changeSlider(2)"
              :class="[slider == 2 ? 'btnBg' : 'btnDes']"
            ></button>
          </div>
          <div id="home" class="w-full h-full flex overflow-hidden">
            <img src="/inso-pics/c1.jpg" :style='{display:slider==0?"block":"none"}' class="w-full object-cover" alt="" />
            <img src="/inso-pics/c3.jpg" :style='{display:slider==2?"block":"none"}' class="w-full object-cover" alt="" />
          </div>
        </div>
        <div class="masdm">
          <h1 class="h1" style="font-weight: 900;font-size: 25px;text-transform: uppercase; color: #1e85f1;">
            <i>{{$store.getters.getT(Title)}}</i>
          </h1>
          <h6 style="font-size:18px;margin-block: 20px;text-transform: uppercase;">
            {{$store.getters.getT(subtitle)}}
          </h6>
          <div class="mytabout">
            <pre style="font-size: 12px;" class="pretext" v-if="slider == 0">
              {{$store.getters.getT("aboutUs")}}
            </pre>
          <pre class="pretext" v-else style="font-size: 12px;">{{ $store.getters.getT("studyTurk") }}</pre>
          </div>
          <div class="flex items-center">
            <button class="viewMore hidden">{{$store.getters.getT("sign up")}}</button>
            <a v-if="slider!=0" class="viewMore readmore" :href="slider == 1 ? '#partenairContainer':'/univ'">{{$store.getters.getT("seemore")}}</a>
            <img class="mlkj" src="/inso-pics/LOGO ISO ASSURANCE sign.svg" alt="">
          </div>
        </div>
    </div>
</template>
<script>
    import { fetchCarousels } from "../../composable/index";
export default {
  components: {},

  data() {
    return {
      Title:"about",
      subtitle:"your favorite choice",
      slideImg: "/inso-pics/c1.jpg",
      slider: 0,
      direction:"univ",
      opportunities: [
        {
            img:"/inso-pics/c1.jpg",
            title:"about",
            subtitle:"your favorite choice"
        },
        {
            img:"/inso-pics/c2.jpg",
            title:"let's be partner",
            subtitle:"collaborate with us"
        },
        {
            img:"/inso-pics/c3.jpg",
            title:"study in turkey",
            subtitle:"is possible now"
        },
    ],
      
    };
  },
  methods: {
    changeSlider(slide) {
      this.slider = slide;
      this.slideImg =this.opportunities[slide].img;
      this.Title =this.opportunities[slide].title;
      this.subtitle =this.opportunities[slide].subtitle;
    },
  },
  mounted() {
    fetchCarousels(this.$store);
  },
};
</script>
<style scoped>
.btnDes{
    background: #707070;
}
.mlkj{
    margin-inline-start: auto;
    max-height: 55px;
}
.viewMore{
    background: var(--nav-bgc);
    color: white;
    padding: 6px;
    padding-inline: 16px;
    border-radius: 20px;
    font-size: small;
    text-transform: capitalize;
    height: fit-content;
}
.readmore{
    border: 1px solid var(--nav-bgc);
    color: var(--nav-bgc);
    background-color: transparent;
    margin-inline:20px ;
}
</style>