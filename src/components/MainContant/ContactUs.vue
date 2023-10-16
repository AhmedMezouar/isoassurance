<template>
    <div class="downloadApp" :class="$store.getters.getL==='ar'?'ar':''">
      <div class="app__img w-1/3">
        <img src="/inso-pics/iPhone.png" alt="" style="max-width: none;height: 100%;user-select: none;pointer-events: none;">
      </div>
      <div class="app__cntxt">
        <h1 class="h1 app__title">
          {{$store.getters.getT("download the app")}}
        </h1>
        <p class="app__sub  px-2">
          {{$store.getters.getT("You Can now download the app from Google Play and App Store")}}
        </p>
        <img src="/inso-pics/app_download.png" alt="" style="height: 50px;margin-block: 20px;">
      </div>
    </div>
    <div class="contactUs" id="contactusss">
      <div class=" md:block hidden" style="width:var(--inso-w);margin-inline: auto;">
        <p>{{$store.getters.getT("For A Professional Partnership Contact")}}</p>
        <a class="phonenbr" href="tel:+213556000023">
          <span class="assistance">
            <img src="/inso-pics/headset_mic.svg" alt="">
          </span>
          <span style="color: white !important;" class="con">Contact us +213 556 000 023</span>
        </a>
        <div class="absolute mlkj" :class="$store.getters.getL==='ar'?'ar':''">
          <img src="/inso-pics/business_man.png" alt="" style="width: 30%;">
        </div>
      </div>
      <div class=" md:hidden flex" style="width:var(--inso-w);margin-inline: auto;">
        <div style="font-size: .8em;flex-grow: 1;">
          <p style="margin-bottom: auto;">{{$store.getters.getT("For A Professional Partnership Contact")}}</p>
          <a class="phonenbr" href="tel:+213556000023">
            <span class="assistance">
              <img src="/inso-pics/headset_mic.svg" alt="">
            </span>
            <span>Contact us +213 556 000 023</span>
          </a>
        </div>
      </div>
    </div>
</template>
<style scoped>
@media screen and (max-width: 750px) {
  .con {
    color: white !important;
  }    
}
</style>
<script>

</script>