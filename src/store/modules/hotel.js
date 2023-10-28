import HotelService from "@/services/HotelService";

export const namespaced = true;

export const state = {
  hotels: [],
  markers: [],
  hotelsTotal: 0,
  hotel: {},
  wilaya: "",
  country: "",
  name: "",
  lat: 0,
  long: 0,
  service: "hotel",
  url: "/api/hotel/filter",
  lastpage: 1
};

export const mutations = {
  SET_HOTELS(state, hotels) {
    state.hotels = hotels
  },
  SET_HOTELS_TOTAL(state, hotelsTotal) {
    state.hotelsTotal = hotelsTotal;
  },
  RESSET_HOTELS(state, params) {
    const { name } = params;
    if (name == state.name) state.hotels = [];
  },
  SET_NAME(state, params) {
    const { name } = params;
    state.name = name;
  },
  SET_HOTEL(state, hotel) {
    state.hotel = hotel;
  },
  SET_CORDINATES(state, lat, long) {
    state.lat = lat;
    state.long = long;
  },
  SET_COUNTRY(state, country) {
    if (country != state.country) {
      state.hotels = [];
    }
    state.country = country;
  },
  SET_WILAYA(state, wilaya) {
    if (wilaya != state.wilaya) {
      state.hotels = [];
    }
    state.wilaya = wilaya;
  },
  SET_MARKERS(state, markers) {
    state.markers = markers;
  },
};

export const actions = {
  fetchHotels({ commit }, params) {
    const { nextPage, ...data } = params;
    HotelService.filterByParams(state.service, nextPage, data)
      .then((response) => {
        commit(
          "SET_HOTELS_TOTAL",
          parseInt(response.data.total)
        );
        commit("SET_NAME", params);
        commit("RESSET_HOTEL", params);
        commit("SET_HOTELS", response.data.data);
      })
      .catch((error) => {
        console.log("There was an error:");
        console.log(error);
      });
  },
  setCordinates({ commit }, lat, long ) {
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
  getMarkers({ commit }) {
    const markers = [];
    if (state.hotels.length != 0) {
      state.hotels.forEach((hotel, index) => {
        if (hotel.latitude) {
          markers[index] = {
            lat: parseFloat(hotel.latitude),
            lng: parseFloat(hotel.longitude),
            address: hotel.address,
            address_url: hotel.address_url,
            address_displayed: hotel.address_displayed,
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
