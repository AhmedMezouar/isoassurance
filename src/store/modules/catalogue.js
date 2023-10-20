import CatalogueService from "@/services/CatalogueService";

export const namespaced = true;

export const state = {
  hospitals: [],
  markers: [],
  hospitalsTotal: 0,
  hospital: {},
  wilaya: "",
  country: "",
  name:"",
  lat: 0,
  long: 0,
  url:"/api/catalogue/filter",
  service:"hospital",
  lastpage:1
};

export const mutations = {
  SET_HOSPITALS(state, hospitals) {
    state.hospitals.push(...hospitals);
  },
  SET_HOSPITALS_TOTAL(state, hospitalsTotal) {
    state.hospitalsTotal = hospitalsTotal;
  },
  RESSET_HOSPITALS(state, params) {
    const { name } = params;
    if (name == state.name) state.hospitals = [];
  },
  SET_NAME(state, params) {
    const { name } = params;
    state.name = name;
  },
  SET_LASTPAGE(state, params) {
    const { name } = params;
    state.name = name;
  },
  SET_HOSPITAL(state, hospital) {
    state.hospital = hospital;
  },
  SET_CORDINATES(state, lat, longgg=0) {
    state.lat = lat;
    state.long = longgg;
  },
  SET_COUNTRY(state, country) {
    if (country != state.country) {
      state.hospitals = [];
    }
    state.country = country;
  },
  SET_WILAYA(state, wilaya) {
    if (wilaya != state.wilaya) {
      state.hospitals = [];
    }
    state.wilaya = wilaya;
  },
  SET_MARKERS(state, markers) {
    state.markers = markers;
  },
};

export const actions = {
  fetchHospitals({ commit }, params) {
    const { nextPage, ...data } = params;
    CatalogueService.filterByParams(state.service, nextPage, data)
      .then((response) => {
        commit("SET_LASTPAGE", parseInt(response.data.last_page));
        commit(
          "SET_HOSPITALS_TOTAL",
          parseInt(response.headers["x-total-count"])
        );
        commit("SET_NAME", params);
        commit("RESSET_HOSPITALS", params);
        commit("SET_HOSPITALS", response.data.data);
      })
      .catch((error) => {
        console.log("There was an error:");
        console.log(error);
      });
  },
  setCordinates({ commit }, lat, longgg=0) {
    commit("SET_CORDINATES", lat, longgg);
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
    if (state.hospitals.length != 0) {
      state.hospitals.forEach((hospital, index) => {
        if (hospital.latitude) {
          markers[index] = {
            lat: parseFloat(hospital.latitude),
            lng: parseFloat(hospital.longitude),
            address: hospital.address,
            address_url: hospital.address_url,
            address_displayed: hospital.address_displayed,
            conv:hospital.convention,
          };
        }
      });
      commit("SET_MARKERS", markers);
    } else {
      commit("SET_MARKERS", markers);
    }
  },
};
export const getters = {
  getLASTPAGE (state) {
    return state.lastpage
  }
};
