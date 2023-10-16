<template>
  <div>
    <main>
      <section class="relative w-full h-full py-20 min-h-screen">
        <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          :style="`background-image: url('${registerBg2}');`"
        ></div>
        {{checkIfLoggedIn}}
        <router-view />
      </section>
    </main>
  </div>
</template>
<script>

import registerBg2 from "@/assets/img/register_bg_2.png";

export default {
  data() {
    return {
      registerBg2,
    };
  },
  components: {
  },
    mounted(){
      
    if (this.$store.state.auth.status.loggedIn==false) {
       this.$router.push('/auth/login');
    }else{
      this.$router.push('/hospitals');
    }
  }
};
</script>
