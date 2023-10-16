import MyAppointement from "../components/MyAppointement";
import LoginComponent from "../components/doctor/LoginComponent";

import ReservationComponent from '../components/newinterface/ReservationComponent.vue';

function getDoctorRouter() { 
  return [
    {
      path: "",
      component: MyAppointement,
    },
    {
      path: "login",
      component: LoginComponent,
    },
    {
      path: "reservation",
      component: ReservationComponent,
    },
  ];
}

export { getDoctorRouter };
