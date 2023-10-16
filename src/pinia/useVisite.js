import { checkNameInArray, checkNameInArrayIdentity } from "@/Helpers/base";
import { defineStore } from "pinia";

export const useVisiteStore = defineStore("main", {
  state: () => ({
    visite: {
      account_id: 0,
      childrens: [],
      couples: [],
      price: 0.0,
      priceReduced: 0.0,
      doctor_id: 0,
      patient_identity: [],
    },
    isAuthentificated: false,
    originalChildrens: [],
    originalCouples: [],
    isFamily: false,
    toogleChildren: false,
    toogleCouples: false,
    lastIndexChildren: -1,
    lastIndexCouples: -1,
    gender: "Homme",
  }),
  actions: {
    async addPersonalInfromation(person) {
      /* eslint-disable */
      const { id, name, surname, gender, age } = person;
      const user = JSON.parse(localStorage.getItem("user"));
      const doctor_id = user.data.id;
      this.visite.patient_identity.push({
        name: name,
        surname: surname,
        age: age,
      });
      this.visite.account_id = id;
      this.visite.doctor_id = doctor_id;
      this.gender = gender;
    },
    async createPatientAlone() {
      const person = this.visite;
      const { name, surname, age } = person;
      this.visite.patient_identity.push({
        name: name,
        surname: surname,
        age: age,
      });
    },
    checkIsAuthenticated() {
      const isAuthentificated = localStorage.getItem("isAuthentificated");
      if (isAuthentificated) return true;
      return false;
    },
    async addChildren(childE, isChecked) {
      let child = JSON.parse(childE);
      if (checkNameInArray(this.visite.childrens, child, isChecked)) {
        this.visite.childrens.push(child);
        console.log(this.visite.childrens);
      }
      if (
        checkNameInArrayIdentity(
          this.visite.patient_identity,
          child,
          isChecked

        )
      )
        this.visite.patient_identity.push(child);
    },
    async addCouples(coupleE, isChecked) {
      let couple=JSON.parse(coupleE);
      if (checkNameInArray(this.visite.couples, couple, isChecked)) {

        this.visite.couples.push(JSON.parse(coupleE));
      }
      if (
        checkNameInArrayIdentity(
          this.visite.patient_identity,
          couple,
          isChecked
        )
      )
        this.visite.patient_identity.push(couple);
    },
    //add original
    async addOriginalChildrens(childrens) {
      this.originalChildrens = childrens;
    },
    async addOriginalCouples(couples) {
      this.originalCouples = couples;
    },
    async changeVisteToFamilyStatus() {
      this.isFamily = true;
    },
    async changeVisteToAloneStatus() {
      this.isFamily = false;
    },
    async addPrice(price, priceReduced) {
      this.visite.price = price;
      this.visite.priceReduced = priceReduced;
    },
  },
  getters: {
    getVisite(state) {
      return state.visite;
    },
  },
});
