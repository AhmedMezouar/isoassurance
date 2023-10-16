<template>
  <div class="madfl" id="madfl">
    <div class="flex justify-around widthMain flex-wrap card-price">
            <!-- Bronze Card-->
      <div class="bronze_new">
        <p class="cardtitle">{{ $store.getters.getT("Platinum card") }}</p>
        <p class="price">22000 <sup>DA</sup></p>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("p1") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g3") }}
        </div>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g4") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g5") }}
        </div>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g6") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g7") }}
        </div>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_false.svg" alt="">
          {{ $store.getters.getT("g9") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_false.svg" alt="">
          {{ $store.getters.getT("g10") }}
        </div>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_false.svg" alt="">
          {{ $store.getters.getT("g12") }}
        </div>

        <img src="/inso-pics/p3.png" alt="">
        <button @click="showInsoModal()" class="reqstc btn-request">
          {{ $store.getters.getT("Card Request") }}
        </button>
      </div>
      <!-- Golden Card-->
      <div class="golden_new">
        <p class="cardtitle">{{ $store.getters.getT("Gold card") }}</p>
        <p class="price">25000 <sup>DA</sup></p>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g1") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g3") }}
        </div>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g4") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g5") }}
        </div>

        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g6") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g7") }}
        </div>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g9") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g10") }}
        </div>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g12") }}
        </div>


        <img src="/inso-pics/p2.png" alt="">
        <button @click="showInsoModal()" class="reqstc btn-request">
          {{ $store.getters.getT("Card Request") }}
        </button>
      </div>
      <!-- Silver Card-->
      <div class="silver_new">
        <p class="cardtitle">{{ $store.getters.getT("Classic card") }}</p>
        <p class="price">19000 <sup>DA</sup></p>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("c1") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g3") }}
        </div>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g4") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g5") }}
        </div>

        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g6") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_true.svg" alt="">
          {{ $store.getters.getT("g7") }}
        </div>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_false.svg" alt="">
          {{ $store.getters.getT("g9") }}
        </div>
        <div class="card_t2">
          <img class="check_img" src="/inso-pics/check_false.svg" alt="">
          {{ $store.getters.getT("g10") }}
        </div>
        <div class="card_t1">
          <img class="check_img" src="/inso-pics/check_false.svg" alt="">
          {{ $store.getters.getT("g12") }}
        </div>
        <img src="/inso-pics/p1.png" alt="">
        <button @click="showInsoModal()" class="reqstc btn-request">
          {{ $store.getters.getT("Card Request") }}
        </button>
      </div>
      
      

    </div>

  </div>
</template>
<script>
export default {
  methods: {
    showInsoModal() {
      this.$store.commit("SET_typeModal", { index: 0, typeModal: "card" });
    },
  }
}
</script>