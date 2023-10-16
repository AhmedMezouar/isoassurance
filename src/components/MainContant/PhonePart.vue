<template>
    <div class="phoneIcnns my-4">
        <div class="flex icnss">
            <div class="btnNew" @click="goReservation()" style="width: 60% !important; margin: 200px 0px 0px 20% !important;">Réserver maintenant</div>
            <div class="flex justify-center">
                <img class="ambicon" src="/inso-pics/RightAMB.png" alt="">
            </div>
            <h4 class="h4" style="text-align: center;color: #E20000 !important;font-weight: 600;">ambulance+</h4>
            <h4 class="h4" style="text-align: center;font-weight: 600;">et analyses a domicile</h4>
            <div>
                <img class="caricon" src="/inso-pics/car.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods:{
   goReservation(){
      this.$router.push('/reserve') 
    },
  }
}
</script>