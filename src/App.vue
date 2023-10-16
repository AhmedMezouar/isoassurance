<template>
  <div id="app" class="mt-0" :class="$store.getters.getL === 'ar'?'directArab':'' ">
    
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'App',

  data () {
    return{
      Homewidth:0,
    }
  },
  async created(){
    const result= await axios
    .get("https://backend.assuranceiso.com/api/maintenance/1")
    .then()
    .then((response) => {
      return response.data;
    });
    if(result.status==0){
      this.$router.push('/maintenance') 
    }
  },
}
</script>

<style>
#app {
  font-family: "Poppins", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
.fb-root iframe{
  right: 40px !important;
  bottom: 15px;
}
</style>
