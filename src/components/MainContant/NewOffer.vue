<template> 
    <div id="Off-new" class="widthMain">
        <div class="row">
            <div class="col-12">
                <h2 class="h2-special" >Nos Offres</h2>
                <p>En collaboration avec des partenaires de renommée, nous proposons aux membres ISO Assurance des offres optimales et des services d’intermédiation d’exception dans le domaine des assurances. Les secteurs d’activité couverts sont : la santé, les voyages, l’université, les crèches et tout type d’assurance «biens et personnes».</p>    
            </div>
            <div class="col-3" @click="goCreche()">
                <button class="btn-offer" icon="bagage.svg" :link="'LandingPage'">
                    <svg class="svg-offer" xmlns="http://www.w3.org/2000/svg" width="60.414" height="67.965" viewBox="0 0 60.414 67.965"><path d="M165.664,295.646H214.75v-15.1H184.543V261.664H175.1a9.348,9.348,0,0,0-9.44,9.44ZM190.23,318.3a32.285,32.285,0,0,0,4.271-.283,24.516,24.516,0,0,0,4.2-.944V301.31H181.711v15.764a24.446,24.446,0,0,0,4.224.944A32.82,32.82,0,0,0,190.23,318.3Zm-.024,5.664a35.768,35.768,0,0,1-13.612-2.643,39.49,39.49,0,0,1-11.781-7.457l4.059-4.059a32.33,32.33,0,0,0,3.407,2.726,35.4,35.4,0,0,0,3.767,2.277v-13.5H165.664A5.807,5.807,0,0,1,160,295.646V271.1A15.148,15.148,0,0,1,175.1,256h15.1v18.879H214.75a5.807,5.807,0,0,1,5.664,5.664v15.1a5.807,5.807,0,0,1-5.664,5.664H204.366v13.5q1.966-1.067,3.768-2.28a26.79,26.79,0,0,0,3.407-2.723l4.059,4.059a39.489,39.489,0,0,1-11.781,7.457A35.768,35.768,0,0,1,190.207,323.965ZM190.207,278.655Z" transform="translate(-160 -256)" fill="#009f28"/></svg>
                    <h4 class="titre-offer">Crèche</h4>
                </button>
            </div>
            <div class="col-3" @click="goAssurance()">
                <button class="btn-offer" icon="bagage.svg">
                    <svg class="svg-offer" xmlns="http://www.w3.org/2000/svg" width="70.545" height="64.052" viewBox="0 0 70.545 64.052"><path d="M74.872,236.242a2.616,2.616,0,0,0,.922-.2,2.378,2.378,0,0,0,.842-.521l27.015-27.1a6.859,6.859,0,0,0,1.563-2.378,7.307,7.307,0,0,0,.521-2.672,7.585,7.585,0,0,0-.521-2.726,6.8,6.8,0,0,0-1.563-2.4l-14.43-14.43a6.8,6.8,0,0,0-2.4-1.563,7.585,7.585,0,0,0-2.726-.521,7.308,7.308,0,0,0-2.672.521,6.859,6.859,0,0,0-2.378,1.563L77.6,185.257l6.493,6.573a12.63,12.63,0,0,1,1.844,2.605,6.718,6.718,0,0,1,.8,3.247,7.317,7.317,0,0,1-2.365,5.371,7.508,7.508,0,0,1-5.411,2.325,7.324,7.324,0,0,1-5.747-2.312L67.336,197.2l-14.51,14.51a2.319,2.319,0,0,0-.561.844,2.769,2.769,0,0,0-.16.949,2.328,2.328,0,0,0,2.378,2.375,1.95,1.95,0,0,0,.949-.24,3.308,3.308,0,0,0,.762-.561l11.063-11.063,3.367,3.367L59.64,218.365a2.25,2.25,0,0,0-.561.882,3.026,3.026,0,0,0-.16.962,2.466,2.466,0,0,0,2.4,2.4,2.2,2.2,0,0,0,.922-.2,2.567,2.567,0,0,0,.762-.521L74.07,210.829l3.367,3.367L66.454,225.179a2.4,2.4,0,0,0-.521.828,2.748,2.748,0,0,0-.2,1.015,2.466,2.466,0,0,0,2.4,2.4,2.354,2.354,0,0,0,.882-.16,2.443,2.443,0,0,0,.8-.561l11.063-11.063,3.367,3.367L73.188,232.073a2.25,2.25,0,0,0-.561.882,2.808,2.808,0,0,0-.16.882,2.219,2.219,0,0,0,2.4,2.4Zm.005,4.81a6.719,6.719,0,0,1-4.735-1.964,7.986,7.986,0,0,1-2.485-4.86,7.86,7.86,0,0,1-6.814-6.8,7.614,7.614,0,0,1-4.529-2.285,8.155,8.155,0,0,1-2.2-4.529,8.055,8.055,0,0,1-4.89-2.4,6.7,6.7,0,0,1-1.924-4.81,7.393,7.393,0,0,1,.539-2.73,7.188,7.188,0,0,1,1.545-2.4l17.957-17.957,8.818,8.818a5.092,5.092,0,0,0,1.389,1,3.42,3.42,0,0,0,1.5.361,3.192,3.192,0,0,0,2.886-2.9,2.582,2.582,0,0,0-.281-1.07,4.507,4.507,0,0,0-.922-1.243L69.26,183.814a6.8,6.8,0,0,0-2.4-1.563,7.585,7.585,0,0,0-2.726-.521,7.308,7.308,0,0,0-2.672.521,6.889,6.889,0,0,0-2.374,1.552L46.894,196a6.4,6.4,0,0,0-1.563,2.365,9.887,9.887,0,0,0-.521,2.806,6.415,6.415,0,0,0,.6,3.046,12.893,12.893,0,0,0,1.643,2.686l-3.447,3.447A14.058,14.058,0,0,1,41,206.1a13.4,13.4,0,0,1-1-5.05,11.831,11.831,0,0,1,.922-4.609,11.985,11.985,0,0,1,2.605-3.888l12.1-12.1a11.2,11.2,0,0,1,3.992-2.605A12.83,12.83,0,0,1,64.193,177a12.641,12.641,0,0,1,4.546.842,11.251,11.251,0,0,1,3.968,2.605l1.443,1.443,1.443-1.443a11.2,11.2,0,0,1,3.992-2.605A12.83,12.83,0,0,1,84.154,177a12.641,12.641,0,0,1,4.546.842,11.251,11.251,0,0,1,3.968,2.605L107.018,194.8a11.64,11.64,0,0,1,2.645,4.011,12.413,12.413,0,0,1,.882,4.569,12.086,12.086,0,0,1-.882,4.527,11.745,11.745,0,0,1-2.645,3.968L80,238.887a7.408,7.408,0,0,1-2.367,1.6A7,7,0,0,1,74.877,241.051ZM67.015,197.282Z" transform="translate(-40 -177)" fill="#009f28"/></svg>
                    <h4 class="titre-offer">Assurance</h4>
                </button>
            </div>
            <div class="col-3" @click="gohospitals()">
                <button class="btn-offer" icon="bagage.svg">
                    <svg class="svg-offer" xmlns="http://www.w3.org/2000/svg" width="66.808" height="65.973" viewBox="0 0 66.808 65.973"><path d="M166.765,258.59a9.979,9.979,0,1,1,7.1-2.923A9.664,9.664,0,0,1,166.765,258.59Zm0-5.011a4.921,4.921,0,1,0-3.57-1.441A4.848,4.848,0,0,0,166.765,253.579Zm-20.042,28.393v-9.687a6.833,6.833,0,0,1,.835-3.3,6.414,6.414,0,0,1,2.338-2.464,36,36,0,0,1,4.844-2.464,36.394,36.394,0,0,1,5.178-1.712l6.848,8.852,6.848-8.852a34.74,34.74,0,0,1,5.136,1.712,37.246,37.246,0,0,1,4.8,2.464,6.735,6.735,0,0,1,2.38,2.464,6.577,6.577,0,0,1,.877,3.3v9.687Zm5.011-5.011h13.111L158,268.11q-1.67.668-3.257,1.461a31.271,31.271,0,0,0-3.006,1.712Zm16.952,0H181.8v-5.679q-1.42-.919-2.965-1.712t-3.215-1.461ZM164.845,276.962ZM168.686,276.962Zm-43.676-.835A5.025,5.025,0,0,1,120,271.116V221.011A5.025,5.025,0,0,1,125.011,216h50.106a5.025,5.025,0,0,1,5.011,5.011v20.627a17.137,17.137,0,0,0-2.171-3.09,15.263,15.263,0,0,0-2.839-2.505V221.011H125.011v50.106h16.7v5.011Zm8.351-41.755h28.477a14.12,14.12,0,0,1,2.408-.626,15.138,15.138,0,0,1,2.519-.209v-4.175h-33.4Zm0,14.2h18.372a15.98,15.98,0,0,1,.209-2.547,13.881,13.881,0,0,1,.626-2.464H133.362Zm0,14.2h13.195a15.066,15.066,0,0,1,3.006-1.8q1.587-.71,3.257-1.378v-1.837H133.362Zm-8.351,8.351v0ZM166.765,248.569Z" transform="translate(-120 -216)" fill="#009f28"/></svg>
                    
                    <h4 class="titre-offer">Clinique</h4>
                </button>
            </div>
            <div class="col-3" @click="goUniversity()">
                <button class="btn-offer" icon="bagage.svg">
                    <svg class="svg-offer" xmlns="http://www.w3.org/2000/svg" width="83.068" height="67.965" viewBox="0 0 83.068 67.965">
                        <path id="school_FILL0_wght400_GRAD0_opsz48" d="M81.44,283.965,54.065,268.956V246.3L40,238.655,81.44,216l41.629,22.655v29.924h-5.664v-26.62l-8.59,4.342v22.655Zm0-29.074,29.735-16.236L81.44,222.7,51.894,238.655Zm0,22.655,21.711-11.988V249.7L81.44,261.31l-21.711-11.8v16.047ZM81.534,254.891ZM81.44,261.877ZM81.44,261.877Z" transform="translate(-40 -216)" fill="#009f28"/>
                    </svg>
                    
                    <h4 class="titre-offer">Université</h4>
                </button>
            </div>
            <div class="col-6" @click="goVoyage()">
                <button class="btn-offer-voyage" icon="bagage.svg">
                    <div class="row">
                        <div class="col-6">
                            <svg class="svg-voyage" xmlns="http://www.w3.org/2000/svg"  width="70" height="60" viewBox="0 0 45.824 65.463"><path d="M204.91,238.189a4.924,4.924,0,0,1-4.91-4.91V194.82a5.745,5.745,0,0,1,5.728-5.728h7.365V178.455a2.04,2.04,0,0,1,1.009-1.8,4.071,4.071,0,0,1,2.264-.655h13.093a4.071,4.071,0,0,1,2.264.655,2.04,2.04,0,0,1,1.009,1.8v10.638h8.183a4.924,4.924,0,0,1,4.91,4.91V233.28a4.924,4.924,0,0,1-4.91,4.91,3.273,3.273,0,1,1-6.546,0H211.456a3.273,3.273,0,1,1-6.546,0Zm11.456-49.1h13.093v-9.819H216.366ZM204.91,233.28h36V194h-36Zm5.728-4.91h3.273V198.912h-3.273Zm10.638,0h3.273V198.912h-3.273Zm10.638,0h3.273V198.912h-3.273Zm-27,4.91v0Z" transform="translate(-200 -176)" fill="#fff"/></svg><br>
                        </div>
                        <div class="col-6 text-ass-6" style="color: white;">
                            
                            <h4 class="titre-offer">Voyage</h4>
                        </div>
                    </div>
                </button>
            </div>
            <div class="col-6" @click="goHotel()">
                <button class="btn-offer-large" icon="bagage.svg">
                    <div class="col-6">
                        
                        <svg class="svg-offer" xmlns="http://www.w3.org/2000/svg" width="60.414" height="67.965" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z" fill="#009f28"/>
                        </svg>
                    </div>
                    <div class="col-6 hotel-offer">
                        
                        <h4 class="titre-offer">Hôtel</h4>
                    </div>
                    
                </button>
            </div>

        </div>
      
    </div>
