import CatalogueService from "@/services/CatalogueService";

export const namespaced = true;

export const state = {
  creches: [],
  markers: [],
  crechesTotal: 0,
  creche: {},
  wilaya: "",
  country: "",
  name: "",
  lat: 0,
  long: 0,
  url: "/api/crib/filter",
};

export const mutations = {
  SET_CRECHES(state, creches) {
    state.creches = creches;
  },
  SET_CRECHES_TOTAL(state, crechesTotal) {
    state.crechesTotal = crechesTotal;
  },
  RESET_CRECHES(state, params) {
    const { name } = params;
    if (name === state.name) state.creches = [];
  },
  SET_NAME(state, params) {
    const { name } = params;
    state.name = name;
  },
  SET_CRECHE(state, creche) {
    state.creche = creche;
  },
  SET_COORDINATES(state, { lat, long }) {
    state.lat = lat;
    state.long = long;
  },
  SET_COUNTRY(state, country) {
    if (country !== state.country) {
      state.creches = [];
    }
    state.country = country;
  },
  SET_WILAYA(state, wilaya) {
    if (wilaya !== state.wilaya) {
      state.creches = [];
    }
    state.wilaya = wilaya;
  },
  SET_MARKERS(state, markers) {
    state.markers = markers;
  },
};

export const actions = {
  fetchCreches({ commit }, params) {
    const { nextPage, ...data } = params;

    CatalogueService.getAll(state.url, nextPage, data)
      .then((response) => {
        commit("SET_CRECHES_TOTAL",
          parseInt(response.data.total)
        );
        commit("SET_NAME", params);
        commit("RESET_CRECHES", params);
        commit("SET_CRECHES", response.data.data);
      })
      .catch((error) => {
        console.log("There was an error:");
        console.log(error);
      });
  },
  setCoordinates({ commit },  lat, long = 0 ) {
    commit("SET_COORDINATES", { lat, long });
  },
  setWilaya({ commit }, wilaya) {
    commit("SET_WILAYA", wilaya);
  },
  setCountry({ commit }, country) {
    commit("SET_COUNTRY", country);
  },
  setMarkers({ commit }, markers) {
    commit("SET_MARKERS", markers);
  },
  getMarkers({ commit }) {
    const markers = [];
    if (state.creches.length !== 0) {
      state.creches.forEach((creche, index) => {
        if (creche.latitude) {
          markers[index] = {
            lat: parseFloat(creche.latitude),
            lng: parseFloat(creche.longitude),
            address: creche.address,
            address_url: creche.address_url,
            address_displayed: creche.address_displayed,
          };
        }
      });
      commit("SET_MARKERS", markers);
    } else {
      commit("SET_MARKERS", markers);
    }
  },
};
export const getters = {};
