<template>
    <div
      class="py-11 w-full"
      style="background-color: #383838; color: #c9c9c9"
    >
      <div class="flex flex-wrap" style="width: var(--inso-w);margin-inline: auto;">
        <div class="lg:basis-1/3 w-full">
          <img src="/inso-pics/LOGO.svg" class="w-4/5" />
        </div>
        <div class="basis-1/2 lg:basis-1/3 flex justify-center items-center">
          <h5
            class="uppercase mb-3 font-bold text-white text-xl lg:inline hidden"
          >
            {{ $store.getters.getT("SOCIAL MEDIA") }}
          </h5>
        </div>
        <div class="basis-1/2 lg:basis-1/3 flex justify-center items-center">
          <h5
            class="uppercase mb-3 font-bold text-white text-xl lg:inline hidden"
          >
            {{ $store.getters.getT("languages") }}
          </h5>
        </div>
      </div>
      <div class="flex flex-wrap" style="width: var(--inso-w);margin-inline: auto;">
        <div class="lg:basis-1/3 mb-6 lg:mb-0">
          <p class="font-light mb-5 capitalize foot">
            <i>
              {{ $store.getters.getT("Adress") }} : {{
                $store.getters.getT("Centre commercial")
              }}
            </i>
          </p>

          <p class="font-light lg:mb-10" style="margin-top: -35px;">
            <i>
              <div class="flex flex-row capitalize">
                {{ $store.getters.getT("Phone") }}&nbsp; : &nbsp;
                <div class="flex flex-col gap-2">
                  <span id="phoneiso">(+213) 0556 00 00 23</span>
                  <span id="faxiso">(+213) 0556 00 00 54</span>
                </div>
              </div>

              <br />
              <span class="capitalize">{{ $store.getters.getT("eMail") }}</span> : 
              <span id="mailiso"> Info@assuranceiso.com </span>
            </i>
          </p>
          <div
            class="relative rounded-xl overflow-hidden mt-4 lg:flex hidden"
            >
            <div
              class="absolute right-0 px-3 flex items-center rounded-r-xl h-10"
              style="background-color: #69b419;bottom: 40px;height: 100%;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                viewBox="0 0 40 32"
              >
                <path
                  id="mail_FILL0_wght400_GRAD0_opsz48_1_"
                  data-name="mail_FILL0_wght400_GRAD0_opsz48 (1)"
                  d="M7,40a2.878,2.878,0,0,1-2.1-.9A2.878,2.878,0,0,1,4,37V11a2.878,2.878,0,0,1,.9-2.1A2.878,2.878,0,0,1,7,8H41a2.878,2.878,0,0,1,2.1.9A2.878,2.878,0,0,1,44,11V37a3.076,3.076,0,0,1-3,3ZM24,24.9,7,13.75V37H41V13.75Zm0-3L40.8,11H7.25ZM7,13.75v0Z"
                  transform="translate(-4 -8)"
                  fill="#fff"
                />
              </svg>
            </div>
            <input
              placeholder="subscribe on newslatter"
              type="text"
              name="newlatter"
              id="newlatter"
              class="rounded-xl w-full py-2 pl-2 pr-14 text-black"
            />
          </div>
        </div>
        <div class="w-full lg:basis-1/3" style="color: white !important;">
          <div class="flex flex-col items-center justify-center">
            <div class="flex-col lg:flex hidden" >
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100087903936277" class="uppercase footerLink lg:inline hidden">{{
                $store.getters.getT("facebook")
              }}</a>
              <a target="_blank"  href="https://www.facebook.com/messages/t/114476508142085" class="uppercase footerLink lg:inline hidden">{{
                $store.getters.getT("messenger")
              }}</a>
              <a  target="_blank"  href="https://www.instagram.com/iso_assurance/" class="uppercase footerLink lg:inline hidden">{{
                $store.getters.getT("instagram")
              }}</a>
              <a href="viber://call?number=+213556000023" class="uppercase footerLink lg:inline hidden">{{
                $store.getters.getT("viber")
              }}</a>
              <a target="_blank"  href="https://wa.me/+213556000023" class="uppercase footerLink lg:inline hidden">{{
                $store.getters.getT("whats'app")
              }}</a>
            </div>
            <div
              id="SocIcn"
              class="flex mt-6 justify-between lg:justify-start"
            >
              <a target="_blank"  href="https://www.facebook.com/profile.php?id=100087903936277" class="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 20.199 37.714"
                >
                  <path
                    id="Icon_awesome-facebook-f"
                    data-name="Icon awesome-facebook-f"
                    d="M20.485,21.214l1.047-6.825H14.983V9.96c0-1.867.915-3.687,3.848-3.687h2.977V.461A36.307,36.307,0,0,0,16.523,0C11.13,0,7.6,3.269,7.6,9.187v5.2h-6v6.825h6v16.5h7.378v-16.5Z"
                    transform="translate(-1.609)"
                    fill="#c9c9c9"
                  />
                </svg>
              </a>
              <a target="_blank"  href="https://www.facebook.com/messages/t/114476508142085" class="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 36.535 36.534"
                >
                  <path
                    id="Icon_awesome-facebook-messenger"
                    data-name="Icon awesome-facebook-messenger"
                    d="M18.871.563C8.556.563.563,8.1.563,18.283A17.319,17.319,0,0,0,6.313,31.39c.615.553.488.874.593,4.289A1.467,1.467,0,0,0,8.96,36.974c3.9-1.716,3.947-1.852,4.608-1.672C24.859,38.409,37.1,31.183,37.1,18.283,37.1,8.1,29.186.563,18.871.563ZM29.863,14.2l-5.377,8.513a2.753,2.753,0,0,1-3.971.731l-4.278-3.2a1.1,1.1,0,0,0-1.326,0L9.139,24.62a.868.868,0,0,1-1.26-1.154l5.377-8.513a2.752,2.752,0,0,1,3.971-.731l4.277,3.2a1.1,1.1,0,0,0,1.326,0L28.6,13.049A.866.866,0,0,1,29.863,14.2Z"
                    transform="translate(-0.563 -0.563)"
                    fill="#c9c9c9"
                  />
                </svg>
              </a>
              <a target="_blank"  href="https://www.instagram.com/iso_assurance/" class="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 35.211 35.204"
                >
                  <path
                    id="Icon_awesome-instagram"
                    data-name="Icon awesome-instagram"
                    d="M17.6,10.814A9.026,9.026,0,1,0,26.63,19.84,9.012,9.012,0,0,0,17.6,10.814Zm0,14.894a5.868,5.868,0,1,1,5.868-5.868A5.879,5.879,0,0,1,17.6,25.708ZM29.1,10.445A2.105,2.105,0,1,1,27,8.339,2.1,2.1,0,0,1,29.1,10.445Zm5.978,2.137c-.134-2.82-.778-5.318-2.844-7.376s-4.556-2.7-7.376-2.844c-2.906-.165-11.618-.165-14.524,0-2.812.134-5.31.778-7.376,2.836S.26,9.753.118,12.573C-.047,15.48-.047,24.192.118,27.1c.134,2.82.778,5.318,2.844,7.376s4.556,2.7,7.376,2.844c2.906.165,11.618.165,14.524,0,2.82-.134,5.318-.778,7.376-2.844s2.7-4.556,2.844-7.376c.165-2.906.165-11.61,0-14.517ZM31.328,30.217a5.941,5.941,0,0,1-3.346,3.346c-2.317.919-7.816.707-10.377.707s-8.067.2-10.377-.707a5.941,5.941,0,0,1-3.346-3.346C2.962,27.9,3.174,22.4,3.174,19.84s-.2-8.067.707-10.377A5.941,5.941,0,0,1,7.228,6.116C9.545,5.2,15.044,5.409,17.6,5.409s8.067-.2,10.377.707a5.941,5.941,0,0,1,3.346,3.346c.919,2.317.707,7.816.707,10.377S32.247,27.907,31.328,30.217Z"
                    transform="translate(0.005 -2.238)"
                    fill="#c9c9c9"
                  />
                </svg>
              </a>
              <a target="_blank" href="https://wa.me/+213556000023" class="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 39.041 39.042"
                >
                  <path
                    id="Icon_simple-whatsapp"
                    data-name="Icon simple-whatsapp"
                    d="M28.464,23.4c-.49-.244-2.874-1.41-3.318-1.571s-.769-.244-1.095.244-1.254,1.568-1.536,1.89-.568.342-1.051.122a13.2,13.2,0,0,1-3.909-2.416,14.759,14.759,0,0,1-2.7-3.367c-.283-.488-.031-.756.211-1,.221-.22.49-.561.734-.851a4.124,4.124,0,0,0,.483-.807.894.894,0,0,0-.041-.852c-.122-.244-1.093-2.635-1.5-3.589-.39-.95-.792-.83-1.093-.83-.28-.024-.6-.024-.929-.024a1.834,1.834,0,0,0-1.3.584,5.431,5.431,0,0,0-1.7,4.026,9.518,9.518,0,0,0,1.983,5c.242.317,3.424,5.2,8.3,7.3,1.161.488,2.066.781,2.772,1.023a6.73,6.73,0,0,0,3.058.2c.934-.148,2.874-1.173,3.279-2.32a4.027,4.027,0,0,0,.293-2.318c-.12-.22-.439-.342-.927-.561M19.62,35.381h-.026a16.273,16.273,0,0,1-8.223-2.245l-.586-.348-6.1,1.586L6.32,28.445l-.389-.61a16.134,16.134,0,0,1,25.128-19.9A15.922,15.922,0,0,1,35.791,19.3,16.154,16.154,0,0,1,19.63,35.383M33.38,5.611A19.751,19.751,0,0,0,19.594,0,19.341,19.341,0,0,0,2.759,29.018L0,39.041l10.305-2.687a19.622,19.622,0,0,0,9.289,2.354h.01A19.423,19.423,0,0,0,39.041,19.356,19.186,19.186,0,0,0,33.356,5.674"
                    fill="#c9c9c9"
                  />
                </svg>
              </a>
              <a target="_blank"  href="viber://call?number=+213556000023" class="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 38.143 40.225"
                >
                  <path
                    id="Icon_awesome-viber"
                    data-name="Icon awesome-viber"
                    d="M34.769,3.92C33.771,3,29.734.07,20.731.031c0,0-10.613-.636-15.781,4.108-2.875,2.875-3.888,7.093-4,12.317S.708,31.468,10.142,34.123h.008l-.008,4.053s-.063,1.642,1.021,1.972c1.3.408,2.074-.841,3.323-2.184.683-.738,1.626-1.822,2.341-2.647a36.5,36.5,0,0,0,11.979-.88c1.3-.424,8.68-1.367,9.874-11.155,1.241-10.1-.6-16.481-3.912-19.364Zm1.092,18.625c-1.013,8.17-6.991,8.688-8.091,9.042a33.772,33.772,0,0,1-10.306.88s-4.085,4.925-5.357,6.206c-.416.416-.872.377-.864-.448,0-.542.031-6.732.031-6.732h0c-8-2.215-7.525-10.55-7.439-14.91S4.746,8.648,7.181,6.245c4.375-3.967,13.385-3.378,13.385-3.378,7.612.031,11.257,2.325,12.105,3.1,2.8,2.4,4.234,8.154,3.189,16.583ZM24.942,16.2a.507.507,0,1,1-1.013.047,2.429,2.429,0,0,0-2.561-2.663.507.507,0,0,1,.055-1.013A3.416,3.416,0,0,1,24.942,16.2Zm1.595.888c.079-3.331-2-5.939-5.954-6.229a.508.508,0,0,1,.071-1.013c4.556.33,6.983,3.464,6.9,7.266a.507.507,0,0,1-1.013-.024Zm3.692,1.053a.507.507,0,0,1-1.013.008c-.047-6.4-4.313-9.89-9.489-9.929a.507.507,0,0,1,0-1.013C25.515,7.242,30.174,11.241,30.229,18.138Zm-.888,7.706v.016c-.848,1.493-2.435,3.142-4.069,2.616l-.016-.024a30.2,30.2,0,0,1-8.028-4.438A20.536,20.536,0,0,1,13.9,20.683a25.491,25.491,0,0,1-2.419-3.661,23.472,23.472,0,0,1-2.042-4.375c-.526-1.634,1.115-3.221,2.616-4.069h.016a1.43,1.43,0,0,1,1.877.306s.974,1.163,1.39,1.736c.393.534.919,1.39,1.194,1.87a1.64,1.64,0,0,1-.291,2.09l-.943.754a1.382,1.382,0,0,0-.416,1.1s1.4,5.287,6.622,6.622a1.382,1.382,0,0,0,1.1-.416l.754-.943a1.64,1.64,0,0,1,2.09-.291,20.353,20.353,0,0,1,3.6,2.584,1.4,1.4,0,0,1,.3,1.854Z"
                    transform="translate(-0.927 -0.002)"
                    fill="#c9c9c9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="basis-1/3 lg:inline hidden">
          <div class="flex flex-col items-center justify-center">
            <h5 class="uppercase mb-3 font-bold text-white text-xl lg:hidden">
              {{ $store.getters.getT("languages") }}
            </h5>
            <div class="flex-col flex">
              <span
                class="capitalize footerLink hover:cursor-pointer"
                @click="changeLang('en')"
                >{{ $store.getters.getT("english") }}</span
              >
              <span
                class="capitalize footerLink hover:cursor-pointer"
                @click="changeLang('ar')"
                >{{ $store.getters.getT("العربية") }}</span
              >
              <span
                class="capitalize footerLink hover:cursor-pointer"
                @click="changeLang('fr')"
                >{{ $store.getters.getT("Français") }}</span
              >
            </div>
            <a href="#" class="capitalize mt-7" @click="scrollTop()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80.6"
                height="80.6"
                viewBox="0 0 137.125 137.125"
              >
                <path
                  id="assistant_navigation_FILL0_wght400_GRAD0_opsz48"
                  d="M45.309,104.787,72.563,92.446l27.254,12.341.857-.857L72.563,35.882,44.452,103.93Zm27.254,36.338a66.341,66.341,0,0,1-26.568-5.4,69.078,69.078,0,0,1-36.6-36.6A66.341,66.341,0,0,1,4,72.563,66.763,66.763,0,0,1,9.4,45.823,68.52,68.52,0,0,1,24.14,24.055,70.283,70.283,0,0,1,45.995,9.4,66.341,66.341,0,0,1,72.563,4,66.763,66.763,0,0,1,99.3,9.4a68.456,68.456,0,0,1,36.424,36.424,66.763,66.763,0,0,1,5.4,26.739,66.341,66.341,0,0,1-5.4,26.568,70.283,70.283,0,0,1-14.655,21.854A68.52,68.52,0,0,1,99.3,135.726,66.763,66.763,0,0,1,72.563,141.125Zm0-10.284q24.34,0,41.309-17.055a56.3,56.3,0,0,0,16.969-41.223q0-24.34-16.969-41.309T72.563,14.284A56.3,56.3,0,0,0,31.339,31.254Q14.284,48.223,14.284,72.563a56.161,56.161,0,0,0,17.055,41.223A56.161,56.161,0,0,0,72.563,130.841ZM72.563,72.563Z"
                  transform="translate(-4 -4)"
                  fill="#69b419"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="flex justify-center widthMain flex-nowrap w-full dtopor">
        <h6 class="text-center">
          {{ $store.getters.getT("g13") }}
        </h6>
      </div> 
      </div>
    </div>
</template>
<script>
    export default{
      methods:{
        changeLang(lang){
                this.lang=lang;
                this.$store.commit('SET_lang',this.lang)
                this.showLangDropDown=false
            }
      },
    }
</script>