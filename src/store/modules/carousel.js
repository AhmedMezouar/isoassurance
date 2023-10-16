import CarouselService from "@/services/CarouselService";

export const namespaced = true;

export const state = {
  carousels: [],
  carouselsTotal: 0,
  carousel:{}
};

export const mutations = {
  SET_CAROUSELS(state, carousels) {
    state.carousels = carousels;
  },
  SET_CAROUSELS_TOTAL(state, carouselsTotal) {
    state.carouselsTotal = carouselsTotal;
  },
  SET_CAROUSEL(state, carousel) {
    state.carousel = carousel;
  },
};

export const actions = {
  fetchCarousels({ commit }) //  { perPage, page }
  {
    CarouselService
      .getCarousels
      // perPage, page
      ()
      .then((response) => {
        commit(
          "SET_CAROUSELS_TOTAL",
          parseInt(response.headers["x-total-count"])
        );
        commit("SET_CAROUSELS", response.data);
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },

};

export const getters = {
  getCarouselById: (state) => (id) => {
    return state.carousels.find((carousel) => carousel.id === id);
  },
};
