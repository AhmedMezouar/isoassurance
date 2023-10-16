<template>
    <div class="w-full mycard">
        <div class="w-full flex justify-content-between items-center">
            <h5 class="text-center mb-3 text-black text-lg font-semibold w-full" style="color: var(--nav-bgc);">{{$store.getters.getT("Be Partner")}}</h5>
            <button class="m-3" @click="hideModal()">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="36.841" viewBox="0 0 39.297 36.841">
                    <path id="undo_FILL0_wght400_GRAD0_opsz48" d="M33.052,44.841H15.368V41.157H33.113a10.548,10.548,0,0,0,7.4-2.855,9.249,9.249,0,0,0,3.1-7.092,9.249,9.249,0,0,0-3.1-7.092,10.548,10.548,0,0,0-7.4-2.855H15l7,7-2.579,2.579L8,19.421,19.421,8,22,10.579l-7,7H33.052a14.2,14.2,0,0,1,10.039,3.93,12.749,12.749,0,0,1,4.206,9.7,12.749,12.749,0,0,1-4.206,9.7A14.2,14.2,0,0,1,33.052,44.841Z" transform="translate(-8 -8)" fill="#22c7e5"/>
                </svg>
            </button>
        </div>
        
        <small class="mb-4 text-red-500 text-center w-full" :class="op==1?'opacity-100':'opacity-0'">{{$store.getters.getT("errorMsg")}}</small>
        <form >
            
        </form>
            <div class="mb-4 partfield">
                <label for="name" class="text-gray-700">{{$store.getters.getT("FirstName")}}</label>
                <input required type="text" class="text-black block border w-full rounded-md p-2" name="name" ref="name" :placeholder="$store.getters.getT('FirstName')" id="name">
            </div>
            <div class="mb-4 partfield">
                <label for="surname" class="text-gray-700">{{$store.getters.getT("LastName")}}</label>
                <input required type="text" class="text-black block border w-full rounded-md p-2" :placeholder="$store.getters.getT('LastName')" ref="surname" name="surname" id="surname">
            </div>
            <div class="mb-4 partfield">
                <label for="address" class="text-gray-700">{{$store.getters.getT("address")}}</label>
                <input required type="text" class="text-black block border w-full rounded-md p-2" :placeholder="$store.getters.getT('address')" ref="address" name="address" id="address">
            </div>
            <div class="mb-4 partfield">
                <label for="email" class="text-gray-700">{{$store.getters.getT("email")}}</label>
                <input value=" " type="text" class="text-black block border w-full rounded-md p-2" :placeholder="$store.getters.getT('email')" ref="email" name="email" id="email">
            </div>
            <div class="mb-4 partfield">
                <label for="phone_number" class="text-gray-700">{{$store.getters.getT("Phone Number")}}</label>
                <input required type="number" inputmode="numeric" pattern="[0-9]*" min="0" class="text-black block border w-full rounded-md p-2" :placeholder="$store.getters.getT('Phone')" ref="phone_number" name="phone_number" id="phone_number">
            </div>
            <div class="mb-4 partfield">
                <label for="domaine" class="text-gray-700">{{$store.getters.getT("Type")}}</label>
                <select name="domaine" id="domaine" ref="domaine" class="border w-full rounded-md p-2">
                    <option value="university">{{$store.getters.getT("University")}}</option>
                    <option value="agency">{{$store.getters.getT("Agency")}}</option>
                    <option value="hospital">{{$store.getters.getT("Hospital")}}</option>
                    <option value="creche">{{$store.getters.getT("kindergarten")}}</option>
                    <option value="autres">{{$store.getters.getT("Other")}}</option>
                </select>
            </div>
            <div class="mb-4 w-full">
                <label for="address" class="text-gray-700">{{$store.getters.getT("your message")}}</label>
                <textarea name="message" ref="message" id="message" cols="30" rows="3" class="border w-full" value=" "></textarea>
            </div>
            <div class="my-4 w-full flex justify-center">
                <button @click="subForm()" type="submit" class="py-2 px-3 mx-auto text-white rounded-3xl uppercase" style="background-color: var(--nav-bgc);">{{$store.getters.getT("Send Request")}}</button>
            </div>
        
    </div>
</template>
<style>
    .mycard{
        max-height: calc(100vh - 100px) !important;
        display: flex !important;
        flex-wrap: wrap !important;
        justify-content: space-between !important;
    }
    .partfield{
        width: calc(50% - 10px) !important;
    }
    input {
        width: 100% !important;
    }
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
                    this.$refs.address.value==""
                ) {
                    this.op=1
                } else {
                    this.op=0
                    let msg = this.$store.getters.getT("Your request has been processed successfully")
                    RequestUser.requestPartner({
                        "name":this.$refs.name.value,
                        "phone_number":this.$refs.phone_number.value,
                        "domaine":this.$refs.domaine.value,
                        "surname":this.$refs.surname.value,
                        "email":this.$refs.email.value,
                        "message":this.$refs.message.value,
                        "address":this.$refs.address.value,
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
                        toast.error(error.response.data.message, {
                        autoClose: 6000,
                        closeButton:true,
                        hideProgressBar:false,
                        position:toast.POSITION.TOP_CENTER,
                        theme:toast.THEME.COLORED
                        }); 
                        console.log(error)
                    });
                }
                
            }
        }
    }
</script>