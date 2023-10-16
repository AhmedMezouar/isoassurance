import SpecialityService from "@/services/SpecialityService";

export const namespaced = true;

export const state = {
  specialities: [],
  specialitiesTotal: 0,
  speciality: {},
  specialityName:"",
};

export const mutations = {
  SET_SPECIALITIES(state, specialities) {
    state.specialities = specialities;
  },
  SET_SPECIALITIES_TOTAL(state, specialitiesTotal) {
    state.specialitiesTotal = specialitiesTotal;
  },
  SET_SPECIALITY(state, speciality) {
    state.speciality = speciality;
  },
  SET_SPECIALITY_NAME(state, specialityName) {
    state.specialityName = specialityName;
  },
};

export const actions = {
  fetchSpecialities(
    { commit } //  { perPage, page }
  ) {
    SpecialityService
      .getSpecialities
      ()
      .then((response) => {
        commit(
          "SET_SPECIALITIES_TOTAL",
          parseInt(response.headers["x-total-count"])
        );
        commit("SET_SPECIALITIES", response.data);
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
  fetchSpeciality({ commit, getters }, id) {
    var event = getters.getSpecialityById(id);

    if (event) {
      commit("SET_EVENT", event);
    } else {
      SpecialityService.getEvent(id)
        .then((response) => {
          commit("SET_SPECIALITY", response.data);
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    }
  },
  setSpecialityName({ commit }, name) {
    commit("SET_SPECIALITY_NAME", name);
  },
};
export const getters = {
  getSpecialityById: (state) => (id) => {
    return state.specialities.find((speciality) => speciality.id === id);
  },
};
