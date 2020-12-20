<template>
  <v-app dark>
    <!-- MOBILE -->

    <v-toolbar
      height="100px"
      dark
      prominent
      :src="require('../src/assets/header.png')"
      v-if="$vuetify.breakpoint.mobile == true"
    >
      <template v-slot:extension>
        <v-tabs centered>
          <router-link to="/"
            ><v-tab style="font-size: small"> Inicio </v-tab>
          </router-link>
          <router-link to="/maquinarias"
            ><v-tab style="font-size: small"> Maquinarias </v-tab></router-link
          >
          <router-link to="/servicios">
            <v-tab style="font-size: small"> Servicios </v-tab></router-link
          >
          <router-link to="/contacto"
            ><v-tab style="font-size: small"> Contacto </v-tab></router-link
          >
        </v-tabs>
      </template>
      <v-img
            :src="require('../src/assets/logo4.png')"
            class="my-3"
            contain
            height="80"
          />
    </v-toolbar>
    <!-- DESKTOP -->

    <v-toolbar
      height="150px"
      dark
      prominent
      :src="require('../src/assets/header.png')"
      v-if="$vuetify.breakpoint.mobile == false"
    >
      <template v-slot:extension>
        <v-tabs centered>
          <router-link to="/"><v-tab> Inicio </v-tab> </router-link>
          <router-link to="/maquinarias"
            ><v-tab> Maquinarias </v-tab></router-link
          >
          <router-link to="/servicios"> <v-tab> Servicios </v-tab></router-link>
          <router-link to="/contacto"><v-tab> Contacto </v-tab></router-link>
        </v-tabs>
      </template>
      <v-img
            :src="require('../src/assets/logo4.png')"
            class="my-3"
            contain
            height="100"
          />
    </v-toolbar>

    <router-view />

    <template>
    <!-- MOBILE -->

      <v-toolbar
        height="60%"
        :src="require('../src/assets/footer.png')"
        style="
          height: 50px;
          position: fixed;
          width: 100%;
          padding-bottom: 1%;
          left: 0;
          bottom: 0;
        "
        v-if="$vuetify.breakpoint.mobile == true"
      >
        <v-col class="text-center" cols="20">
          <v-card-text style="padding-bottom: 0px; padding-top: 0px">
            <v-btn
              v-for="(icon, index) in icons"
              :key="index"
              :href="icon.url"
              :title="icon.desc"
              target="_blank"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="100%">
                {{ icon.logo }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
      </v-toolbar>
    <!-- DESKTOP  -->

      <v-toolbar
        height="120%"
        :src="require('../src/assets/footer.png')"
        style="
          height: 120px;
          position: fixed;
          width: 100%;
          padding-bottom: 5%;
          left: 0;
          bottom: 0;
        "
        v-if="$vuetify.breakpoint.mobile == false"
      >
        <v-col class="text-center" cols="20">
          <v-card-text style="padding-bottom: 0px; padding-top: 0px">
            <v-btn
              v-for="(icon, index) in icons"
              :key="index"
              :href="icon.url"
              :title="icon.desc"
              target="_blank"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="25px">
                {{ icon.logo }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vigolo Maquinarias</strong>
          </v-card-text>
        </v-col>
      </v-toolbar>
    </template>
  </v-app>
</template>

<style lsng="scss">
.v-application a {
  text-decoration: none !important;
  color: inherit !important;
}
body {
  text-decoration: none !important;
  color: inherit !important;
}
.router-link-exact-active {
  color: inherit !important;
}
.router-link {
  text-decoration: inherit;
  vertical-align: inherit;
  width: 100%;
  height: 150px;
}
.v-tab {
  height: 100%;
  width: 100%;
}
a {
  text-decoration: none !important;
  color: antiquewhite !important;
  text-decoration: inherit;
  vertical-align: inherit;
  margin-left: 5px !important;
  margin-right: 5px !important;
}
.mx-4.white--text.v-btn.v-btn--flat.v-btn--icon.v-btn--round.theme--light.v-size--default {
  margin-left: 5px !important;
  margin-right: 5px !important;
}

.v-application a {
  color: antiquewhite !important;
  margin-left: 5px;
  margin-right: 5px;
}
</style>

<script>
export default {
  name: "App",
  data: () => ({
    icons: [
      {
        logo: "mdi-facebook",
        url: "https://www.facebook.com/vigmaq/",
        desc: "VigMaq - Facebook"
      },
      {
        logo: "mdi-whatsapp",
        url: "https://api.whatsapp.com/send?phone=542234977858",
        desc: "Envianos un Whatsapp"
      },
      {
        logo: "mdi-instagram",
        url: "https://www.instagram.com/vigoloventas/",
        desc: "VigMaq - Instagram"
      },
      {
        logo: "mdi-google-maps",
        url: "https://goo.gl/maps/S3baCm7Nzj2nuD2a6",
        desc: "VigMaq - Ubicación"
      },
      {
        logo: "mdi-email",
        url: "mailto:ventas@vigolomaquinarias.com",
        desc: "Envianos un correo electrónico"
      }
    ]
  })
};
</script>
