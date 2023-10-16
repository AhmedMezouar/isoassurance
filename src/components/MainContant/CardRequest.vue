<template>
    <div class="w-full">
        <div class="w-full flex justify-end">
            <button class="m-3" @click="hideModal()">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="36.841" viewBox="0 0 39.297 36.841">
                    <path id="undo_FILL0_wght400_GRAD0_opsz48" d="M33.052,44.841H15.368V41.157H33.113a10.548,10.548,0,0,0,7.4-2.855,9.249,9.249,0,0,0,3.1-7.092,9.249,9.249,0,0,0-3.1-7.092,10.548,10.548,0,0,0-7.4-2.855H15l7,7-2.579,2.579L8,19.421,19.421,8,22,10.579l-7,7H33.052a14.2,14.2,0,0,1,10.039,3.93,12.749,12.749,0,0,1,4.206,9.7,12.749,12.749,0,0,1-4.206,9.7A14.2,14.2,0,0,1,33.052,44.841Z" transform="translate(-8 -8)" fill="#22c7e5"/>
                </svg>
            </button>
        </div>
        <h5 class="text-center mb-3 text-black text-lg font-semibold" style="color: var(--nav-bgc);">{{$store.getters.getT("Card Request")}}</h5>
        <small class="mb-4 text-red-500 text-center" :class="op==1?'opacity-100':'opacity-0'">{{$store.getters.getT("errorMsg")}}</small>
        <form >
            
        </form>
            <div class="my-4">
                <label for="name" class="text-gray-700">{{$store.getters.getT("FirstName")}}</label>
                <input required type="text" class="text-black block border w-full rounded-md p-2" name="name" ref="name" :placeholder="$store.getters.getT('FirstName')" id="name">
            </div>
            <div class="mb-4">
                <label for="surname" class="text-gray-700">{{$store.getters.getT("LastName")}}</label>
                <input required type="text" class="text-black block border w-full rounded-md p-2" :placeholder="$store.getters.getT('LastName')" ref="surname" name="surname" id="surname">
            </div>
            <div class="mb-4">
                <label for="phone_number" class="text-gray-700">{{$store.getters.getT("Phone")}}</label>
                <input required type="number" inputmode="numeric" pattern="[0-9]*" min="0" class="text-black block border w-full rounded-md p-2" :placeholder="$store.getters.getT('Phone')" ref="phone_number" name="phone_number" id="phone_number">
            </div>
            <div class="mb-4">
                <label for="cardType" class="text-gray-700">{{$store.getters.getT("Card Type")}}</label>
                <select name="cardType" id="cardType" ref="cardType" class="border w-full rounded-md p-2">
                    <option value="bronze">{{$store.getters.getT("Bronze")}}</option>
                    <option value="silver">{{$store.getters.getT("Silver")}}</option>
                    <option value="gold">{{$store.getters.getT("Golden")}}</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="card_id" class="text-gray-700">{{$store.getters.getT("Id Photo")}}</label>
                <div class="block border w-full rounded-md py-1 border-dashed relative">
                    <span class="absolute px-2 whitespace-nowrap overflow-hidden overflow-ellipsis w-full">{{$store.getters.getT(cardName)}}</span>
                    <input required type="file" @change="(chowIdName)" class="w-full opacity-0" name="card_id" ref="card_id" id="card_id" accept="image/*">
                </div>
            </div>
            <div class="my-4 w-full flex justify-center">
                <button @click="subForm()" type="submit" class="py-2 px-3 mx-auto text-white rounded-3xl uppercase" style="background-color: var(--nav-bgc);">{{$store.getters.getT("Send Request")}}</button>
            </div>
        
    </div>
</template>
<style>
    input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
<script>
    import RequestUser from "@/services/RequestUser"
    import { mapMutations} from 'vuex'
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';
    export default {
        data(){
            return{
                cardName:"click to upload a photo of your id",
                op:0
            }
        },
        methods: {
            chowIdName(e){
                this.cardName=e.target.files.item(0).name
            },
            hideModal(){
                this.SET_showModal(false)
            },
            ...mapMutations([
                'SET_showModal', 
            ]),
            subForm(){
                if (this.$refs.name.value==""||
                    this.$refs.surname.value==""||
                    this.$refs.phone_number.value==""||
                    this.$refs.card_id.files.length == 0
                ) {
                    this.op=1
                } else {
                    this.op=0
                    let msg = this.$store.getters.getT("Your request has been processed successfully")
                    RequestUser.requestCard({
                        "name":this.$refs.name.value,
                        "card_id":this.$refs.card_id.files.item(0),
                        "phone_number":this.$refs.phone_number.value,
                        "type":this.$refs.cardType.value,
                        "surname":this.$refs.surname.value
                    }).then(function(){
                        
                        document.getElementById('modalIso').style.display="none"
                        toast.success(msg, {
                        autoClose: 6000,
                        closeButton:true,
                        hideProgressBar:false,
                        position:toast.POSITION.TOP_CENTER,
                        theme:toast.THEME.COLORED
                        }); 
                    })
                    .catch(function(error){
                        console.log(error)
                    });
                }
                
            }
        }
    }
</script>