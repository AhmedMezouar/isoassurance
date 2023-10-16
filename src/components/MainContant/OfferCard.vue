<template>
    <div class="btn-offer" :class="hover?'DetailsCont':''" @click="goto" @mouseover="showDetails()" @mouseleave="hideDetails()">
        
        <div class="detailsImg">
            <img :src="'/inso-pics/'+ icon" alt="">
            <div class="title">
              {{$store.getters.getT(title)}}
            </div>
            <button class="viewMore">
                {{$store.getters.getT("seemore")}}
            </button>
        </div>
        <div class="details">
            <div class="detailsholder">
                <div class="title">
                    {{$store.getters.getT(title)}}
                </div>
                <div class="detailTxtCont">
                    <div style="height: fit-content;">
                        <p class="detailTxt line-clamp">
                            {{$store.getters.getT(detail)}}
                        </p>
                    </div>
                </div>
                <button class="viewMore">
                    {{$store.getters.getT("seemore")}}
                </button>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default{
        props: ['title','link','icon','detail'],
        data(){
            return{
                hover:false,
            }
        },
        methods:{
            showDetails(){
              this.hover=true
            },
            hideDetails(){
              this.hover=false
            },
            goto(){
                if (this.title === 'journey') {
                    window.open("https://www.instagram.com/travel_iso/", "_blank");
                } else {
                    /*this.$router.push({
                        name:this.link
                    });*/
                    let route = this.$router.resolve({ name: this.link });
                    window.open(route.href);
                }
                
            }
        }
    }
</script>
<style scoped>
#Offer *{
    transition: all .5s !important;
}
.viewMore{
    font-size: x-small;
    white-space: nowrap;
    background:transparent;
    color:white;
    border:1px solid;
    border-radius:20px;
    padding:4px;padding-inline:16px;font-size:12px;
}
.detailTxt{
    font-size: 9px;
}
.details{
    width: 0px;
    overflow: hidden;
    /*flex-grow: 1;*/
    
}
.title{
    font-weight: 600;
}
.detailsImg .title,.detailsImg .viewMore{
    opacity: 1;
    transition-delay: 1.5s;

}
.detailsImg .title{
    font-size: 13px;
    margin-block: 10px;
    text-transform: capitalize;
    height: 19px;
}
.detailsImg .viewMore{
    font-size: 13px;
    height: 26.1px;
}
.detailsholder{
    width: 100px;
}
#Offer img{
  width: 60px;
  object-fit: contain;
  padding: 5px;
  transition: all .05s;
  margin-inline: auto;
  aspect-ratio: 1/1;
}
.detailsImg{
    justify-content: center;
    margin-inline: auto;
    transition: all .01s;
    width: 80px;
    flex-shrink: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
.detailsCard{
    cursor: pointer;
    width: calc(16% - 20px) !important; /* width before */ 
}
@media screen and (min-width: 770px) {
    #Offer .DetailsCont img{
    width:80px;
    }
    .detailsCard.DetailsCont{
        width:25% !important; /* width after */
        margin-left: 10px; 
        margin-right: 10px;
    }
    .DetailsCont .details{
        width: 100px;
    }
    .DetailsCont .detailsImg .title,.DetailsCont .detailsImg .viewMore{
        transition-delay: 0ms;
        opacity: 0;
        height: 0px;
    }
}
@media screen and (max-width: 770px) {
    .details{
        display: none;
    }
    #Offer img{
        width: 40px;
    }
    .detailsImg .title{
        font-size: 12px;
        margin-block: 4px;
        height: fit-content;
    }
    .detailsImg .viewMore{
        padding: 2px 10px;
        height: fit-content;
        font-size: 8px;
    }
    .detailsCard{
        padding-block: 10px !important;
    }
}
@media only screen and (max-width: 1100px) and (min-width: 912px) {
    #Offer {
      width: var(--inso-w);
      min-height: 450px;
      border-radius: 20px;
      display: flex;
      margin-inline: auto;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 10px;
      text-align: center;
      background-repeat: no-repeat;
      padding-inline: 8%;
      padding-block: 60px;
      background-position: bottom;
      background-position: 100% 100%;
  }
  .ffertitle{
    margin-block-end: 4px;
  }
  .offercontext{
    margin-block: 0px;
  }
  .detailsCard{
    width: calc(20% - 20px);
    padding-block: 10px !important;
  }
  .viewMore{
    font-size: 8px;
    padding-inline: 10px;
  }
  .detailTxt{
    font-size: 8px;
  }
  .detailsImg{
    width:60px;
  }
}
</style>