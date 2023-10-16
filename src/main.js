import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import Admin from "../src/layouts/Admin.vue";
import MaintenanceComponent from "../src/components/MaintenanceComponent.vue";
import LandingPage from "../src/components/LandingPage";
import IsoHospitals from "../src/components/IsoHospital";
import IsoCreche from "../src/components/IsoCresh"
import IsoVoyage from "../src/components/IsoVoyage"
import IsoAgency from "../src/components/IsoAgency.vue"
import IsoVoyageDetail from "../src/components/IsoVoyageDetail.vue"
import IsoVoyageTurkey from "../src/components/IsoVoyageTurkey.vue"
import IsoVoyageJordan from "../src/components/IsoVoyageJordan.vue"
import IsoVoyageMalysia from "../src/components/IsoVoyageMalysia.vue"
import IsoVoyageTunisie from "../src/components/IsoVoyageTunisie.vue"
import IsoVoyageEgypte from "../src/components/IsoVoyageEgypte.vue"
import IsoVoyageImage from "../src/components/IsoVoyageImage.vue"
import IsoUniv from "../src/components/IsoUniversity.vue"
import IsoHotel from "../src/components/IsoHotelCard.vue"
import ReservationComponent from '../src/components/newinterface/ReservationComponent.vue'
import ConfirmationComponent from '../src/components/newinterface/ConfirmationComponent.vue'
import ChoixComponent from '../src/components/newinterface/ChoixComponent.vue'
import AmbulanceComponent from '../src/components/newinterface/AmbulanceComponent.vue'
import CliniqueindexComponent from '../src/components/newinterface/CliniqueindexComponent.vue' 
import OfferindexComponent from '../src/components/newinterface/OfferindexComponent.vue' 
import AnalyseComponent from '../src/components/newinterface/AnalyseComponent.vue'
import CliniqueComponent from '../src/components/newinterface/CliniqueComponent.vue'
import NewOffer from '../src/components/MainContant/NewOffer.vue'
import App from './App.vue'
import './index.css'
import './assets/inso.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';


import store from './store/store'
import {createPinia} from 'pinia';
import {
  getDoctorRouter,
} from "./router";
import VueSweetalert2 from "vue-sweetalert2";

// routes

const routes = [
  {
    path: "",
    component: LandingPage,
    name:'LandingPage'
  },
  {
    path: "/voyageImage",
    component: IsoVoyageImage,
    name:'IsoVoyageImage'
  },
  {
    path: "/voyageDetail",
    component: IsoVoyageDetail,
  },
  {
    path: "/voyageTurkey",
    component: IsoVoyageTurkey,
  },
  {
    path: "/voyageTunisie",
    component: IsoVoyageTunisie,
  },
  {
    path: "/voyageMalysia",
    component: IsoVoyageMalysia,
  },
  {
    path: "/voyageJordan",
    component: IsoVoyageJordan,
  },
  {
    path: "/voyageEgypte",
    component: IsoVoyageEgypte,
  },
  {
    path: "/voyage",
    component: IsoVoyage,
    name:'IsoVoyage'
  },
  {
    path: "/offer2",
    component: NewOffer,
    name:'NewOffer'
  },
  {
    path: "/hospitals",
    component: IsoHospitals,
    name:'IsoHospitals'
  },
  {
    path: "/agency",
    component: IsoAgency,
    name:'agency'
  },
  {
    path: "/creche",
    component: IsoCreche,
    name:'creche'
  },
  {
    path: "/univ",
    component: IsoUniv,
    name:'univ'
  },
  {
    path: "/hotel",
    component: IsoHotel,
    name:'hotel'
  },
  {
    path: "/reserve",
    component: ReservationComponent,
    name:'reserve'
  },
  {
    path: "/confirme",
    component: ConfirmationComponent,
    name:'confirme'
  },
  {
    path: "/choix",
    component: ChoixComponent,
    name:'choix'
  },
  {
    path: "/ambulance",
    component: AmbulanceComponent,
    name:'ambulance'
  },
  {
    path: "/analyse",
    component: AnalyseComponent,
    name:'analyse'
  },
  {
    path: "/clinique-2",
    component: CliniqueindexComponent,
    name:'clinique-2'
  },
  {
    path: "/offer-index",
    component: OfferindexComponent,
    name:'offer-index'
  },
  {
    path: "/clinique",
    component: CliniqueComponent,
    name:'clinique'
  },
  {
    path: "/visite",
    component: Admin,
    children: [...getDoctorRouter()],
  },
  {
    path: "/maintenance",
    component: MaintenanceComponent,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});





const app = createApp(App);
app.use(router);
app.use(createPinia())
app.use(store);
app.use(VueSweetalert2);
app.use(bootstrap);
app.mount("#app");