<template>
    <div class="phoneIcnns my-4">
        <div class="flex icnss">
            <div class="flex justify-center">
                <img class="ambicon" src="/inso-pics/RightAMB.png" alt="">
            </div>
            <form>
                <div class="mb-8 partfield2" >
                    <label for="name" class="text-gray-700" style="margin-top: 0px;">N° d'assurance</label> 
                    <input required type="text" class="text-black block border w-full rounded-md p-2" name="name" ref="name" placeholder="Entrer votre numéro dassurance" id="name">
                </div>
                <button @click="goChoix()" class="btnNew" style="width: 60% !important; margin: -20px 0px 0px 20% !important;"> 
                    Vérification
                </button>
            </form>
            
             <div>
                <img class="caricon" src="/inso-pics/car.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods:{
    goChoix(){
    this.$router.push('/choix') 
  },
}
}
</script>