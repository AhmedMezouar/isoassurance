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
  service:"hotel",
  url: "/api/hotel/filter",
};

export const mutations = {
  SET_HOTELS(state, hotels) {
    state.hotels.push(...hotels);
  },
  SET_HOSPITALS_TOTAL(state, hotelsTotal) {
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
  fetchHotel({ commit }, params) {
    console.log("hmida")
    const { nextPage, ...data } = params;
    HotelService.getAll(state.url, nextPage, data)
      .then((response) => {
        commit(
          "SET_HOTEL_TOTAL",
          parseInt(response.headers["x-total-count"])
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