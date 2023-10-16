<template>
    <div class="bg-white pb-6 hidden">
            <div class="py-2" style="background-color:var(--nav-bgc)"></div>
            <div class="lg:px-20 px-3">
              <h5 id="our-clients" class="py-4 text-center capitalize">
                {{$store.getters.getT("Our Clients")}}
              </h5>
              <div class="flex justify-between lg:flex-nowrap flex-wrap overflow-x-auto" 
                @mousedown="grappThis($event)"
                @mousemove="moveSlider($event)"
                @mouseup="stopgrapping()"
                :class="grapped?'abtc':''"
                ref="ourc"
                style="cursor: grab;">
                <div class="lg:basis-1/5 basis-1/2 lg:p-0 p-6 footerClient">
                  <img src="/inso-pics/img852dd4c9e616fc35cc987ba68681ec2cSGA.png" alt="" style="user-select: none;">
                </div>
                <div class="lg:basis-1/5 basis-1/2 lg:p-0 p-6 footerClient">
                  <div class="w-full h-full" style="background-size: contain;
                    background-repeat: no-repeat;
                    background-image: url('/inso-pics/Logo_SETRAM_Algérie.jpg');">
                  </div>
                </div>
                <div class="lg:basis-1/5 basis-1/2 lg:p-0 p-6 footerClient">
                  <div class="w-full h-full" style="background-size: contain;
                    background-repeat: no-repeat;
                    background-image: url('/inso-pics/imgd87e0ab72d6b066f13a3c2defddba080BNP.jpg');">
                  </div>
                </div>
                <div class="lg:basis-1/5 basis-1/2 lg:p-0 p-6 footerClient">
                  <div class="w-full h-full" style="background-size: contain;
                    background-repeat: no-repeat;
                    background-image: url('/inso-pics/imga39bf15ea4cf0bec61300c942c92a7caBradyLogoNew.png');">
                  </div>
                </div>
                <div class="lg:basis-1/5 basis-1/2 lg:p-0 p-6 footerClient">
                  <div class="w-full h-full" style="background-size: contain;
                    background-repeat: no-repeat;
                    background-image: url('/inso-pics/imgd87e0ab72d6b066f13a3c2defddba080BNP.jpg');">
                  </div>
                </div>
                <div class="lg:basis-1/5 basis-1/2 lg:p-0 p-6 footerClient">
                  <div class="w-full h-full" style="background-size: contain;
                    background-repeat: no-repeat;
                    background-image: url('/inso-pics/imga39bf15ea4cf0bec61300c942c92a7caBradyLogoNew.png');">
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
    export default{
        data () {
            return {
                dx:0,
                grapped:false,
            }
        },
        methods: {
            grappThis(event){
                this.grapped=true
                this.dx = event.clientX;
            },
            moveSlider(event){
                if (this.grapped) {
                this.$refs.ourc.scrollLeft+=this.dx-event.clientX
                }
            },
            stopgrapping(){
                this.grapped=false
            },
        }
    }
</script>