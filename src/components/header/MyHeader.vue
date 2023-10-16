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
            <ul class="flex justify-between widthMain-1 items-center links" style="max-width: 40%;">
                <li class="lg:inline hidden">
                    <router-link to="/">{{ $store.getters.getT("home") }}</router-link>

                </li>
                <li class=" lg:inline hidden">
                    <a href="#specHos">{{ $store.getters.getT("Specialities") }}</a>
                </li>
                <li class=" lg:inline hidden">
                    <a href="#HomeContainer">{{ $store.getters.getT("about") }}</a>
                </li>

                <li class=" lg:inline hidden">
                    <a href="#contactusss">{{ $store.getters.getT("contact") }}</a>
                </li>
                <!-- Search -->
                <!-- End Search Section-->
            </ul>
            <div class="h-full flex" style="align-items: center;">
                <div class="relative searchBox mr-3 ml-3" @mouseover="showSearch()" @mouseleave="hideSearch()">
                    <div class="searchBar" :class="search ? 'searchBarShow' : ''">
                        <input ref="searchtxt" type="text" name="search" id="search"
                            placeholder="Search by speciality name..." @keyup.stop="handleInput($event); gotores($event)"
                            @click="fct()" style="opacity: 0.77;height: 100%;"
                            class="rounded-full w-full py-0 px-4 placeholder:text-slate-400 text-sm 2xl:text-xl" />
                    </div>
                    <div class="searchBnt" @click="close()">
                        <svg v-if="!search" class="h-6 w-6" fill="#0000008c" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span v-else class="material-symbols-outlined">
                            <img src="/inso-pics/cancel_FILL-1.svg" alt="">
                        </span>
                    </div>
                </div>
                <MyHeaderRightPart></MyHeaderRightPart>
            </div>

        </div>
        <ul v-if="sideBar"
            class="lg:hidden block mx-2 capitalize xl:text-base 2xl:text-2xl lg:text-sm text-xs py-2 bg-white px-4">
            <li class="py-3">
                <a href="#home">home</a>
            </li>
            <li class="py-3">
                <a href="#about">about</a>
            </li>
            <li class="py-3">
                <a href="#hospital">hospitals</a>
            </li>

            <li class="py-3">
                <a href="#our-clients">our clients</a>
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
                <!-- |
                <li class="flex items-center cursor-pointer" @click="changeLang('ar')">
                    <span>{{ $store.getters.getT("العربية") }}</span>
                </li>
                |
                <li class="flex items-center cursor-pointer" @click="changeLang('tu')">
                    <span>{{ $store.getters.getT("Türkçe") }}</span>
                </li> -->
            </ul>
        </ul>
    </nav>
</template>
<style scoped>
.links {
    max-width: 40%;
    margin-bottom: 0px !important;
}
</style>
<style>
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
            this.$router.push('/visite/login')
        },
        handleInput(e) {
            let speciaName = e.target.value;
            fetchHospitalsByParams(this.$store, this.nextPage, speciaName);
        },
        gotores(e) {
            if (e.keyCode == 13) {
                document.getElementById('lisstV').click()
                document.getElementById('mylist').scrollIntoView({ behavior: "smooth" });
            }
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
        close() {
            this.$refs.searchtxt.value = null;
            this.focust = false;
            this.hideSearch()
        },
        changeLang(lang) {
            console.log('changed')
            this.$store.commit("SET_lang", lang);
        },
    }
}
</script>