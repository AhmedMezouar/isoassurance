<template>
    <div class="flex items-center h-full" :class="$store.getters.getL === 'ar'?'lg:ml-0 ml-2':'lg:mr-0 mr-2'">
        
        <div id="log" class="">
            <div @click="showInsoModal()" class="cursor-pointer flex items-center">
                <div class="noimg">
                    <img src="/inso-pics/avatar-man.png" alt="" height="18">
                    <span class="connected p-1" v-if="authenticated"></span>
                </div>
                <p class="userName hidden lg:flex">
                    {{$store.getters.getT(username)}}
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .connected{
        background: lawngreen;
        border-radius: 100%;
    }
    #log{
        align-items: center;
    }
    .userName{
        white-space: nowrap;
        margin-bottom: 0px !important;
    }
    .userimg{
        display:none;
    }
    .connected{
        position: absolute;
        bottom:0;
        left: 0;
    }
</style>
<script>
    import { mapMutations } from 'vuex'
    import { useVisiteStore } from "@/pinia/useVisite"
    export default {
        data(){
            return {
                showLangDropDown:false,
                lang:"en",
                eng:"English",
                frc:"Français",
                arb:"العربية",
                tur:"Türkçe",
                appointement:null,
            }
        },
        
        computed: {
            tr (txt) {
                return this.$store.getters.getT(txt)
            },
            authenticated(){
                return this.appointement.checkIsAuthenticated();
            },
            username(){
                return this.authenticated? this.$store.getters.getuserInfoDAta.name+' '+this.$store.getters.getuserInfoDAta.surname :'login'
            }
        },
        methods: {
            
            t (txt) {
                return this.$store.getters.getT(txt)
            },
            ...mapMutations([
            'SET_showModal', // map `this.increment()` to `this.$store.commit('increment')`

            // `mapMutations` also supports payloads:
            'SET_typeModal' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
            ]),
            showInsoModal(){
                if (this.authenticated) {
                    this.$router.push('/visite') 
                } else {
                    this.$router.push('/visite/login') 
                }
            },
            showLangDropDownFct(){
                this.showLangDropDown=!this.showLangDropDown
            },
            changeLang(lang){
                this.lang=lang;
                this.$store.commit('SET_lang',this.lang)
                this.showLangDropDown=false
            }
        },
        created(){
            this.appointement = useVisiteStore();
        },
    }
</script>