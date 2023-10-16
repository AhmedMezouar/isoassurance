<template>
  <MyHeader2></MyHeader2>
  <div class="relative col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="relative w-full mb-3">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Email
          </label>
          <Field
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" class="error-feedback" />
        </div>

        <div class="relative w-full mb-3">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Password
          </label>

          <Field
            type="password"
            name="password"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Password"
          />
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="text-center mt-6">
          <button
            :disabled="loading"
            class="bg-blue-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
          >
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            Login
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { Form, Field, ErrorMessage } from "vee-validate";
import { useVisiteStore } from "../../pinia/useVisite";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useRouter, useRoute } from 'vue-router'
import axios from "axios";
import MyHeader2 from "../header/MyHeader2.vue";
const router=useRouter()


const handleLogin=(user)=>{
  const appointement=useVisiteStore();
  axios
    .post("https://backend.assuranceiso.com/api/login", user)
    .then()
    .then((response) => {

      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("isAuthentificated",true);
      appointement.isAuthentificated=true
       router.push('/visite')

    })
    .catch((error)=>{
      toast.error("either email or password is wrong, Please try again later", {
                        autoClose: 6000,
                        closeButton:true,
                        hideProgressBar:false,
                        position:toast.POSITION.TOP_CENTER,
                        theme:toast.THEME.COLORED
                      });
    });


         
     
  
}
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}
.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}
.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.error-feedback {
  color: red;
}
</style>
