<template>
    <div id="modalIso" class="h-screen w-screen justify-center items-center z-50 top-0 hidden fixed" style="background-color:rgba(0 0 0/.5)">
        <div id="userModal" class="w-full lg:w-1/3 p-4 rounded-3xl hidden flex-col items-center bg-white" style="border-radius: 70px;">
            <SearchUser></SearchUser>
        </div>
        <div id="hospModal" class="w-full lg:w-1/3 p-4 text-slate-400 rounded-3xl flex flex-col items-center bg-white" style="border-radius: 70px;">
            <HospModal></HospModal>
        </div>
        <div id="cardModal" class="w-full lg:w-1/3 p-4 text-slate-400 rounded-3xl flex flex-col items-center bg-white" style="border-radius: 70px;">
            <CardRequest></CardRequest>
        </div>
        <div id="partnerModal" class="w-full lg:w-2/3 p-4 text-slate-400 rounded-3xl flex flex-col items-center bg-white" style="border-radius: 70px;">
            <CardPartnerRequest></CardPartnerRequest>
        </div>
    </div>
</template>
<script>
import CardPartnerRequest from './CardPartnerRequest.vue';
import CardRequest from './CardRequest.vue';
import HospModal from './HospModal.vue';
import SearchUser from './SearchUser.vue';
export default{
    components: {
    SearchUser,
    HospModal,
    CardRequest,
    CardPartnerRequest
},
}

</script>