<template>
  <div id="bg-visite">
    <router-view />
  </div>
</template>
<script>

export default {
  name: "admin-layout",
};
</script>

<style>
#bg-visite {
  background: url("../../public/inso-pics/visite-background.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
