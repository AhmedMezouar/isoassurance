<template>
    <div class="aspect-video w-full h-auto text-center mb-6">
        <img :src="hostoshow.image.length>0?'https://admin-assurance-private.assuranceiso.com/web/images/' + hostoshow.image : '/inso-pics/Myplaceholder.jpg'" class="aspect-video w-full" style="border-radius: 70px" />
        
    </div>
    <span class="text-3xl capitalize py-3 text-center">{{hostoshow.name.length>0?hostoshow.name: ''}}</span>
    <span class="text-xl capitalize">
        {{hostoshow.country?hostoshow.country:''}}
        {{ hostoshow.country && hostoshow.wilaya?'-':'' }}
         {{hostoshow.wilaya?hostoshow.wilaya:''}}</span>
    <a class="text-xl capitalize" >
        {{hostoshow.phone_number?hostoshow.phone_number:''}}
    </a>
    <div class="flex justify-between w-3/4 my-6">
        <button class="py-2 px-3 text-white rounded-3xl uppercase" style="background-color: var(--nav-bgc);"> <a target="_blank" :href="hostoshow.address_url">{{$store.getters.getT("find on maps")}}</a></button>
        <button @click="hideModal()" class="py-2 px-5 text-black rounded-3xl capitalize bg-gray-300 cancelBtn">{{$store.getters.getT("cancel")}}</button>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    export default { 
        methods:{
            hideModal(){
                this.$store.commit('SET_showModal',false)
            },
        },
        computed: {
            ...mapMutations([
            'SET_showModal', // map `this.increment()` to `this.$store.commit('increment')`
            // `mapMutations` also supports payloads:
            'SET_typeModal' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
            ]),
            hostoshow(){
                if (this.$store.state.catalogue.hospitals.length>0) {
                    const host = this.$store.state.catalogue.hospitals[this.$store.state.modal.hospitalToShow]
                    return host
                } else {
                    return {
                        name:"name",
                        phone_number:"",
                        country:"",
                        wilaya:'',
                        image:''
                    }
                }
                
            }
        },
        created(){
            this.hostoshow
        },
    }
</script>
<style>
    .cancelBtn:hover{
        color:white;
        background-color:rgb(245, 102, 102);
    }
</style>