</template>
<script>
    export default{
        components:{
            
        },
        methods:{
            goVoyage(){
            let route1 = this.$router.resolve('/voyage');
            window.open(route1.href);
            },
            goVoyage_1(){
            let route1 = this.$router.resolve('/voyage');
            window.open(route1.href);
            },
            goAssurance(){
            let route1 = this.$router.resolve('/agency');
            window.open(route1.href);
            },
            gohospitals(){
            let route1 = this.$router.resolve('/hospitals');
            window.open(route1.href);
            },
            goUniversity(){
            let route1 = this.$router.resolve('/univ');
            window.open(route1.href);
            },
            goCreche(){
            let route1 = this.$router.resolve('/creche');
            window.open(route1.href);    
            },
            goHotel(){
            let route1 = this.$router.resolve('/hotel');
            window.open(route1.href);   
            },
        }
    }
</script>
<style scoped>
OfferCard:hover {
    width: 100% !important;
}
.btn-offer {
    width: calc(100% - 10px) !important;
    height: 250px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgb(210, 210, 210);
    padding-block: 40px;
    margin-top: 30px;
    background-color: white;
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: border 0.3s ease;
    animation: initial-state 1s;
}
.btn-offer-large {
    width: calc(100% - 10px);
    height: 200px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgb(210, 210, 210);
    padding-block: 40px;
    margin-top: 30px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border 0.3s ease;
}
.btn-offer-voyage {
    width: calc(100% - 10px);
    height: 200px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgb(240, 240, 240);
    padding-block: 40px;
    margin-top: 30px;
    background-color: rgb(244, 175, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border 0.3s ease;
}
.text-ass-6 {
    margin: auto;
    padding-left: 20px;
}
p {
    font-size: 15px;
}
.btn-offer:hover,
.btn-offer-large:hover {
    border: 1.5px solid #009f28;
    box-shadow: 1px 1px 5px grey;
}
.btn-offer-voyage:hover {
    border: 4.5px solid white;
    box-shadow: 1px 1px 5px grey;
}
@keyframes initial-state {
  from {
    border: .5px solid #e9e9e9;
    box-shadow: 1px 1px 5px rgb(210, 210, 210); 
}
  to {
    border: .5px solid #e9e9e9;
    box-shadow: 1px 1px 5px rgb(210, 210, 210); 
  }
}
@keyframes changeColor-2 {
  from {
    border: .5px solid #e9e9e9;
    box-shadow: 1px 1px 5px rgb(210, 210, 210); 
}
  to {
    border: 1.5px solid rgb(239, 120, 0);
    box-shadow: 1px 1px 5px grey;
    background-color: white; 
    color: rgb(239, 120, 0); 
    fill: rgb(239, 120, 0);
  }
}
.cas-spe {
    margin-top: -20px;
}
.titre-offer {
    font-weight: bold;
    font-size: 24px;
}
.svg-offer {
    text-align: center;
    margin: auto;
    fill: #009f28 !important;
    width: 100px !important; 
    height: 90px !important;
    padding-bottom: 20px;
    background-color: rgba(223, 255, 213, 0.598);
    border-radius: 30px 30px 0px 0px; 
    padding: 20px 20px 5px 20px;
    margin-bottom: 10px;
}
.svg-voyage {
    text-align: center;
    margin: auto;
    fill: #009f28 !important;
    width: 100px !important; 
    height: 90px !important;
    padding-bottom: 20px;
    background-color: rgba(255, 242, 213, 0.323);
    border-radius: 30px 30px 0px 0px; 
    padding: 20px 20px 5px 20px;
    margin-bottom: 10px;
}
#Offer-2{
    background-image: url('../../../public/inso-pics/offer_bg.svg');
    background-size: 100%;
    background-repeat: no-repeat;
  }
#Offer-2 img{
  width: 100px;
  object-fit: contain;
  padding: 10px;
  transition: all 3s;
}
@media screen and (max-width: 912px){
    #Offer{
        background-size: cover;
        background-position: bottom;
    }
}

</style>