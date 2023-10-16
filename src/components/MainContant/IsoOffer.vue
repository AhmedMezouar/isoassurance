<template>
    <div id="Offer" class="widthMain">
      <div style="flex-basis: 100%;">
        <h3 class="ffertitle" style="text-transform: capitalize;font-weight: 600;">
            {{$store.getters.getT("Our Offers")}}
        </h3> 
        <p class="offercontext">
          {{ $store.getters.getT("En collaboration avec des partenaires de renommée, nous proposonsaux membres ISO Assurance des offres optimales et des services d’intermédiation d’exception dans le domaine des assurances. Les secteurs d’activité couverts sont : la santé, les voyages, l’université, les crèches et tout type d’assurance «biens et personnes».") }}
        </p>
      </div>
      <div class="flex w-full">
        <div class="flex overflow-auto lg:justify-around" style="width: 100%;">
           
            <OfferCard 
                :title="'journey'" 
                detail="Le membre ISO Assurance bénéficie de plusieurs avantages (confort et remises sur les tarifs) sur les services offerts par nos agences de voyage conventionnées."
                icon="bagage.svg" 
                :link="'LandingPage'">
            </OfferCard> 

            <OfferCard
            
             title="agencies" icon="handshake.svg" :link="'agency'"
             detail="Le membre ISO Assurance bénéficie de plusieurs avantages (confort et remises sur les tarifs) sur les services offerts par nos universités conventionnées."></OfferCard>

            <OfferCard  
            detail="Le membre ISO Assurance bénéficie de plusieurs avantages (confort et remises sur les tarifs) sur les services offerts par nos universités conventionnées."
            title="clinics" :icon="'cliniques.svg'" :link="'IsoHospitals'"></OfferCard>

            <OfferCard 
            detail="Le membre ISO Assurance bénéficie de plusieurs avantages (confort et remises sur les tarifs) sur les services offerts par nos universités conventionnées."
            title="university" :icon="'graduate.svg'" :link="'univ'"></OfferCard>

            <OfferCard 
            detail="Le membre ISO Assurance bénéficie de plusieurs avantages (confort et remises sur les tarifs) sur les services offerts par nos universités conventionnées."
            title="kindergarten" icon="baby_bed.svg" :link="'creche'"></OfferCard>

            <OfferCard 
            detail="Le membre ISO Assurance bénéficie de plusieurs avantages (confort et remises sur les tarifs) sur les services offerts par nos universités conventionnées."
            title="hotel" icon="hotel-svgrepo-com.svg" :link="'hotel'"></OfferCard>
            
        </div>
      </div>
      
    </div>
</template>
<script>
    import OfferCard from './OfferCard.vue'
    export default{
        components:{
            OfferCard
        },
        data(){
            return{
                hover:false,
            }
        },
        methods:{
            goVoyage(){
            this.$router.push('/LandingPage') 
            },
            goAssurance(){
            this.$router.push('/agency') 
            },
            gohospitals(){
            this.$router.push('/hospitals') 
            },
            goUniversity(){
            this.$router.push('/univ') 
            },
            goCreche(){
            this.$router.push('/creche') 
            },
            goHotel(){
            this.$router.push('/hotel') 
            },
            showDetails(){
              this.hover=true
            },
            hideDetails(){
              this.hover=false
            },
        }
    }
</script>
<style scoped>
#Offer{
    background-size: 100% 100%;
  }
.detailTxt{
    font-size: 9px;
}
.details{
    transition-delay: 1.5s;
    transition: all 1s;
    margin-left: 200%;
    min-width:100px;
    
}
.title{
    font-weight: 600;
}
.detailsImg .title,.detailsImg .viewMore{
    opacity: 1;
    transition: all 1s;
}
.detailsCard{
    display: flex;
    width: calc(18% - 20px);
    background-image: linear-gradient(225deg, #2000FF 0%, #00FFB9bf 95%);
    display: flex;
    color: white;
    border-radius: 30px;
    padding: 10px;
    height: fit-content;
    transition: all 1s;
    flex-wrap: nowrap;
    overflow: hidden;
    padding-block: 20px;
}
#Offer img{
  width: 100px;
  object-fit: contain;
  padding: 10px;
  transition: all 3s;
}
.detailsCard.DetailsCont{
    width:25%;
}
.DetailsCont .details{
    margin-left: 0px;
}
.detailsImg .title,.detailsImg .viewMore{
    transition: none;
}
.DetailsCont .detailsImg .title,.DetailsCont .detailsImg .viewMore{
    opacity: 0;
}
.detailsImg{
    flex-grow: 1;
    transition: all 1s;
    width: 100%;
}
.detailsCard:hover .detailsImg {
    width: 50%;
}
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

@media screen and (max-width: 912px){
    #Offer{
        background-size: cover;
        background-position: bottom;
    }
}

</style>