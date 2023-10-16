<template>
    <nav class="flex justify-center w-full flex-col lg:flex-row bg-white">
        <div class="navh flex justify-between widthMain-1 capitalize xl:text-base 2xl:text-2xl lg:text-sm text-xs items-center"
            style="font-size: 13px;">
            <div class="h-full flex items-center lg:w-fit w-full " :class="search ? '' : 'logocont'">
                <div class="inline lg:hidden mx-2">
                    <svg @click="sideBar = !sideBar" xmlns="http://www.w3.org/2000/svg" width="20" height="10"
                        viewBox="0 0 20 10">
                        <g id="Groupe_3226" data-name="Groupe 3226" transform="translate(-38 -16)">
                            <rect id="Rectangle_1101" data-name="Rectangle 1101" width="20" height="2" rx="1"
                                transform="translate(38 16)" fill="#0e0e0e" />
                            <rect id="Rectangle_1102" data-name="Rectangle 1102" width="20" height="2" rx="1"
                                transform="translate(38 20)" fill="#0e0e0e" />
                            <rect id="Rectangle_1103" data-name="Rectangle 1103" width="20" height="2" rx="1"
                                transform="translate(38 24)" fill="#0e0e0e" />
                        </g>
                    </svg>
                </div>
                <MyHeaderLogo></MyHeaderLogo>
            </div>
            <ul class="flex justify-between widthMain-1 items-center links">
                <li class="lg:inline hidden">
                    <router-link to="/">{{ $store.getters.getT("home") }}</router-link>
                </li>
                <li class=" lg:inline hidden">
                    <router-link to="/hospitals">{{ $store.getters.getT("hospitals") }}</router-link>
                </li>
                <li class=" lg:inline hidden">
                    <router-link to="/agency">{{ $store.getters.getT("agency") }}</router-link>
                </li>
                <li class=" lg:inline hidden">
                    <router-link to="/univ">{{ $store.getters.getT("university") }}</router-link>
                </li>
                <li class=" lg:inline hidden">
                    <router-link to="/creche">{{ $store.getters.getT("creche") }}</router-link>
                </li>
                <li class=" lg:inline hidden">
                    <router-link to="/hotel">{{ $store.getters.getT("hotel") }}</router-link>
                </li>
                <!-- Search -->
                <!-- End Search Section-->
            </ul>
            <div class="h-full flex" style="align-items: center;">
                <MyHeaderRightPart></MyHeaderRightPart>
            </div>

        </div>
        <ul v-if="sideBar"
            class="block w-2/3 mx-2 capitalize xl:text-base 2xl:text-2xl lg:text-sm text-xs py-2 bg-white px-4">
            <li class="py-3">
                <router-link to="/">{{ $store.getters.getT("home") }}</router-link>
            </li>
            <li class="py-3">
                <router-link to="/hospitals">{{ $store.getters.getT("hospitals") }}</router-link>
            </li>
            <li class="py-3">
                <router-link to="/creche">{{ $store.getters.getT("creche") }}</router-link>
            </li>
            <li class="py-3">
                <router-link to="/agency">{{ $store.getters.getT("agency") }}</router-link>
            </li>
            <li class="py-3">
                <router-link to="/univ">{{ $store.getters.getT("university") }}</router-link>
            </li>
            <li class="py-3">
                <router-link to="/hotel">{{ $store.getters.getT("hotel") }}</router-link>
            </li>
            <li class="py-3">
                <span class="cursor-pointer" @click="showInsoModal()">Search for clients</span>
            </li>
            <ul class="p-3 flex w-full justify-between" style="border-top: 1px solid rgb(0 0 0/.15);">
                <li class="flex items-center cursor-pointer" @click="changeLang('en')">
                    <span>{{ $store.getters.getT("English") }}</span>
                </li>
                |
                <li class="flex items-center cursor-pointer" @click="changeLang('fr')">
                    <span>{{ $store.getters.getT("Français") }}</span>
                </li>
            </ul>
        </ul>
    </nav>
</template>
<style scoped>
.links {
    max-width: 50%;
    margin-bottom: 0px !important;
}

.searchBar>input {
    background-color: transparent;
}

.searchBar {
    width: 0px;
    opacity: 0;
    transition: all 1s;
}

.searchBar input::placeholder {
    font-size: 12px;
}

.searchBarShow {
    width: 240px;
    opacity: 1;
}

input:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
}
</style>
<script>
import MyHeaderLogo from './MyHeaderLogo.vue';
import MyHeaderRightPart from './MyHeaderRightPart.vue';
import { fetchHospitalsByParams } from "../../composable/index";

export default {
    components: {
        MyHeaderLogo, MyHeaderRightPart
    },
    data() {
        return {
            sideBar: false,
            search: false,
            focust: false
        }
    },
    methods: {
        showInsoModal() {
            this.$store.commit('SET_typeModal', { 'index': 0, 'typeModal': 'user' })
        },
        handleInput(e) {
            let speciaName = e.target.value;
            fetchHospitalsByParams(this.$store, this.nextPage, speciaName);
        },
        showSearch() {
            this.search = true
        },
        hideSearch() {
            !this.focust ? this.search = false : this.search
        },
        fct() {
            this.showSearch()
            this.focust = true
        },
        changeLang(lang) {
            console.log('changed')
            this.$store.commit("SET_lang", lang);
        },
        close() {
            this.$refs.searchtxt.value = null;
            this.focust = false;
            this.hideSearch()
        }
    }
}
</script>