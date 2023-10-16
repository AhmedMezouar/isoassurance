<template>
    <div id="about" class="flex bg-white my-3 overflow-hidden lg:flex-row flex-col" style="border-radius:20px;">
        <div class="aboutUsPic relative">
            <img src="/inso-pics/Free Floating Credit Cards Mockup.png" class="aspect-square w-full">
            <div class="absolute right-0 top-0 bottom-0" style="width:5%;background-color: var(--nav-bgc);"></div>
        </div>
        
        <div class="grow p-4 relative">
            <h5 class="uppercase py-4 text-lg font-semibold">{{$store.getters.getT("About")}}</h5>
            <textarea class=" xl:text-sm lg:text-xs overflow-hidden text-ellipsis lg:pb-0 pb-4" :class="showubts?'h-auto':'lg:h-auto h-24'">
                
                    {{ $store.getters.getT('aboutUs') }}
                
            </textarea>
            <span id="showMore" :class="showubts?'bg-white right-0 bottom-0':'right-1 -bottom-1'" class=" p-1 rounded-lg opacity-70 text-black absolute lg:hidden inline" @click="showMore()">Show {{more}}</span>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                showubts:false,
                more:"More"
            }
        },
        methods:{
            showMore(){
                this.showubts=!this.showubts
                if (this.showubts) {
                    this.more="Less"
                } else {
                    this.more="More"
                }
            }
        }
    }
</script>