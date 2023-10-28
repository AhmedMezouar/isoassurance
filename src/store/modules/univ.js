import CatalogueService from "@/services/CatalogueService";

export const namespaced = true;

export const state = {
  universities: [],
  markers: [],
  universitiesTotal: 0,
  university: {},
  wilaya: "",
  country: "",
  name: "",
  lat: 0,
  long: 0,
  service: "university",
  url: "/api/university/filter",
  lastpage:1
};

export const mutations = {
  SET_UNIVERSITIES(state, universities) {
    state.universities = universities
  },
  SET_UNIVERSITIES_TOTAL(state, universitiesTotal) {
    state.universitiesTotal = universitiesTotal;
  },
  RESET_UNIVERSITIES(state, params) {
    const { name } = params;
    if (name === state.name) {
      state.universities = [];
    }
  },
  SET_NAME(state, params) {
    const { name } = params;
    state.name = name;
  },
  SET_UNIVERSITY(state, university) {
    state.university = university;
  },
  SET_COORDINATES(state, { lat, long }) {
    state.lat = lat;
    state.long = long;
  },
  SET_COUNTRY(state, country) {
    if (country !== state.country) {
      state.universities = [];
    }
    state.country = country;
  },
  SET_WILAYA(state, wilaya) {
    if (wilaya !== state.wilaya) {
      state.universities = [];
    }
    state.wilaya = wilaya;
  },
  SET_MARKERS(state, markers) {
    state.markers = markers;
  }
};

export const actions = {
  fetchUniversities({ commit, state }, params) {
    const { nextPage, ...data } = params;
    console.log("Params : ",params);
    console.log("Request fetching univs ...");
    CatalogueService.filterByParams(state.service, nextPage, data)
      .then((response) => {
        console.log("Api response ok , Total : ",response.data.total);
        commit(
          "SET_UNIVERSITIES_TOTAL",
          parseInt(response.headers["x-total-count"])
        );
        commit("SET_NAME", params);
        commit("RESET_UNIVERSITIES", params);
        commit("SET_UNIVERSITIES", response.data.data);
      })
      .catch((error) => {
        console.log("There was an error:");
        console.log(error);
      });
  },
  setCordinates({ commit }, lat, long) {
    commit("SET_CORDINATES", lat, long);
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
  getMarkers({ commit, state }) {
    const markers = [];
    if (state.universities.length !== 0) {
      state.universities.forEach((university, index) => {
        if (university.latitude) {
          markers[index] = {
            lat: parseFloat(university.latitude),
            lng: parseFloat(university.longitude),
            address: university.address,
            address_url: university.address_url,
            address_displayed: university.address_displayed
          };
        }
      });
    }
    commit("SET_MARKERS", markers);
  }
};
export const getters = {
  getLASTPAGE (state) {
    return state.lastpage
  }
};
