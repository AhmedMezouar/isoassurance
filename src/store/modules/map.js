export const namespaced = true;

export const state = {
  lat: 0,
  long: 0,
};

export const mutations = {
  SET_LAT(state, lat) {
    state.lat = lat;
  },
  SET_LONG(state, long) {
    state.long = long;
  },
};

export const actions = {
  setLocation({ commit }, data) {
    const {lat,long}=data
    commit("SET_LAT", lat);
    commit("SET_LONG", long);
  },
};

export const getters = {};
