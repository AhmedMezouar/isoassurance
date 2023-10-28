import { createStore } from "vuex";
import * as catalogue from "@/store/modules/catalogue";
import * as speciality from "@/store/modules/speciality";
import * as carousel from "@/store/modules/carousel";
import * as country from "@/store/modules/country";
import * as modal from "@/store/modules/modal";
import * as usercard from "@/store/modules/usercard";
import * as map from "@/store/modules/map";
import * as lang from "@/store/modules/lang";
import * as univ from "@/store/modules/univ"
import * as hotel from "@/store/modules/hotel"
import * as agency from "@/store/modules/agency"
import * as cresh from "@/store/modules/cresh"


// Create a new store instance.
const store = createStore({
  modules: {
    catalogue,
    speciality,
    carousel,
    country,
    modal,
    usercard,
    map,
    lang,
    univ,
    agency,
    cresh,
    hotel
  },
  state: {},
});

export default store;