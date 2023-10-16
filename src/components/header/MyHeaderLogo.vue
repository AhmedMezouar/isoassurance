<template>
    <img src="/inso-pics/LOGO ISO ASSURANCE .svg" @click="gotohome()" class="md:mr-0 mx-2 h-full lg:grow-0 grow inso__logo cursor-pointer py-2" style="object-fit: contain;">
</template>
<script>
    export default {
        methods: {
            gotohome(){
                this.$router.push('/') 
            }
        },
    }
</script>